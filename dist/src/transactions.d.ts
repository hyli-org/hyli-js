export type TransactionInfo = {
    hash: string;
    height: number;
    index: number;
    status: "success" | "failure" | "sequenced";
    type: "/hyle.zktx.v1.MsgRegisterContract" | "/hyle.zktx.v1.MsgPublishPayloads" | "/hyle.zktx.v1.MsgPublishPayloadProof";
    contracts: string[];
    rawData: string;
    rawFullTxData: any;
};
interface ParsableTx {
    type: string;
    rawData: string;
}
export declare function getParsedTx<T>(data: ParsableTx): T;
export declare class TransactionsStore {
    network: string;
    transactionData: Record<string, TransactionInfo & {
        loading?: boolean;
    }>;
    constructor(network: string, customData?: Record<string, TransactionInfo>);
    loadTransactionData(txHash: string): Promise<void>;
    loadTxData(): Promise<void>;
    loadContractTxs(contract_name: string): Promise<void>;
}
export {};
//# sourceMappingURL=transactions.d.ts.map