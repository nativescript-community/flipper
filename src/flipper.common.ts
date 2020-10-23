import { ConfigurationOptions } from './flipper';

export abstract class ClientBase {
    config: ConfigurationOptions;
    abstract start(conf: ConfigurationOptions): Promise<any>;
}
