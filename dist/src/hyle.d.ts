import { BlobTx } from "./transactions.ts";
export declare function broadcastProofTx(network: string, hash: string, blobIndex: number, contractName: string, proof: Uint8Array): Promise<any>;
export declare function broadcastBlobTx(network: string, blobTx: BlobTx): Promise<string>;
export declare function checkTxesStatus(network: string, hashes: string[]): Promise<{
    status: string;
    error: string;
} | {
    status: string;
    error?: undefined;
}>;
export declare function checkTxStatus(network: string, txHash: string): Promise<{
    status: string;
    error: string;
} | {
    status: string;
    error?: undefined;
}>;
export declare function checkContractExists(network: string, contractName: string): Promise<boolean>;
export declare function registerContract(network: string, verifier: string, contractName: string, programId: Uint8Array, stateDigest: Uint8Array): Promise<any>;
//# sourceMappingURL=hyle.d.ts.map