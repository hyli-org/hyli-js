export type Blob = {
    contractName: string;
    data: number[];
};
export type BlobTx = {
    identity: string;
    blobs: Blob[];
};
export type BlobTxInfo = BlobTx & {
    txHash: string;
    transactionStatus: "Unknown" | "Success" | "Failure" | "Sequenced";
};
export declare class TransactionsStore {
    network: string;
    blobTransactions: BlobTxInfo[];
    constructor(network: string, customData?: BlobTxInfo[]);
    loadBlobTxsLinkedWithContract(contractName: string): Promise<void>;
    addListenerOnContract(contractName: string, callback?: (tx: BlobTxInfo) => void): void;
}
//# sourceMappingURL=transactions.d.ts.map