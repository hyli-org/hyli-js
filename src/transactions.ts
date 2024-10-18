import { getNetworkApiUrl } from "./network";

export type Blob = {
    contractName: string,
    data: number[];
}

export type BlobTx = {
    identity: string;
    blobs: Blob[];
};

export type BlobTxInfo = BlobTx & {
    txHash: string;
    transactionStatus: "Unknown" | "Success" | "Failure" | "Sequenced";
};

export class TransactionsStore {
    network: string;
    blobTransactions: BlobTxInfo[];

    constructor(network: string, customData?: BlobTxInfo[]) {
        this.network = network;
        this.blobTransactions = customData ?? [];
    }

    async loadBlobTxsLinkedWithContract(contractName: string): Promise<void> {
        try {
            const response = await fetch(
                `${getNetworkApiUrl(this.network)}/v1/indexer/blobs/transactions/contract/${contractName}`
            );
            if (!response.ok) {
                return;
            }
            const resp = await response.json();
            const txs: BlobTxInfo[] = resp.map((tx: any) => ({
                txHash: tx.tx_hash,
                identity: tx.identity,
                transactionStatus: tx.transaction_status,
                blobs: tx.blobs.map((blob: any) => ({
                    contractName: blob.contract_name,
                    data: blob.data,
                })),
            }));
            this.blobTransactions = txs;
        } catch (error) {
            console.error(`Error fetching transactions: ${error}`);
        }
    }

    addListerOnContract(contractName: string) {
        const socket = new WebSocket(
            `${getNetworkApiUrl(this.network)}/v1/indexer/blobs/transactions/contract/${contractName}/ws`
        );

        socket.addEventListener("message", (tx) => {
            const newTx = JSON.parse(tx.data);
            this.blobTransactions.push({
                txHash: newTx.tx_hash,
                identity: newTx.identity,
                transactionStatus: newTx.transaction_status,
                blobs: newTx.blobs.map((blob: any) => ({
                    contractName: blob.contract_name,
                    data: blob.data,
                })),
            });
        });
    }
}
