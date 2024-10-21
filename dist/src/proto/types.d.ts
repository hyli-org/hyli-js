import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "hyle.zktx.v1";
/** Params defines the parameters of the module. */
export interface Params {
}
/** GenesisState is the state that must be provided at genesis. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params | undefined;
    contracts: {
        [key: string]: Contract;
    };
}
export interface GenesisState_ContractsEntry {
    key: string;
    value: Contract | undefined;
}
/** Contract is the state of a contract */
export interface Contract {
    /** The identifier of the verifier to run for this contract */
    verifier: string;
    /** An identifier for the program (may depend on verifier) */
    programId: Uint8Array;
    /** Recap of the current contract state */
    stateDigest: Uint8Array;
    /** Hash of the next TX to settle, in order */
    nextTxToSettle: Uint8Array;
    /** Latest tx received to settle, for optimisation */
    latestTxReceived: Uint8Array;
}
/** PayloadMetadata is the transient state we need to keep to settle payloads */
export interface PayloadMetadata {
    /** Hash of the payload */
    payloadHash: Uint8Array;
    /** Identity of the caller */
    identity: string;
    /** Contract name to settle */
    contractName: string;
    /** The initial state of the contract */
    initialState: Uint8Array;
    /** The next state to transition to */
    nextState: Uint8Array;
    /** If this payload was verified */
    verified: boolean;
    /** If this is a success or failure */
    success: boolean;
    /** Next TX hash in the list of TX to settle */
    nextTxHash: Uint8Array;
}
/** TxTimeout is a list of TXs used to timeout */
export interface TxTimeout {
    /** List of transactions to timeout */
    txs: Uint8Array[];
}
export declare const Params: {
    encode(_: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(_: any): Params;
    toJSON(_: Params): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): Params;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): Params;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        params?: {} | undefined;
        contracts?: {
            [x: string]: {
                verifier?: string | undefined;
                programId?: Uint8Array | undefined;
                stateDigest?: Uint8Array | undefined;
                nextTxToSettle?: Uint8Array | undefined;
                latestTxReceived?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
    } & {
        params?: ({} & {} & { [K in Exclude<keyof I["params"], never>]: never; }) | undefined;
        contracts?: ({
            [x: string]: {
                verifier?: string | undefined;
                programId?: Uint8Array | undefined;
                stateDigest?: Uint8Array | undefined;
                nextTxToSettle?: Uint8Array | undefined;
                latestTxReceived?: Uint8Array | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                verifier?: string | undefined;
                programId?: Uint8Array | undefined;
                stateDigest?: Uint8Array | undefined;
                nextTxToSettle?: Uint8Array | undefined;
                latestTxReceived?: Uint8Array | undefined;
            } & {
                verifier?: string | undefined;
                programId?: Uint8Array | undefined;
                stateDigest?: Uint8Array | undefined;
                nextTxToSettle?: Uint8Array | undefined;
                latestTxReceived?: Uint8Array | undefined;
            } & { [K_1 in Exclude<keyof I["contracts"][string], keyof Contract>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["contracts"], string | number>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I): GenesisState;
    fromPartial<I_1 extends {
        params?: {} | undefined;
        contracts?: {
            [x: string]: {
                verifier?: string | undefined;
                programId?: Uint8Array | undefined;
                stateDigest?: Uint8Array | undefined;
                nextTxToSettle?: Uint8Array | undefined;
                latestTxReceived?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
    } & {
        params?: ({} & {} & { [K_4 in Exclude<keyof I_1["params"], never>]: never; }) | undefined;
        contracts?: ({
            [x: string]: {
                verifier?: string | undefined;
                programId?: Uint8Array | undefined;
                stateDigest?: Uint8Array | undefined;
                nextTxToSettle?: Uint8Array | undefined;
                latestTxReceived?: Uint8Array | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                verifier?: string | undefined;
                programId?: Uint8Array | undefined;
                stateDigest?: Uint8Array | undefined;
                nextTxToSettle?: Uint8Array | undefined;
                latestTxReceived?: Uint8Array | undefined;
            } & {
                verifier?: string | undefined;
                programId?: Uint8Array | undefined;
                stateDigest?: Uint8Array | undefined;
                nextTxToSettle?: Uint8Array | undefined;
                latestTxReceived?: Uint8Array | undefined;
            } & { [K_5 in Exclude<keyof I_1["contracts"][string], keyof Contract>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["contracts"], string | number>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
};
export declare const GenesisState_ContractsEntry: {
    encode(message: GenesisState_ContractsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_ContractsEntry;
    fromJSON(object: any): GenesisState_ContractsEntry;
    toJSON(message: GenesisState_ContractsEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: {
            verifier?: string | undefined;
            programId?: Uint8Array | undefined;
            stateDigest?: Uint8Array | undefined;
            nextTxToSettle?: Uint8Array | undefined;
            latestTxReceived?: Uint8Array | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            verifier?: string | undefined;
            programId?: Uint8Array | undefined;
            stateDigest?: Uint8Array | undefined;
            nextTxToSettle?: Uint8Array | undefined;
            latestTxReceived?: Uint8Array | undefined;
        } & {
            verifier?: string | undefined;
            programId?: Uint8Array | undefined;
            stateDigest?: Uint8Array | undefined;
            nextTxToSettle?: Uint8Array | undefined;
            latestTxReceived?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["value"], keyof Contract>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof GenesisState_ContractsEntry>]: never; }>(base?: I): GenesisState_ContractsEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: {
            verifier?: string | undefined;
            programId?: Uint8Array | undefined;
            stateDigest?: Uint8Array | undefined;
            nextTxToSettle?: Uint8Array | undefined;
            latestTxReceived?: Uint8Array | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            verifier?: string | undefined;
            programId?: Uint8Array | undefined;
            stateDigest?: Uint8Array | undefined;
            nextTxToSettle?: Uint8Array | undefined;
            latestTxReceived?: Uint8Array | undefined;
        } & {
            verifier?: string | undefined;
            programId?: Uint8Array | undefined;
            stateDigest?: Uint8Array | undefined;
            nextTxToSettle?: Uint8Array | undefined;
            latestTxReceived?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I_1["value"], keyof Contract>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof GenesisState_ContractsEntry>]: never; }>(object: I_1): GenesisState_ContractsEntry;
};
export declare const Contract: {
    encode(message: Contract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): unknown;
    create<I extends {
        verifier?: string | undefined;
        programId?: Uint8Array | undefined;
        stateDigest?: Uint8Array | undefined;
        nextTxToSettle?: Uint8Array | undefined;
        latestTxReceived?: Uint8Array | undefined;
    } & {
        verifier?: string | undefined;
        programId?: Uint8Array | undefined;
        stateDigest?: Uint8Array | undefined;
        nextTxToSettle?: Uint8Array | undefined;
        latestTxReceived?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof Contract>]: never; }>(base?: I): Contract;
    fromPartial<I_1 extends {
        verifier?: string | undefined;
        programId?: Uint8Array | undefined;
        stateDigest?: Uint8Array | undefined;
        nextTxToSettle?: Uint8Array | undefined;
        latestTxReceived?: Uint8Array | undefined;
    } & {
        verifier?: string | undefined;
        programId?: Uint8Array | undefined;
        stateDigest?: Uint8Array | undefined;
        nextTxToSettle?: Uint8Array | undefined;
        latestTxReceived?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Contract>]: never; }>(object: I_1): Contract;
};
export declare const PayloadMetadata: {
    encode(message: PayloadMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PayloadMetadata;
    fromJSON(object: any): PayloadMetadata;
    toJSON(message: PayloadMetadata): unknown;
    create<I extends {
        payloadHash?: Uint8Array | undefined;
        identity?: string | undefined;
        contractName?: string | undefined;
        initialState?: Uint8Array | undefined;
        nextState?: Uint8Array | undefined;
        verified?: boolean | undefined;
        success?: boolean | undefined;
        nextTxHash?: Uint8Array | undefined;
    } & {
        payloadHash?: Uint8Array | undefined;
        identity?: string | undefined;
        contractName?: string | undefined;
        initialState?: Uint8Array | undefined;
        nextState?: Uint8Array | undefined;
        verified?: boolean | undefined;
        success?: boolean | undefined;
        nextTxHash?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof PayloadMetadata>]: never; }>(base?: I): PayloadMetadata;
    fromPartial<I_1 extends {
        payloadHash?: Uint8Array | undefined;
        identity?: string | undefined;
        contractName?: string | undefined;
        initialState?: Uint8Array | undefined;
        nextState?: Uint8Array | undefined;
        verified?: boolean | undefined;
        success?: boolean | undefined;
        nextTxHash?: Uint8Array | undefined;
    } & {
        payloadHash?: Uint8Array | undefined;
        identity?: string | undefined;
        contractName?: string | undefined;
        initialState?: Uint8Array | undefined;
        nextState?: Uint8Array | undefined;
        verified?: boolean | undefined;
        success?: boolean | undefined;
        nextTxHash?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof PayloadMetadata>]: never; }>(object: I_1): PayloadMetadata;
};
export declare const TxTimeout: {
    encode(message: TxTimeout, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxTimeout;
    fromJSON(object: any): TxTimeout;
    toJSON(message: TxTimeout): unknown;
    create<I extends {
        txs?: Uint8Array[] | undefined;
    } & {
        txs?: (Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["txs"], keyof Uint8Array[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "txs">]: never; }>(base?: I): TxTimeout;
    fromPartial<I_1 extends {
        txs?: Uint8Array[] | undefined;
    } & {
        txs?: (Uint8Array[] & Uint8Array[] & { [K_2 in Exclude<keyof I_1["txs"], keyof Uint8Array[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "txs">]: never; }>(object: I_1): TxTimeout;
};
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
//# sourceMappingURL=types.d.ts.map