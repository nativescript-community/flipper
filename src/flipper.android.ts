import { ClientBase } from './flipper.common';
import {Application} from '@nativescript/core';
import { ConfigurationOptions } from './flipper';

export class Client extends ClientBase {
    _client: com.facebook.flipper.core.FlipperClient;
    runInit() {
        const context = Application.android.context as android.content.Context;
        if (context) {
            console.log('runInit', context, this.config, com.facebook.flipper.BuildConfig.DEBUG, com.facebook.flipper.android.utils.FlipperUtils.shouldEnableFlipper(context), this.config);
            if (
                // com.facebook.flipper.BuildConfig.DEBUG &&
                com.facebook.flipper.android.utils.FlipperUtils.shouldEnableFlipper(context)
            ) {
                com.facebook.soloader.SoLoader.init(context, false);
                const client = (this._client = com.facebook.flipper.android.AndroidFlipperClient.getInstance(context));

                const plugins = (this.config && this.config.plugins) || [];
                plugins.forEach(s => {
                    switch (s) {
                        case 'network':
                            client.addPlugin(new com.facebook.flipper.plugins.network.NetworkFlipperPlugin());
                            break;
                        case 'inspector':
                            client.addPlugin(new com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin(context, com.facebook.flipper.plugins.inspector.DescriptorMapping.withDefaults()));
                            break;
                        case 'database':
                            client.addPlugin(new com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin(context));
                            break;
                        case 'image':
                            client.addPlugin(new com.facebook.flipper.plugins.fresco.FrescoFlipperPlugin());
                            break;
                        case 'prefs':
                            client.addPlugin(new com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin(context, 'prefs.db'));
                            break;
                        case 'crash':
                            client.addPlugin(com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin.getInstance());
                            break;
                    }
                });

                client.start();
                console.log('crxeating flipper cllient', client);
            }
            // clog('Bugnsag', 'did init', this.libraryVersion, this.bugsnagAndroidVersion);
        }
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

                if (Application.android.nativeApp) {
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
