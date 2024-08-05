export type BlockInfo = {
    hash: string;
    height: number;
    timestamp: Date;
    txs: string[];
};
export declare class BlockStore {
    network: string;
    blockData: Record<string, BlockInfo>;
    blocks: {
        header: {
            height: number;
        };
        num_txs: number;
    }[];
    constructor(network: string);
    loadBlockData(blockIdentifier: string): Promise<void>;
    loadBlocks(): Promise<void>;
}
//# sourceMappingURL=blocks.d.ts.map