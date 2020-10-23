import { ClientBase } from './flipper.common';
import {Application} from '@nativescript/core';
import { ConfigurationOptions } from './flipper';

export class Client extends ClientBase {
    _client: FlipperClient;
    runInit() {
        const client = this._client = FlipperClient.sharedClient();
        const layoutDescriptorMapper = SKDescriptorMapper.alloc().initWithDefaults()
        FlipperKitLayoutComponentKitSupport.setUpWithDescriptorMapper(layoutDescriptorMapper);
        
                const plugins = (this.config && this.config.plugins) || [];
                plugins.forEach(s => {
                    switch (s) {
                        case 'network':
                            client.addPlugin(FlipperKitNetworkPlugin.alloc().initWithNetworkAdapter(SKIOSNetworkAdapter.new()));
                            break;
                        case 'inspector':
                            client.addPlugin(FlipperKitLayoutPlugin.alloc().initWithRootNodeWithDescriptorMapper(Application.ios.nativeApp, layoutDescriptorMapper));
                            break;
                        // case 'database':
                        //     client.addPlugin(new com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin(context));
                        //     break;
                        // case 'image':
                        //     client.addPlugin(new com.facebook.flipper.plugins.fresco.FrescoFlipperPlugin());
                        //     break;
                        case 'prefs':
                            client.addPlugin(FKUserDefaultsPlugin.alloc().initWithSuiteName(null));
                            break;
                        // case 'crash':
                        //     client.addPlugin(com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin.getInstance());
                        //     break;
                    }
                });

                client.start();
                
    }

    triggerCrash(error: Error) {
        // com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin.getInstance().sendExceptionMessage(android.os.Thread.currentThread(), error);
    }
    start(conf: ConfigurationOptions): Promise<any> {
        // clog('Bugnsag', 'init', conf, !!this._client, knownFolders.currentApp().path, application.launchEvent);
        if (!this._client) {
            this.config = conf;
            return new Promise((resolve, reject) => {
                const onLaunched = () => {
                    try {
                        // clog('Bugnsag', 'onLaunched');
                        Application.off(Application.launchEvent, onLaunched);
                        this.runInit();
                        resolve(this._client);
                    } catch (ex) {
                        console.log('Error in Flipper.init: ' + ex);
                        reject(ex);
                    }
                };
                // clog('Bugnsag', 'will init', !!application.android.nativeApp, !!application.android.context, !!application.android.startActivity);

                if (Application.ios.nativeApp) {
                    onLaunched();
                } else {
                    // console.log('Bugnsag', 'will init on launchEvent');
                    Application.on(Application.launchEvent, onLaunched);
                }
            });
        }
        return Promise.resolve(this._client);
        // return !!this._client;
    }
}
