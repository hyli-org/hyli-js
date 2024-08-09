import { MsgPublishPayloads } from "./proto/tx";
import { TransactionInfo } from "./transactions";
export declare class Erc20Parser {
    contractName: string;
    balancesSettled: Record<string, number>;
    balancesPending: Record<string, number>;
    pendingPerAccount: Record<string, string[]>;
    pendingTxs: Record<string, MsgPublishPayloads>;
    constructor(contractName?: string);
    consumeTx(tx: TransactionInfo): void;
    consumePayload(msg: MsgPublishPayloads, hash: string): void;
    settleTx(hash: string, success: boolean): void;
}
//# sourceMappingURL=erc20.d.ts.map