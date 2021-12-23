import { ClientBase } from './flipper.common';
import {Application} from '@nativescript/core';
import { ConfigurationOptions } from './flipper';

export class Client extends ClientBase {
    _client: com.facebook.flipper.core.FlipperClient;
    runInit() {
        const context = Application.android.context as android.content.Context;
        if (context) {
            if (
                com.facebook.flipper.android.utils.FlipperUtils.shouldEnableFlipper(context)
            ) {
                com.facebook.soloader.SoLoader.init(context, false);
                const client = (this._client = com.facebook.flipper.android.AndroidFlipperClient.getInstance(context));

                const plugins = (this.config && this.config.plugins) || [];
                plugins.forEach(s => {
                    if (!(typeof s === 'string') && s.install) {
                        try {
                            s.install(client);
                            return;
                        } catch(err) {
                            console.error(err);
                        }
                    }
                    switch (s) {
                        case 'network':
                            const plugin = new com.facebook.flipper.plugins.network.NetworkFlipperPlugin();
                            client.addPlugin(plugin);
                            try {
                                const addNetworkInterceptor = require('@nativescript-community/https').addNetworkInterceptor;
                                addNetworkInterceptor(new com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor(plugin))
                            }catch(err) {
                                console.error('error installing network plugin', err);
                            }
                            break;
                        case 'layout':
                            client.addPlugin(new com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin(context, com.facebook.flipper.plugins.inspector.DescriptorMapping.withDefaults()));
                            break;
                        case 'database':
                            client.addPlugin(new com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin(context));
                            break;
                        case 'prefs':
                            client.addPlugin(new com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin(context, 'prefs.db'));
                            break;
                        case 'crash':
                            client.addPlugin(com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin.getInstance());
                            break;
                        case 'image':
                            const leakTracker = new com.facebook.imagepipeline.debug.FlipperCloseableReferenceLeakTracker();
                            try {
                                const initialize = require('@nativescript-community/ui-image').initialize;
                                initialize({leakTracker})
                            }catch(err) {
                                console.error('error installing image plugin', err);
                            }
                            client.addPlugin(new com.facebook.flipper.plugins.fresco.FrescoFlipperPlugin(
                                new com.facebook.imagepipeline.debug.FlipperImageTracker(), 
                                com.facebook.drawee.backends.pipeline.Fresco.getImagePipelineFactory().getPlatformBitmapFactory(), 
                                null, 
                                new com.facebook.common.memory.manager.NoOpDebugMemoryManager(),
                                new com.facebook.flipper.perflogger.NoOpFlipperPerfLogger(),
                                null,
                                leakTracker));
                            break;
                        case 'leakCanary':
                            try {
                                const config = leakcanary.LeakCanary.getConfig().newBuilder()
                                    .onHeapAnalyzedListener(new com.facebook.flipper.plugins.leakcanary2.FlipperLeakListener())
                                    .build();
                                leakcanary.LeakCanary.setConfig(config);
                            }catch(err) {
                                console.error('error installing leak plugin', err);
                            }
                            client.addPlugin(new com.facebook.flipper.plugins.leakcanary2.LeakCanary2FlipperPlugin());
                            break;
                        case 'navigation':
                            // client.addPlugin(com.facebook.flipper.plugins.navigation.NavigationFlipperPlugin.getInstance());
                            break;
                    }
                });

                client.start();
            }
        }
    }
    start(conf: ConfigurationOptions): Promise<any> {
        if (!this._client) {
            this.config = conf;
            return new Promise((resolve, reject) => {
                const onLaunched = () => {
                    try {
                        Application.off(Application.launchEvent, onLaunched);
                        this.runInit();
                        resolve(this._client);
                    } catch (ex) {
                        console.log('Error in Flipper.init: ' + ex);
                        reject(ex);
                    }
                };
                if (Application.android.nativeApp) {
                    onLaunched();
                } else {
                    Application.on(Application.launchEvent, onLaunched);
                }
            });
        }
        return Promise.resolve(this._client);
    }
}
