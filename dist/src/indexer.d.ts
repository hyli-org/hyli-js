export declare class WebSocketConnection {
    protected ws: WebSocket;
    private url;
    private idCounter;
    protected messageHandlers: {
        [id: number]: (result: any) => void;
    };
    private reconnectAttempts;
    opened: Promise<void>;
    static connect(url: string): Promise<WebSocketConnection>;
    protected constructor(url: string);
    private connectWebSocket;
    private attemptReconnect;
    call(method: string, params: any, handler: (result: any) => void): Promise<void>;
    private onMessage;
}
export declare function subscribeToTxSearch(network: string, query: string, handler: (result: any) => void): Promise<void>;
//# sourceMappingURL=indexer.d.ts.map