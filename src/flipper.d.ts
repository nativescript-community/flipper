export abstract class BaseNative<T, U extends {}> {
    options?: U;
    native: T;
    constructor(options?: U, native?: T);
    initNativeView(native: T, options: U): void;
    getNative(): T;
    createNative();
}

export interface Plugin {
    install(client);
}

export interface ConfigurationOptions {
    plugins?:(string | Plugin)[]
}

export class Client {
    conf: ConfigurationOptions;
    start(conf: ConfigurationOptions): Promise<any>;
}
