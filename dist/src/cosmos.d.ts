export declare function setupCosmos(address: string): Promise<void>;
export declare function broadcastProofTx(hash: string, payloadIndex: number, contractName: string, proof: string): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
export declare function broadcastPayloadTx(payloads: {
    contractName: string;
    payload: string;
}[]): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
export declare function checkTxStatus(hash: string): Promise<{
    status: string;
    error: string;
} | {
    status: string;
    error?: undefined;
}>;
export declare function checkContractExists(network: string, contractName: string): Promise<boolean>;
export declare function registerContract(verifier: string, contractName: string, programId: Uint8Array, stateDigest: Uint8Array): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
//# sourceMappingURL=cosmos.d.ts.map