export declare function persistentRef<T>(key: string, initialValue: T): [T] extends [import("@vue/reactivity").Ref<any, any>] ? import("@vue/shared").IfAny<T, import("@vue/reactivity").Ref<T, T>, T> : import("@vue/reactivity").Ref<import("@vue/reactivity").UnwrapRef<T>, T | import("@vue/reactivity").UnwrapRef<T>>;
export declare const getNetworkApiUrl: (network: string) => string | undefined;
export declare const getNetworkWebsocketUrl: (network: string) => string | undefined;
//# sourceMappingURL=network.d.ts.map