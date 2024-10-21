import { BlobTxInfo, Blob } from "./transactions";
export declare class Erc20Parser {
    contractName: string;
    balancesSettled: Record<string, number>;
    balancesPending: Record<string, number>;
    pendingTxs: Record<string, BlobTxInfo>;
    constructor(contractName?: string, initialState?: Record<string, number>);
    consumeTx(tx: BlobTxInfo): void;
    processBlobs(txBlobs: Blob[], status: "Sequenced" | "Success"): void;
    settleTx(txHash: string, success: boolean): void;
    removePendingTx(txHash: string): void;
}
//# sourceMappingURL=erc20.d.ts.map