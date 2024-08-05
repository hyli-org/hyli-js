import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "hyle.zktx.v1";
/** Payload is a blob */
export interface Payload {
    /** Name of target contract */
    contractName: string;
    /** Payload data */
    data: Uint8Array;
}
/** execute a zk-proven state change - request type */
export interface MsgPublishPayloads {
    /** Identity is the identity of the TX sender */
    identity: string;
    /** list of payloads */
    payloads: Payload[];
}
/** No response */
export interface MsgPublishPayloadsResponse {
}
/** Prove a previously published payload */
export interface MsgPublishPayloadProof {
    /** Tx hash of the payload to prove */
    txHash: Uint8Array;
    /** Index of the payload in the tx */
    payloadIndex: number;
    /** Contract name */
    contractName: string;
    /** Proof of the payload */
    proof: Uint8Array;
}
/** No response */
export interface MsgPublishPayloadProofResponse {
}
/** Register a contract - request type */
export interface MsgRegisterContract {
    /** owner is the contract owner */
    owner: string;
    /** Identifier of the verifier */
    verifier: string;
    /** Identifier of the smart contract */
    programId: Uint8Array;
    /** Initial state digest */
    stateDigest: Uint8Array;
    /** Identifier of the contract name */
    contractName: string;
}
/** Register a contract - response type */
export interface MsgRegisterContractResponse {
}
export declare const Payload: {
    encode(message: Payload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Payload;
    fromJSON(object: any): Payload;
    toJSON(message: Payload): unknown;
    create<I extends {
        contractName?: string | undefined;
        data?: Uint8Array | undefined;
    } & {
        contractName?: string | undefined;
        data?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof Payload>]: never; }>(base?: I): Payload;
    fromPartial<I_1 extends {
        contractName?: string | undefined;
        data?: Uint8Array | undefined;
    } & {
        contractName?: string | undefined;
        data?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Payload>]: never; }>(object: I_1): Payload;
};
export declare const MsgPublishPayloads: {
    encode(message: MsgPublishPayloads, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPublishPayloads;
    fromJSON(object: any): MsgPublishPayloads;
    toJSON(message: MsgPublishPayloads): unknown;
    create<I extends {
        identity?: string | undefined;
        payloads?: {
            contractName?: string | undefined;
            data?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        identity?: string | undefined;
        payloads?: ({
            contractName?: string | undefined;
            data?: Uint8Array | undefined;
        }[] & ({
            contractName?: string | undefined;
            data?: Uint8Array | undefined;
        } & {
            contractName?: string | undefined;
            data?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["payloads"][number], keyof Payload>]: never; })[] & { [K_1 in Exclude<keyof I["payloads"], keyof {
            contractName?: string | undefined;
            data?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgPublishPayloads>]: never; }>(base?: I): MsgPublishPayloads;
    fromPartial<I_1 extends {
        identity?: string | undefined;
        payloads?: {
            contractName?: string | undefined;
            data?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        identity?: string | undefined;
        payloads?: ({
            contractName?: string | undefined;
            data?: Uint8Array | undefined;
        }[] & ({
            contractName?: string | undefined;
            data?: Uint8Array | undefined;
        } & {
            contractName?: string | undefined;
            data?: Uint8Array | undefined;
        } & { [K_3 in Exclude<keyof I_1["payloads"][number], keyof Payload>]: never; })[] & { [K_4 in Exclude<keyof I_1["payloads"], keyof {
            contractName?: string | undefined;
            data?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof MsgPublishPayloads>]: never; }>(object: I_1): MsgPublishPayloads;
};
export declare const MsgPublishPayloadsResponse: {
    encode(_: MsgPublishPayloadsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPublishPayloadsResponse;
    fromJSON(_: any): MsgPublishPayloadsResponse;
    toJSON(_: MsgPublishPayloadsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgPublishPayloadsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgPublishPayloadsResponse;
};
export declare const MsgPublishPayloadProof: {
    encode(message: MsgPublishPayloadProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPublishPayloadProof;
    fromJSON(object: any): MsgPublishPayloadProof;
    toJSON(message: MsgPublishPayloadProof): unknown;
    create<I extends {
        txHash?: Uint8Array | undefined;
        payloadIndex?: number | undefined;
        contractName?: string | undefined;
        proof?: Uint8Array | undefined;
    } & {
        txHash?: Uint8Array | undefined;
        payloadIndex?: number | undefined;
        contractName?: string | undefined;
        proof?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof MsgPublishPayloadProof>]: never; }>(base?: I): MsgPublishPayloadProof;
    fromPartial<I_1 extends {
        txHash?: Uint8Array | undefined;
        payloadIndex?: number | undefined;
        contractName?: string | undefined;
        proof?: Uint8Array | undefined;
    } & {
        txHash?: Uint8Array | undefined;
        payloadIndex?: number | undefined;
        contractName?: string | undefined;
        proof?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgPublishPayloadProof>]: never; }>(object: I_1): MsgPublishPayloadProof;
};
export declare const MsgPublishPayloadProofResponse: {
    encode(_: MsgPublishPayloadProofResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPublishPayloadProofResponse;
    fromJSON(_: any): MsgPublishPayloadProofResponse;
    toJSON(_: MsgPublishPayloadProofResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgPublishPayloadProofResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgPublishPayloadProofResponse;
};
export declare const MsgRegisterContract: {
    encode(message: MsgRegisterContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterContract;
    fromJSON(object: any): MsgRegisterContract;
    toJSON(message: MsgRegisterContract): unknown;
    create<I extends {
        owner?: string | undefined;
        verifier?: string | undefined;
        programId?: Uint8Array | undefined;
        stateDigest?: Uint8Array | undefined;
        contractName?: string | undefined;
    } & {
        owner?: string | undefined;
        verifier?: string | undefined;
        programId?: Uint8Array | undefined;
        stateDigest?: Uint8Array | undefined;
        contractName?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgRegisterContract>]: never; }>(base?: I): MsgRegisterContract;
    fromPartial<I_1 extends {
        owner?: string | undefined;
        verifier?: string | undefined;
        programId?: Uint8Array | undefined;
        stateDigest?: Uint8Array | undefined;
        contractName?: string | undefined;
    } & {
        owner?: string | undefined;
        verifier?: string | undefined;
        programId?: Uint8Array | undefined;
        stateDigest?: Uint8Array | undefined;
        contractName?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgRegisterContract>]: never; }>(object: I_1): MsgRegisterContract;
};
export declare const MsgRegisterContractResponse: {
    encode(_: MsgRegisterContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterContractResponse;
    fromJSON(_: any): MsgRegisterContractResponse;
    toJSON(_: MsgRegisterContractResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgRegisterContractResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgRegisterContractResponse;
};
/** Msg defines the module Msg service. */
export interface Msg {
    /** execute a zk-proven state change */
    PublishPayloads(request: MsgPublishPayloads): Promise<MsgPublishPayloadsResponse>;
    /** Verify a payload */
    PublishPayloadProof(request: MsgPublishPayloadProof): Promise<MsgPublishPayloadProofResponse>;
    /** RegisterContract registers a contract */
    RegisterContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse>;
}
export declare const MsgServiceName = "hyle.zktx.v1.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    PublishPayloads(request: MsgPublishPayloads): Promise<MsgPublishPayloadsResponse>;
    PublishPayloadProof(request: MsgPublishPayloadProof): Promise<MsgPublishPayloadProofResponse>;
    RegisterContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
//# sourceMappingURL=tx.d.ts.map