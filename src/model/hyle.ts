import { BorshSchema } from "borsher";

export type ContractName = string;
export type Identity = string;

export interface Blob {
    contract_name: ContractName;
    data: number[];
}
export interface BlobTransaction {
    identity: Identity;
    blobs: Blob[];
}

export interface TxEvent {
    block_hash: string;
    block_height: number;
    events: { metadata: object; name: string }[];
}

//pub struct StructuredBlobData<Parameters> {
//    pub caller: Option<BlobIndex>,
//    pub callees: Option<Vec<BlobIndex>>,
//    pub parameters: Parameters,
//}

export type BlobIndex = {
    0: number;
};

export const blobIndexSchema = BorshSchema.Struct({
    0: BorshSchema.u64,
});

export type StructuredBlobData<Parameters> = {
    caller: BlobIndex | null;
    callees: BlobIndex[] | null;
    parameters: Parameters;
};

export const structuredBlobDataSchema = (schema: BorshSchema) =>
    BorshSchema.Struct({
        caller: BorshSchema.Option(blobIndexSchema),
        callees: BorshSchema.Option(BorshSchema.Vec(blobIndexSchema)),
        parameters: schema,
    });
