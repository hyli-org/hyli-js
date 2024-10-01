import { deserByteArray } from "./ByteArray";
import { BlobTxInfo, Blob } from "./transactions";

export class Erc20Parser {
    contractName = "erc20";

    balancesSettled = {} as Record<string, number>;
    balancesPending = {} as Record<string, number>;
    pendingTxs = {} as Record<string, BlobTxInfo>;

    constructor(contractName?: string, initialState?: Record<string, number>) {
        if (contractName) this.contractName = contractName;
        if (initialState) this.balancesSettled = initialState;
    }

    consumeTx(tx: BlobTxInfo) {
        if (tx.transactionStatus === "Sequenced") {
            this.processBlobs(tx.blobs, "Sequenced");
            this.pendingTxs[tx.txHash] = tx;
        } else if (tx.transactionStatus === "Success") {
            this.processBlobs(tx.blobs, "Success");
            this.removePendingTx(tx.txHash);
        } else if (tx.transactionStatus === "Failure") {
            this.removePendingTx(tx.txHash);
        }
    }

    processBlobs(txBlobs: Blob[], status: "Sequenced" | "Success") {
        const blobs = txBlobs.filter((x) => x.contractName === this.contractName);
        blobs.forEach((blob) => {
            const parsed = new TextDecoder().decode(new Uint8Array(blob.data));
            const felts = parsed.split(" ").slice(1);
            const fromSize = parseInt(felts[0]);
            const from = deserByteArray(felts.slice(0, fromSize + 3));
            const toSize = parseInt(felts[3 + fromSize]);
            const to = deserByteArray(felts.slice(3 + fromSize, 3 + fromSize + toSize + 3));
            const amount = parseInt(felts.slice(-1)[0]);

            if (status === "Success") {
                this.balancesSettled[from] = (this.balancesSettled[from] || 0) - amount;
                this.balancesSettled[to] = (this.balancesSettled[to] || 0) + amount;
            } else if (status === "Sequenced") {
                this.balancesPending[from] = (this.balancesPending[from] || this.balancesSettled[from] || 0) - amount;
                this.balancesPending[to] = (this.balancesPending[to] || this.balancesSettled[to] || 0) + amount;
            }
        });
    }

    settleTx(txHash: string, success: boolean) {
        const tx = this.pendingTxs[txHash];
        if (!tx) return;

        tx.blobs.forEach((blob) => {
            const parsed = new TextDecoder().decode(new Uint8Array(blob.data));
            const felts = parsed.split(" ").slice(1);
            const fromSize = parseInt(felts[0]);
            const from = deserByteArray(felts.slice(0, fromSize + 3));
            const toSize = parseInt(felts[3 + fromSize]);
            const to = deserByteArray(felts.slice(3 + fromSize, 3 + fromSize + toSize + 3));
            const amount = parseInt(felts.slice(-1)[0]);

            if (success) {
                this.balancesSettled[from] = (this.balancesSettled[from] || 0) - amount;
                this.balancesSettled[to] = (this.balancesSettled[to] || 0) + amount;
            }

            this.balancesPending[from] = (this.balancesPending[from] || 0) + amount;
            this.balancesPending[to] = (this.balancesPending[to] || 0) - amount;

            this.removePendingTx(txHash);
        });
    }

    removePendingTx(txHash: string) {
        delete this.pendingTxs[txHash];
    }
}
