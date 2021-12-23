
declare module com {
	export module facebook {
		export module common {
			export module memory {
				export module manager {
					export class DebugMemoryManager extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.common.memory.manager.DebugMemoryManager>;
						/**
						 * Constructs a new instance of the com.facebook.common.memory.manager.DebugMemoryManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							trimMemory(param0: number): void;
						});
						public constructor();
						public static ON_APP_BACKGROUNDED: number;
						public static ON_CLOSE_TO_DALVIK_HEAP_LIMIT: number;
						public static ON_SYSTEM_LOW_MEMORY_WHILE_APP_IN_BACKGROUND: number;
						public static ON_SYSTEM_LOW_MEMORY_WHILE_APP_IN_FOREGROUND: number;
						public trimMemory(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export module manager {
					export class NoOpDebugMemoryManager extends java.lang.Object implements com.facebook.common.memory.manager.DebugMemoryManager {
						public static class: java.lang.Class<com.facebook.common.memory.manager.NoOpDebugMemoryManager>;
						public constructor();
						public trimMemory(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.flipper.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public static IS_ASAN_BUILD: boolean;
				public static IS_INTERNAL_BUILD: boolean;
				public static LOAD_FLIPPER_EXPLICIT: boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module android {
				export class AndroidFlipperClient extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.android.AndroidFlipperClient>;
					public static getInstance(param0: globalAndroid.content.Context): com.facebook.flipper.core.FlipperClient;
					public constructor();
					public static getInstanceIfInitialized(): com.facebook.flipper.core.FlipperClient;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module android {
				export class EventBase {
					public static class: java.lang.Class<com.facebook.flipper.android.EventBase>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module android {
				export class FlipperClientImpl extends java.lang.Object implements com.facebook.flipper.core.FlipperClient {
					public static class: java.lang.Class<com.facebook.flipper.android.FlipperClientImpl>;
					public static getInstance(): com.facebook.flipper.android.FlipperClientImpl;
					public getPlugin(param0: string): com.facebook.flipper.core.FlipperPlugin;
					public subscribeForUpdates(param0: com.facebook.flipper.core.FlipperStateUpdateListener): void;
					/** @deprecated */
					public getPlugin(param0: string): com.facebook.flipper.core.FlipperPlugin;
					public start(): void;
					public getState(): string;
					public addPluginNative(param0: com.facebook.flipper.core.FlipperPlugin): void;
					public removePluginNative(param0: com.facebook.flipper.core.FlipperPlugin): void;
					public unsubscribe(): void;
					public stop(): void;
					public getStateSummary(): com.facebook.flipper.core.StateSummary;
					public addPlugin(param0: com.facebook.flipper.core.FlipperPlugin): void;
					public removePlugin(param0: com.facebook.flipper.core.FlipperPlugin): void;
					public getPluginByClass(param0: java.lang.Class): com.facebook.flipper.core.FlipperPlugin;
					public static init(param0: com.facebook.flipper.android.EventBase, param1: com.facebook.flipper.android.EventBase, param2: number, param3: number, param4: number, param5: number, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module android {
				export class FlipperConnectionImpl extends java.lang.Object implements com.facebook.flipper.core.FlipperConnection {
					public static class: java.lang.Class<com.facebook.flipper.android.FlipperConnectionImpl>;
					public reportError(param0: java.lang.Throwable): void;
					public sendObject(param0: string, param1: com.facebook.flipper.core.FlipperObject): void;
					public sendArray(param0: string, param1: com.facebook.flipper.core.FlipperArray): void;
					public reportErrorWithMetadata(param0: string, param1: string): void;
					public send(param0: string, param1: com.facebook.flipper.core.FlipperObject): void;
					public receive(param0: string, param1: com.facebook.flipper.core.FlipperReceiver): void;
					public send(param0: string, param1: com.facebook.flipper.core.FlipperArray): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module android {
				export class FlipperProps extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.android.FlipperProps>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module android {
				export class FlipperResponderImpl extends java.lang.Object implements com.facebook.flipper.core.FlipperResponder {
					public static class: java.lang.Class<com.facebook.flipper.android.FlipperResponderImpl>;
					public error(param0: com.facebook.flipper.core.FlipperObject): void;
					public success(param0: com.facebook.flipper.core.FlipperObject): void;
					public successArray(param0: com.facebook.flipper.core.FlipperArray): void;
					public success(): void;
					public success(param0: com.facebook.flipper.core.FlipperArray): void;
					public successObject(param0: com.facebook.flipper.core.FlipperObject): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module android {
				export class FlipperSocketEventHandlerImpl extends java.lang.Object implements com.facebook.flipper.core.FlipperSocketEventHandler {
					public static class: java.lang.Class<com.facebook.flipper.android.FlipperSocketEventHandlerImpl>;
					public onConnectionEvent(param0: com.facebook.flipper.core.FlipperSocketEventHandler.SocketEvent): void;
					public onMessageReceived(param0: string): void;
					public onAuthenticationChallengeReceived(): com.facebook.flipper.core.FlipperObject;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module android {
				export class FlipperSocketImpl implements com.facebook.flipper.core.FlipperSocket {
					public static class: java.lang.Class<com.facebook.flipper.android.FlipperSocketImpl>;
					public onOpen(param0: org.java_websocket.handshake.ServerHandshake): void;
					public flipperDisconnect(): void;
					public onMessage(param0: string): void;
					public flipperSetEventHandler(param0: com.facebook.flipper.core.FlipperSocketEventHandler): void;
					public onSetSSLParameters(param0: javax.net.ssl.SSLParameters): void;
					public flipperSend(param0: string): void;
					public flipperConnect(): void;
					public onClose(param0: number, param1: string, param2: boolean): void;
					public onError(param0: java.lang.Exception): void;
				}
				export module FlipperSocketImpl {
					export class FlipperTrustManager extends java.lang.Object implements javax.net.ssl.X509TrustManager {
						public static class: java.lang.Class<com.facebook.flipper.android.FlipperSocketImpl.FlipperTrustManager>;
						public checkServerTrustedImpl(param0: androidNative.Array<java.security.cert.X509Certificate>): void;
						public getAcceptedIssuers(): androidNative.Array<java.security.cert.X509Certificate>;
						public constructor(param0: com.facebook.flipper.android.FlipperSocketImpl, param1: string);
						public checkClientTrusted(param0: androidNative.Array<java.security.cert.X509Certificate>, param1: string): void;
						public checkServerTrusted(param0: androidNative.Array<java.security.cert.X509Certificate>, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module android {
				export class FlipperThread extends java.lang.Thread {
					public static class: java.lang.Class<com.facebook.flipper.android.FlipperThread>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module android {
				export module diagnostics {
					export class FlipperDiagnosticActivity {
						public static class: java.lang.Class<com.facebook.flipper.android.diagnostics.FlipperDiagnosticActivity>;
						public constructor();
						public onCreate(param0: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module android {
				export module diagnostics {
					export class FlipperDiagnosticFragment implements com.facebook.flipper.core.FlipperStateUpdateListener {
						public static class: java.lang.Class<com.facebook.flipper.android.diagnostics.FlipperDiagnosticFragment>;
						public constructor();
						public static newInstance(): com.facebook.flipper.android.diagnostics.FlipperDiagnosticFragment;
						public onResume(): void;
						public onUpdate(): void;
						public onAttach(param0: globalAndroid.content.Context): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onStop(): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module android {
				export module diagnostics {
					export class FlipperDiagnosticReportListener extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.android.diagnostics.FlipperDiagnosticReportListener>;
						/**
						 * Constructs a new instance of the com.facebook.flipper.android.diagnostics.FlipperDiagnosticReportListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							report(param0: string, param1: string): void;
						});
						public constructor();
						public report(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module android {
				export module diagnostics {
					export class FlipperDiagnosticSummaryTextFilter extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.android.diagnostics.FlipperDiagnosticSummaryTextFilter>;
						/**
						 * Constructs a new instance of the com.facebook.flipper.android.diagnostics.FlipperDiagnosticSummaryTextFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							applyDiagnosticSummaryTextFilter(param0: string): string;
						});
						public constructor();
						public applyDiagnosticSummaryTextFilter(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module android {
				export module utils {
					export class FlipperUtils extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.android.utils.FlipperUtils>;
						public static shouldEnableFlipper(param0: globalAndroid.content.Context): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export abstract class ErrorReportingRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<com.facebook.flipper.core.ErrorReportingRunnable>;
					public constructor(param0: com.facebook.flipper.core.FlipperConnection);
					public run(): void;
					public runOrThrow(): void;
					public doFinally(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export class FlipperArray extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.core.FlipperArray>;
					public getDynamic(param0: number): com.facebook.flipper.core.FlipperDynamic;
					public constructor(param0: string);
					public constructor(param0: org.json.JSONArray);
					public getDouble(param0: number): number;
					public toJsonString(): string;
					public getString(param0: number): string;
					public toStringList(): java.util.List<string>;
					public getFloat(param0: number): number;
					public length(): number;
					public getLong(param0: number): number;
					public equals(param0: any): boolean;
					public getArray(param0: number): com.facebook.flipper.core.FlipperArray;
					public getInt(param0: number): number;
					public toString(): string;
					public getObject(param0: number): com.facebook.flipper.core.FlipperObject;
					public getBoolean(param0: number): boolean;
					public get(param0: number): any;
					public hashCode(): number;
				}
				export module FlipperArray {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.core.FlipperArray.Builder>;
						public constructor();
						public put(param0: com.facebook.flipper.core.FlipperValue): com.facebook.flipper.core.FlipperArray.Builder;
						public put(param0: java.lang.Float): com.facebook.flipper.core.FlipperArray.Builder;
						public build(): com.facebook.flipper.core.FlipperArray;
						public put(param0: string): com.facebook.flipper.core.FlipperArray.Builder;
						public put(param0: com.facebook.flipper.core.FlipperObject.Builder): com.facebook.flipper.core.FlipperArray.Builder;
						public put(param0: java.lang.Boolean): com.facebook.flipper.core.FlipperArray.Builder;
						public put(param0: com.facebook.flipper.core.FlipperArray): com.facebook.flipper.core.FlipperArray.Builder;
						public put(param0: com.facebook.flipper.core.FlipperObject): com.facebook.flipper.core.FlipperArray.Builder;
						public put(param0: com.facebook.flipper.core.FlipperArray.Builder): com.facebook.flipper.core.FlipperArray.Builder;
						public put(param0: java.lang.Integer): com.facebook.flipper.core.FlipperArray.Builder;
						public put(param0: java.lang.Long): com.facebook.flipper.core.FlipperArray.Builder;
						public put(param0: java.lang.Double): com.facebook.flipper.core.FlipperArray.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export class FlipperClient extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.core.FlipperClient>;
					/**
					 * Constructs a new instance of the com.facebook.flipper.core.FlipperClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addPlugin(param0: com.facebook.flipper.core.FlipperPlugin): void;
						getPlugin(param0: string): com.facebook.flipper.core.FlipperPlugin;
						getPluginByClass(param0: java.lang.Class): com.facebook.flipper.core.FlipperPlugin;
						removePlugin(param0: com.facebook.flipper.core.FlipperPlugin): void;
						start(): void;
						stop(): void;
						subscribeForUpdates(param0: com.facebook.flipper.core.FlipperStateUpdateListener): void;
						unsubscribe(): void;
						getState(): string;
						getStateSummary(): com.facebook.flipper.core.StateSummary;
					});
					public constructor();
					public getPlugin(param0: string): com.facebook.flipper.core.FlipperPlugin;
					public stop(): void;
					public subscribeForUpdates(param0: com.facebook.flipper.core.FlipperStateUpdateListener): void;
					public getStateSummary(): com.facebook.flipper.core.StateSummary;
					public addPlugin(param0: com.facebook.flipper.core.FlipperPlugin): void;
					public start(): void;
					public getState(): string;
					public removePlugin(param0: com.facebook.flipper.core.FlipperPlugin): void;
					public getPluginByClass(param0: java.lang.Class): com.facebook.flipper.core.FlipperPlugin;
					public unsubscribe(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export class FlipperConnection extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.core.FlipperConnection>;
					/**
					 * Constructs a new instance of the com.facebook.flipper.core.FlipperConnection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						send(param0: string, param1: com.facebook.flipper.core.FlipperObject): void;
						send(param0: string, param1: com.facebook.flipper.core.FlipperArray): void;
						reportErrorWithMetadata(param0: string, param1: string): void;
						reportError(param0: java.lang.Throwable): void;
						receive(param0: string, param1: com.facebook.flipper.core.FlipperReceiver): void;
					});
					public constructor();
					public reportError(param0: java.lang.Throwable): void;
					public reportErrorWithMetadata(param0: string, param1: string): void;
					public send(param0: string, param1: com.facebook.flipper.core.FlipperObject): void;
					public receive(param0: string, param1: com.facebook.flipper.core.FlipperReceiver): void;
					public send(param0: string, param1: com.facebook.flipper.core.FlipperArray): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export class FlipperDynamic extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.core.FlipperDynamic>;
					public asInt(): number;
					public asLong(): number;
					public asObject(): com.facebook.flipper.core.FlipperObject;
					public asBoolean(): boolean;
					public raw(): any;
					public asFloat(): number;
					public constructor(param0: any);
					public asString(): string;
					public asArray(): com.facebook.flipper.core.FlipperArray;
					public asDouble(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export class FlipperObject extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.core.FlipperObject>;
					public get(param0: string): any;
					public getArray(param0: string): com.facebook.flipper.core.FlipperArray;
					public constructor(param0: string);
					public constructor(param0: org.json.JSONObject);
					public getObject(param0: string): com.facebook.flipper.core.FlipperObject;
					public getInt(param0: string): number;
					public toJsonString(): string;
					public getFloat(param0: string): number;
					public getString(param0: string): string;
					public equals(param0: any): boolean;
					public getBoolean(param0: string): boolean;
					public toString(): string;
					public getDouble(param0: string): number;
					public getDynamic(param0: string): com.facebook.flipper.core.FlipperDynamic;
					public contains(param0: string): boolean;
					public getLong(param0: string): number;
					public hashCode(): number;
					public keys(): java.util.Iterator<string>;
				}
				export module FlipperObject {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.core.FlipperObject.Builder>;
						public constructor();
						public put(param0: string, param1: string): com.facebook.flipper.core.FlipperObject.Builder;
						public put(param0: string, param1: java.lang.Long): com.facebook.flipper.core.FlipperObject.Builder;
						public put(param0: string, param1: java.lang.Double): com.facebook.flipper.core.FlipperObject.Builder;
						public put(param0: string, param1: com.facebook.flipper.core.FlipperValue): com.facebook.flipper.core.FlipperObject.Builder;
						public put(param0: string, param1: java.lang.Float): com.facebook.flipper.core.FlipperObject.Builder;
						public build(): com.facebook.flipper.core.FlipperObject;
						public put(param0: string, param1: any): com.facebook.flipper.core.FlipperObject.Builder;
						public put(param0: string, param1: com.facebook.flipper.core.FlipperArray.Builder): com.facebook.flipper.core.FlipperObject.Builder;
						public put(param0: string, param1: java.lang.Boolean): com.facebook.flipper.core.FlipperObject.Builder;
						public put(param0: string, param1: java.lang.Integer): com.facebook.flipper.core.FlipperObject.Builder;
						public put(param0: string, param1: com.facebook.flipper.core.FlipperObject.Builder): com.facebook.flipper.core.FlipperObject.Builder;
						public put(param0: string, param1: com.facebook.flipper.core.FlipperObject): com.facebook.flipper.core.FlipperObject.Builder;
						public put(param0: string, param1: com.facebook.flipper.core.FlipperArray): com.facebook.flipper.core.FlipperObject.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export class FlipperPlugin extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.core.FlipperPlugin>;
					/**
					 * Constructs a new instance of the com.facebook.flipper.core.FlipperPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getId(): string;
						onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
						onDisconnect(): void;
						runInBackground(): boolean;
					});
					public constructor();
					public getId(): string;
					public onDisconnect(): void;
					public runInBackground(): boolean;
					public onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export class FlipperReceiver extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.core.FlipperReceiver>;
					/**
					 * Constructs a new instance of the com.facebook.flipper.core.FlipperReceiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReceive(param0: com.facebook.flipper.core.FlipperObject, param1: com.facebook.flipper.core.FlipperResponder): void;
					});
					public constructor();
					public onReceive(param0: com.facebook.flipper.core.FlipperObject, param1: com.facebook.flipper.core.FlipperResponder): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export class FlipperResponder extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.core.FlipperResponder>;
					/**
					 * Constructs a new instance of the com.facebook.flipper.core.FlipperResponder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						success(param0: com.facebook.flipper.core.FlipperObject): void;
						success(param0: com.facebook.flipper.core.FlipperArray): void;
						success(): void;
						error(param0: com.facebook.flipper.core.FlipperObject): void;
					});
					public constructor();
					public error(param0: com.facebook.flipper.core.FlipperObject): void;
					public success(param0: com.facebook.flipper.core.FlipperObject): void;
					public success(): void;
					public success(param0: com.facebook.flipper.core.FlipperArray): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export class FlipperSocket extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.core.FlipperSocket>;
					/**
					 * Constructs a new instance of the com.facebook.flipper.core.FlipperSocket interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						flipperConnect(): void;
						flipperDisconnect(): void;
						flipperSend(param0: string): void;
						flipperSetEventHandler(param0: com.facebook.flipper.core.FlipperSocketEventHandler): void;
					});
					public constructor();
					public flipperDisconnect(): void;
					public flipperSend(param0: string): void;
					public flipperSetEventHandler(param0: com.facebook.flipper.core.FlipperSocketEventHandler): void;
					public flipperConnect(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export class FlipperSocketEventHandler extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.core.FlipperSocketEventHandler>;
					/**
					 * Constructs a new instance of the com.facebook.flipper.core.FlipperSocketEventHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onConnectionEvent(param0: com.facebook.flipper.core.FlipperSocketEventHandler.SocketEvent): void;
						onMessageReceived(param0: string): void;
						onAuthenticationChallengeReceived(): com.facebook.flipper.core.FlipperObject;
					});
					public constructor();
					public onConnectionEvent(param0: com.facebook.flipper.core.FlipperSocketEventHandler.SocketEvent): void;
					public onMessageReceived(param0: string): void;
					public onAuthenticationChallengeReceived(): com.facebook.flipper.core.FlipperObject;
				}
				export module FlipperSocketEventHandler {
					export class SocketEvent {
						public static class: java.lang.Class<com.facebook.flipper.core.FlipperSocketEventHandler.SocketEvent>;
						public static OPEN: com.facebook.flipper.core.FlipperSocketEventHandler.SocketEvent;
						public static CLOSE: com.facebook.flipper.core.FlipperSocketEventHandler.SocketEvent;
						public static ERROR: com.facebook.flipper.core.FlipperSocketEventHandler.SocketEvent;
						public static SSL_ERROR: com.facebook.flipper.core.FlipperSocketEventHandler.SocketEvent;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): com.facebook.flipper.core.FlipperSocketEventHandler.SocketEvent;
						public getCode(): number;
						public static values(): androidNative.Array<com.facebook.flipper.core.FlipperSocketEventHandler.SocketEvent>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export class FlipperStateUpdateListener extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.core.FlipperStateUpdateListener>;
					/**
					 * Constructs a new instance of the com.facebook.flipper.core.FlipperStateUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUpdate(): void;
					});
					public constructor();
					public onUpdate(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export class FlipperValue extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.core.FlipperValue>;
					/**
					 * Constructs a new instance of the com.facebook.flipper.core.FlipperValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						toFlipperObject(): com.facebook.flipper.core.FlipperObject;
					});
					public constructor();
					public toFlipperObject(): com.facebook.flipper.core.FlipperObject;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export class StateElement extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.core.StateElement>;
					public constructor(param0: string, param1: string);
					public getName(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module core {
				export class StateSummary extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.core.StateSummary>;
					public mList: java.util.List<com.facebook.flipper.core.StateSummary.StateElement>;
					public constructor();
					public addEntry(param0: string, param1: string): void;
				}
				export module StateSummary {
					export class State {
						public static class: java.lang.Class<com.facebook.flipper.core.StateSummary.State>;
						public static IN_PROGRESS: com.facebook.flipper.core.StateSummary.State;
						public static SUCCESS: com.facebook.flipper.core.StateSummary.State;
						public static FAILED: com.facebook.flipper.core.StateSummary.State;
						public static UNKNOWN: com.facebook.flipper.core.StateSummary.State;
						public static values(): androidNative.Array<com.facebook.flipper.core.StateSummary.State>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): com.facebook.flipper.core.StateSummary.State;
					}
					export class StateElement extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.core.StateSummary.StateElement>;
						public getState(): com.facebook.flipper.core.StateSummary.State;
						public constructor(param0: string, param1: com.facebook.flipper.core.StateSummary.State);
						public getName(): string;
					}
				}
			}
		}
	}
}


declare module com {
	export module facebook {
		export module flipper {
			export module perflogger {
				export class FlipperPerfLogger extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.flipper.perflogger.FlipperPerfLogger>;
					/**
					 * Constructs a new instance of the com.facebook.flipper.perflogger.FlipperPerfLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						startMarker(param0: string): void;
						endMarker(param0: string): void;
						cancelMarker(param0: string): void;
					});
					public constructor();
					public endMarker(param0: string): void;
					public cancelMarker(param0: string): void;
					public startMarker(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module perflogger {
				export class NoOpFlipperPerfLogger extends java.lang.Object implements com.facebook.flipper.perflogger.FlipperPerfLogger {
					public static class: java.lang.Class<com.facebook.flipper.perflogger.NoOpFlipperPerfLogger>;
					public constructor();
					public endMarker(param0: string): void;
					public cancelMarker(param0: string): void;
					public startMarker(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module common {
					export abstract class BufferingFlipperPlugin extends java.lang.Object implements com.facebook.flipper.core.FlipperPlugin {
						public static class: java.lang.Class<com.facebook.flipper.plugins.common.BufferingFlipperPlugin>;
						public onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
						public constructor();
						public removeConnectionListener(): void;
						public send(param0: string, param1: com.facebook.flipper.core.FlipperObject): void;
						public setConnectionListener(param0: com.facebook.flipper.plugins.common.BufferingFlipperPlugin.MockResponseConnectionListener): void;
						public isConnected(): boolean;
						public getId(): string;
						public runInBackground(): boolean;
						public getConnection(): com.facebook.flipper.core.FlipperConnection;
						public onDisconnect(): void;
					}
					export module BufferingFlipperPlugin {
						export class CachedFlipperEvent extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.common.BufferingFlipperPlugin.CachedFlipperEvent>;
						}
						export class MockResponseConnectionListener extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.common.BufferingFlipperPlugin.MockResponseConnectionListener>;
							/**
							 * Constructs a new instance of the com.facebook.flipper.plugins.common.BufferingFlipperPlugin$MockResponseConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
								onDisconnect(): void;
							});
							public constructor();
							public onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
							public onDisconnect(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module common {
					export abstract class MainThreadFlipperReceiver extends java.lang.Object implements com.facebook.flipper.core.FlipperReceiver {
						public static class: java.lang.Class<com.facebook.flipper.plugins.common.MainThreadFlipperReceiver>;
						public constructor();
						public onReceiveOnMainThread(param0: com.facebook.flipper.core.FlipperObject, param1: com.facebook.flipper.core.FlipperResponder): void;
						public onReceive(param0: com.facebook.flipper.core.FlipperObject, param1: com.facebook.flipper.core.FlipperResponder): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module common {
					export class RingBuffer<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.common.RingBuffer<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module crashreporter {
					export class CrashReporterPlugin extends java.lang.Object implements com.facebook.flipper.core.FlipperPlugin {
						public static class: java.lang.Class<com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin>;
						public static ID: string;
						public onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
						public static getInstance(): com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin;
						public setActivity(param0: globalAndroid.app.Activity): void;
						public getId(): string;
						public runInBackground(): boolean;
						public sendExceptionMessage(param0: java.lang.Thread, param1: java.lang.Throwable): void;
						public onDisconnect(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module databases {
					export class DatabaseDescriptor extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabaseDescriptor>;
						/**
						 * Constructs a new instance of the com.facebook.flipper.plugins.databases.DatabaseDescriptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							name(): string;
						});
						public constructor();
						public name(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module databases {
					export abstract class DatabaseDriver<DESCRIPTOR>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabaseDriver<any>>;
						public getDatabases(): java.util.List<DESCRIPTOR>;
						public executeSQL(param0: DESCRIPTOR, param1: string): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseExecuteSqlResponse;
						public getTableData(param0: DESCRIPTOR, param1: string, param2: string, param3: boolean, param4: number, param5: number): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableDataResponse;
						public constructor(param0: globalAndroid.content.Context);
						public getContext(): globalAndroid.content.Context;
						public getTableNames(param0: DESCRIPTOR): java.util.List<string>;
						public getTableStructure(param0: DESCRIPTOR, param1: string): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableStructureResponse;
						public getTableInfo(param0: DESCRIPTOR, param1: string): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableInfoResponse;
					}
					export module DatabaseDriver {
						export class DatabaseExecuteSqlResponse extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseExecuteSqlResponse>;
							public static TYPE_SELECT: string;
							public static TYPE_INSERT: string;
							public static TYPE_UPDATE_DELETE: string;
							public static TYPE_RAW: string;
							public type: string;
							public columns: java.util.List<string>;
							public values: java.util.List<java.util.List<any>>;
							public insertedId: java.lang.Long;
							public affectedCount: java.lang.Integer;
							public static successfulUpdateDelete(param0: number): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseExecuteSqlResponse;
							public static successfulRawQuery(): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseExecuteSqlResponse;
							public static successfulInsert(param0: number): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseExecuteSqlResponse;
							public static successfulSelect(param0: java.util.List<string>, param1: java.util.List<java.util.List<any>>): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseExecuteSqlResponse;
						}
						export module DatabaseExecuteSqlResponse {
							export class Type extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseExecuteSqlResponse.Type>;
								/**
								 * Constructs a new instance of the com.facebook.flipper.plugins.databases.DatabaseDriver$DatabaseExecuteSqlResponse$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(param0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(param0: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
							}
						}
						export class DatabaseGetTableDataResponse extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableDataResponse>;
							public columns: java.util.List<string>;
							public values: java.util.List<java.util.List<any>>;
							public start: java.lang.Integer;
							public count: java.lang.Integer;
							public total: java.lang.Long;
							public constructor(param0: java.util.List<string>, param1: java.util.List<java.util.List<any>>, param2: number, param3: number, param4: number);
						}
						export class DatabaseGetTableInfoResponse extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableInfoResponse>;
							public definition: string;
							public constructor(param0: string);
						}
						export class DatabaseGetTableStructureResponse extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableStructureResponse>;
							public structureColumns: java.util.List<string>;
							public structureValues: java.util.List<java.util.List<any>>;
							public indexesColumns: java.util.List<string>;
							public indexesValues: java.util.List<java.util.List<any>>;
							public constructor(param0: java.util.List<string>, param1: java.util.List<java.util.List<any>>, param2: java.util.List<string>, param3: java.util.List<java.util.List<any>>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module databases {
					export class DatabasesErrorCodes extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabasesErrorCodes>;
						public static ERROR_INVALID_REQUEST: number;
						public static ERROR_INVALID_REQUEST_MESSAGE: string;
						public static ERROR_DATABASE_INVALID: number;
						public static ERROR_DATABASE_INVALID_MESSAGE: string;
						public static ERROR_SQL_EXECUTION_EXCEPTION: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module databases {
					export class DatabasesFlipperPlugin extends java.lang.Object implements com.facebook.flipper.core.FlipperPlugin {
						public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin>;
						public constructor(param0: java.util.List<com.facebook.flipper.plugins.databases.DatabaseDriver<any>>);
						public onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: com.facebook.flipper.plugins.databases.DatabaseDriver<any>);
						public getId(): string;
						public runInBackground(): boolean;
						public onDisconnect(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module databases {
					export class DatabasesManager extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabasesManager>;
						public constructor(param0: java.util.List<com.facebook.flipper.plugins.databases.DatabaseDriver<any>>);
						public isConnected(): boolean;
						public setConnection(param0: com.facebook.flipper.core.FlipperConnection): void;
					}
					export module DatabasesManager {
						export class DatabaseDescriptorHolder extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabasesManager.DatabaseDescriptorHolder>;
							public id: number;
							public databaseDriver: com.facebook.flipper.plugins.databases.DatabaseDriver<any>;
							public databaseDescriptor: com.facebook.flipper.plugins.databases.DatabaseDescriptor;
							public constructor(param0: number, param1: com.facebook.flipper.plugins.databases.DatabaseDriver<any>, param2: com.facebook.flipper.plugins.databases.DatabaseDescriptor);
						}
						export class ExecuteSqlRequest extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabasesManager.ExecuteSqlRequest>;
							public databaseId: number;
							public value: string;
						}
						export class GetTableDataRequest extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabasesManager.GetTableDataRequest>;
							public databaseId: number;
							public table: string;
							public order: string;
							public reverse: boolean;
							public start: number;
							public count: number;
						}
						export class GetTableInfoRequest extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabasesManager.GetTableInfoRequest>;
							public databaseId: number;
							public table: string;
						}
						export class GetTableStructureRequest extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.DatabasesManager.GetTableStructureRequest>;
							public databaseId: number;
							public table: string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module databases {
					export class ObjectMapper extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.databases.ObjectMapper>;
						public static flipperObjectToGetTableInfoRequest(param0: com.facebook.flipper.core.FlipperObject): com.facebook.flipper.plugins.databases.DatabasesManager.GetTableInfoRequest;
						public constructor();
						public static databaseListToFlipperArray(param0: java.util.Collection<com.facebook.flipper.plugins.databases.DatabasesManager.DatabaseDescriptorHolder>): com.facebook.flipper.core.FlipperArray;
						public static flipperObjectToGetTableDataRequest(param0: com.facebook.flipper.core.FlipperObject): com.facebook.flipper.plugins.databases.DatabasesManager.GetTableDataRequest;
						public static databaseGetTableDataReponseToFlipperObject(param0: com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableDataResponse): com.facebook.flipper.core.FlipperObject;
						public static toErrorFlipperObject(param0: number, param1: string): com.facebook.flipper.core.FlipperObject;
						public static flipperObjectToExecuteSqlRequest(param0: com.facebook.flipper.core.FlipperObject): com.facebook.flipper.plugins.databases.DatabasesManager.ExecuteSqlRequest;
						public static databaseExecuteSqlResponseToFlipperObject(param0: com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseExecuteSqlResponse): com.facebook.flipper.core.FlipperObject;
						public static flipperObjectToGetTableStructureRequest(param0: com.facebook.flipper.core.FlipperObject): com.facebook.flipper.plugins.databases.DatabasesManager.GetTableStructureRequest;
						public static databaseGetTableStructureResponseToFlipperObject(param0: com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableStructureResponse): com.facebook.flipper.core.FlipperObject;
						public static databaseGetTableInfoResponseToFlipperObject(param0: com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableInfoResponse): com.facebook.flipper.core.FlipperObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module databases {
					export module impl {
						export class DefaultSqliteDatabaseConnectionProvider extends java.lang.Object implements com.facebook.flipper.plugins.databases.impl.SqliteDatabaseConnectionProvider {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.impl.DefaultSqliteDatabaseConnectionProvider>;
							public constructor();
							public openDatabase(param0: java.io.File): androidx.sqlite.db.SupportSQLiteDatabase;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module databases {
					export module impl {
						export class DefaultSqliteDatabaseProvider extends java.lang.Object implements com.facebook.flipper.plugins.databases.impl.SqliteDatabaseProvider {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.impl.DefaultSqliteDatabaseProvider>;
							public constructor(param0: globalAndroid.content.Context, param1: number);
							public getDatabaseFiles(): java.util.List<java.io.File>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module databases {
					export module impl {
						export class FrameworkSQLiteDatabaseWrapping extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.impl.FrameworkSQLiteDatabaseWrapping>;
							public constructor();
							public static wrap(param0: globalAndroid.database.sqlite.SQLiteDatabase): androidx.sqlite.db.SupportSQLiteDatabase;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module databases {
					export module impl {
						export class SqliteDatabaseConnectionProvider extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.impl.SqliteDatabaseConnectionProvider>;
							/**
							 * Constructs a new instance of the com.facebook.flipper.plugins.databases.impl.SqliteDatabaseConnectionProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								openDatabase(param0: java.io.File): androidx.sqlite.db.SupportSQLiteDatabase;
							});
							public constructor();
							public openDatabase(param0: java.io.File): androidx.sqlite.db.SupportSQLiteDatabase;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module databases {
					export module impl {
						export class SqliteDatabaseDriver extends com.facebook.flipper.plugins.databases.DatabaseDriver<com.facebook.flipper.plugins.databases.impl.SqliteDatabaseDriver.SqliteDatabaseDescriptor> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.impl.SqliteDatabaseDriver>;
							public getTableNames(param0: any): java.util.List<string>;
							public constructor(param0: globalAndroid.content.Context, param1: com.facebook.flipper.plugins.databases.impl.SqliteDatabaseProvider, param2: com.facebook.flipper.plugins.databases.impl.SqliteDatabaseConnectionProvider);
							public constructor(param0: globalAndroid.content.Context, param1: com.facebook.flipper.plugins.databases.impl.SqliteDatabaseProvider);
							public executeSQL(param0: com.facebook.flipper.plugins.databases.impl.SqliteDatabaseDriver.SqliteDatabaseDescriptor, param1: string): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseExecuteSqlResponse;
							public getTableData(param0: com.facebook.flipper.plugins.databases.impl.SqliteDatabaseDriver.SqliteDatabaseDescriptor, param1: string, param2: string, param3: boolean, param4: number, param5: number): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableDataResponse;
							public getDatabases(): java.util.List<com.facebook.flipper.plugins.databases.impl.SqliteDatabaseDriver.SqliteDatabaseDescriptor>;
							public getTableData(param0: any, param1: string, param2: string, param3: boolean, param4: number, param5: number): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableDataResponse;
							public getTableInfo(param0: com.facebook.flipper.plugins.databases.impl.SqliteDatabaseDriver.SqliteDatabaseDescriptor, param1: string): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableInfoResponse;
							public getTableNames(param0: com.facebook.flipper.plugins.databases.impl.SqliteDatabaseDriver.SqliteDatabaseDescriptor): java.util.List<string>;
							public getTableStructure(param0: com.facebook.flipper.plugins.databases.impl.SqliteDatabaseDriver.SqliteDatabaseDescriptor, param1: string): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableStructureResponse;
							public getDatabases(): java.util.List<any>;
							public executeSQL(param0: any, param1: string): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseExecuteSqlResponse;
							public getTableStructure(param0: any, param1: string): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableStructureResponse;
							public getTableInfo(param0: any, param1: string): com.facebook.flipper.plugins.databases.DatabaseDriver.DatabaseGetTableInfoResponse;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module SqliteDatabaseDriver {
							export class SqliteDatabaseDescriptor extends java.lang.Object implements com.facebook.flipper.plugins.databases.DatabaseDescriptor {
								public static class: java.lang.Class<com.facebook.flipper.plugins.databases.impl.SqliteDatabaseDriver.SqliteDatabaseDescriptor>;
								public file: java.io.File;
								public name(): string;
								public constructor(param0: java.io.File);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module databases {
					export module impl {
						export class SqliteDatabaseProvider extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.databases.impl.SqliteDatabaseProvider>;
							/**
							 * Constructs a new instance of the com.facebook.flipper.plugins.databases.impl.SqliteDatabaseProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getDatabaseFiles(): java.util.List<java.io.File>;
							});
							public constructor();
							public getDatabaseFiles(): java.util.List<java.io.File>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export class ApplicationWrapper extends java.lang.Object implements globalAndroid.app.Application.ActivityLifecycleCallbacks {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.ApplicationWrapper>;
						public onActivityPreStopped(param0: globalAndroid.app.Activity): void;
						public onActivityPreCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityPostCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityPreResumed(param0: globalAndroid.app.Activity): void;
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityPostSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityPreDestroyed(param0: globalAndroid.app.Activity): void;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public getViewRoots(): java.util.List<globalAndroid.view.View>;
						public onActivityPreSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityPostDestroyed(param0: globalAndroid.app.Activity): void;
						public onActivityPostResumed(param0: globalAndroid.app.Activity): void;
						public constructor(param0: globalAndroid.app.Application);
						public onActivityPrePaused(param0: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public postDelayed(param0: java.lang.Runnable, param1: number): void;
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public getActivityStack(): java.util.List<globalAndroid.app.Activity>;
						public setActivityDestroyedListener(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper.ActivityDestroyedListener): void;
						public setListener(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper.ActivityStackChangedListener): void;
						public onActivityPostPaused(param0: globalAndroid.app.Activity): void;
						public onActivityPostStarted(param0: globalAndroid.app.Activity): void;
						public getApplication(): globalAndroid.app.Application;
						public onActivityPreStarted(param0: globalAndroid.app.Activity): void;
						public onActivityPostStopped(param0: globalAndroid.app.Activity): void;
					}
					export module ApplicationWrapper {
						export class ActivityDestroyedListener extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.ApplicationWrapper.ActivityDestroyedListener>;
							/**
							 * Constructs a new instance of the com.facebook.flipper.plugins.inspector.ApplicationWrapper$ActivityDestroyedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onActivityDestroyed(param0: globalAndroid.app.Activity): void;
							});
							public constructor();
							public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						}
						export class ActivityStackChangedListener extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.ApplicationWrapper.ActivityStackChangedListener>;
							/**
							 * Constructs a new instance of the com.facebook.flipper.plugins.inspector.ApplicationWrapper$ActivityStackChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onActivityStackChanged(param0: java.util.List<globalAndroid.app.Activity>): void;
							});
							public constructor();
							public onActivityStackChanged(param0: java.util.List<globalAndroid.app.Activity>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export class BoundsDrawable extends globalAndroid.graphics.drawable.Drawable {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.BoundsDrawable>;
						public static COLOR_HIGHLIGHT_CONTENT: number;
						public static COLOR_HIGHLIGHT_PADDING: number;
						public static COLOR_HIGHLIGHT_MARGIN: number;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						/** @deprecated */
						public getOpacity(): number;
						public static getInstance(param0: globalAndroid.view.View, param1: number): com.facebook.flipper.plugins.inspector.BoundsDrawable;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setBounds(param0: globalAndroid.graphics.Rect, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Rect): void;
						public setBounds(param0: globalAndroid.graphics.Rect): void;
						public setBounds(param0: number, param1: number, param2: number, param3: number): void;
						public getOpacity(): number;
						public static getInstance(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.Rect, param4: globalAndroid.graphics.Rect): com.facebook.flipper.plugins.inspector.BoundsDrawable;
						/** @deprecated */
						public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
						public setAlpha(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export class DescriptorMapping extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.DescriptorMapping>;
						public onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
						public constructor();
						public register(param0: java.lang.Class, param1: com.facebook.flipper.plugins.inspector.NodeDescriptor<any>): void;
						public static withDefaults(): com.facebook.flipper.plugins.inspector.DescriptorMapping;
						public descriptorForClass(param0: java.lang.Class<any>): com.facebook.flipper.plugins.inspector.NodeDescriptor<any>;
						public onDisconnect(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export class HiddenNode extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.HiddenNode>;
						/**
						 * Constructs a new instance of the com.facebook.flipper.plugins.inspector.HiddenNode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export class HighlightedOverlay extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.HighlightedOverlay>;
						public static setHighlighted(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.Rect, param4: boolean): void;
						public constructor();
						public static removeHighlight(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export class InspectorFlipperPlugin extends java.lang.Object implements com.facebook.flipper.core.FlipperPlugin {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin>;
						public constructor(param0: globalAndroid.content.Context, param1: com.facebook.flipper.plugins.inspector.DescriptorMapping);
						public onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
						public getResolvedPath(param0: string): string;
						public resolvePath(param0: string, param1: string, param2: string): void;
						public openInIDE(param0: string, param1: string, param2: number, param3: com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin.IDE): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.facebook.flipper.plugins.inspector.DescriptorMapping, param2: java.util.List<com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin.ExtensionCommand>);
						public searchTree(param0: string, param1: any, param2: boolean): com.facebook.flipper.plugins.inspector.SearchResultNode;
						public isConnectionEstablished(): boolean;
						public getId(): string;
						public runInBackground(): boolean;
						public onDisconnect(): void;
					}
					export module InspectorFlipperPlugin {
						export class ExtensionCommand extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin.ExtensionCommand>;
							/**
							 * Constructs a new instance of the com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin$ExtensionCommand interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								command(): string;
								receiver(param0: com.facebook.flipper.plugins.inspector.ObjectTracker, param1: com.facebook.flipper.core.FlipperConnection): com.facebook.flipper.core.FlipperReceiver;
							});
							public constructor();
							public command(): string;
							public receiver(param0: com.facebook.flipper.plugins.inspector.ObjectTracker, param1: com.facebook.flipper.core.FlipperConnection): com.facebook.flipper.core.FlipperReceiver;
						}
						export class IDE {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin.IDE>;
							public static DIFFUSION: com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin.IDE;
							public static AS: com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin.IDE;
							public static VSCODE: com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin.IDE;
							public static fromString(param0: string): com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin.IDE;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin.IDE;
							public getFullIdeName(): string;
							public static values(): androidNative.Array<com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin.IDE>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export class InspectorValue<T>  extends com.facebook.flipper.core.FlipperValue {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.InspectorValue<any>>;
						public toFlipperObject(): com.facebook.flipper.core.FlipperObject;
						public static immutable(param0: com.facebook.flipper.plugins.inspector.InspectorValue.Type<any>, param1: any): com.facebook.flipper.plugins.inspector.InspectorValue<any>;
						public static immutable(param0: any): com.facebook.flipper.plugins.inspector.InspectorValue<any>;
						public static mutable(param0: com.facebook.flipper.plugins.inspector.InspectorValue.Type<any>, param1: any): com.facebook.flipper.plugins.inspector.InspectorValue<any>;
						public static mutable(param0: any): com.facebook.flipper.plugins.inspector.InspectorValue<any>;
					}
					export module InspectorValue {
						export class Picker extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.InspectorValue.Picker>;
							public values: java.util.Set<string>;
							public selected: string;
							public constructor(param0: java.util.Set<string>, param1: string);
							public toString(): string;
						}
						export class Timeline extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.InspectorValue.Timeline>;
							public time: java.util.List<com.facebook.flipper.plugins.inspector.InspectorValue.Timeline.TimePoint>;
							public current: string;
							public constructor(param0: java.util.List<com.facebook.flipper.plugins.inspector.InspectorValue.Timeline.TimePoint>, param1: string);
							public toString(): string;
						}
						export module Timeline {
							export class TimePoint extends java.lang.Object {
								public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.InspectorValue.Timeline.TimePoint>;
								public moment: number;
								public display: string;
								public color: string;
								public key: string;
								public properties: java.util.Map<string,string>;
								public toString(): string;
								public constructor(param0: string, param1: number, param2: string, param3: string, param4: java.util.Map<string,string>);
							}
						}
						export class Type<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.InspectorValue.Type<any>>;
							public static Auto: com.facebook.flipper.plugins.inspector.InspectorValue.Type<any>;
							public static Text: com.facebook.flipper.plugins.inspector.InspectorValue.Type<string>;
							public static Number: com.facebook.flipper.plugins.inspector.InspectorValue.Type<java.lang.Number>;
							public static Boolean: com.facebook.flipper.plugins.inspector.InspectorValue.Type<java.lang.Boolean>;
							public static Enum: com.facebook.flipper.plugins.inspector.InspectorValue.Type<string>;
							public static Color: com.facebook.flipper.plugins.inspector.InspectorValue.Type<java.lang.Integer>;
							public static Picker: com.facebook.flipper.plugins.inspector.InspectorValue.Type<com.facebook.flipper.plugins.inspector.InspectorValue.Picker>;
							public static Timeline: com.facebook.flipper.plugins.inspector.InspectorValue.Type<com.facebook.flipper.plugins.inspector.InspectorValue.Timeline>;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export class LinesDrawable extends globalAndroid.graphics.drawable.Drawable {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.LinesDrawable>;
						public static getInstance(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.Rect, param4: globalAndroid.graphics.Rect): com.facebook.flipper.plugins.inspector.LinesDrawable;
						public static getInstance(param0: globalAndroid.view.View, param1: number): com.facebook.flipper.plugins.inspector.LinesDrawable;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						/** @deprecated */
						public getOpacity(): number;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setBounds(param0: globalAndroid.graphics.Rect, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Rect): void;
						public setBounds(param0: globalAndroid.graphics.Rect): void;
						public setBounds(param0: number, param1: number, param2: number, param3: number): void;
						public getOpacity(): number;
						/** @deprecated */
						public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
						public setAlpha(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export class Named<ValueType>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.Named<any>>;
						public getValue(): ValueType;
						public constructor(param0: string, param1: ValueType);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export abstract class NodeDescriptor<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.NodeDescriptor<any>>;
						public mConnection: com.facebook.flipper.core.FlipperConnection;
						public getExtraInfo(param0: T): com.facebook.flipper.core.FlipperObject;
						public axHitTest(param0: T, param1: com.facebook.flipper.plugins.inspector.Touch): void;
						public invalidate(param0: T): void;
						public init(param0: T): void;
						public invalidateAX(param0: T): void;
						public setHighlighted(param0: T, param1: boolean, param2: boolean): void;
						public getData(param0: T): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
						public getDecoration(param0: T): string;
						public connected(): boolean;
						public getAXName(param0: T): string;
						public getAXDecoration(param0: T): string;
						public getChildAt(param0: T, param1: number): any;
						public constructor();
						public getAXChildCount(param0: T): number;
						public getAXChildAt(param0: T, param1: number): any;
						public getName(param0: T): string;
						public getAXAttributes(param0: T): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
						public matches(param0: string, param1: T): boolean;
						public descriptorForClass(param0: java.lang.Class<any>): com.facebook.flipper.plugins.inspector.NodeDescriptor<any>;
						public getAttributes(param0: T): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
						public setValue(param0: T, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
						public getAXData(param0: T): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
						public hitTest(param0: T, param1: com.facebook.flipper.plugins.inspector.Touch): void;
						public getId(param0: T): string;
						public getChildCount(param0: T): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export class ObjectTracker extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.ObjectTracker>;
						public constructor();
						public put(param0: string, param1: any): void;
						public get(param0: string): any;
						public remove(param0: string): void;
						public contains(param0: string): boolean;
						public clear(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export class SearchResultNode extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.SearchResultNode>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export abstract class SelfRegisteringNodeDescriptor<T>  extends com.facebook.flipper.plugins.inspector.NodeDescriptor<any> {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.SelfRegisteringNodeDescriptor<any>>;
						public constructor();
						public register(param0: com.facebook.flipper.plugins.inspector.DescriptorMapping): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export class SetDataOperations extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.SetDataOperations>;
						public static parseLayoutEditorMessage(param0: com.facebook.flipper.core.FlipperObject): com.facebook.flipper.plugins.inspector.SetDataOperations.HintedFlipperDynamic;
					}
					export module SetDataOperations {
						export class FlipperValueHint {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint>;
							public static STRING: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint;
							public static NUMBER: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint;
							public static OBJECT: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint;
							public static ARRAY: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint;
							public static NULL: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint;
							public value: string;
							public static fromString(param0: string): com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static values(): androidNative.Array<com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint>;
							public static valueOf(param0: string): com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint;
						}
						export class HintedFlipperDynamic extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.SetDataOperations.HintedFlipperDynamic>;
							public kind: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint;
							public value: com.facebook.flipper.core.FlipperDynamic;
							public constructor(param0: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param1: com.facebook.flipper.core.FlipperDynamic);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export class Touch extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.Touch>;
						/**
						 * Constructs a new instance of the com.facebook.flipper.plugins.inspector.Touch interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							finish(): void;
							continueWithOffset(param0: number, param1: number, param2: number): void;
							containedIn(param0: number, param1: number, param2: number, param3: number): boolean;
						});
						public constructor();
						public containedIn(param0: number, param1: number, param2: number, param3: number): boolean;
						public finish(): void;
						public continueWithOffset(param0: number, param1: number, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export abstract class TouchOverlayView extends globalAndroid.view.View implements com.facebook.flipper.plugins.inspector.HiddenNode {
						public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.TouchOverlayView>;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public sendAccessibilityEvent(param0: number): void;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.facebook.flipper.core.FlipperConnection, param2: com.facebook.flipper.plugins.inspector.ApplicationWrapper);
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public descriptorForObject(param0: any): com.facebook.flipper.plugins.inspector.NodeDescriptor<any>;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public trackObject(param0: any): string;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export class ActivityDescriptor extends com.facebook.flipper.plugins.inspector.NodeDescriptor<globalAndroid.app.Activity> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.ActivityDescriptor>;
							public setHighlighted(param0: globalAndroid.app.Activity, param1: boolean, param2: boolean): void;
							public getChildCount(param0: globalAndroid.app.Activity): number;
							public matches(param0: string, param1: globalAndroid.app.Activity): boolean;
							public getAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public hitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public init(param0: any): void;
							public getId(param0: globalAndroid.app.Activity): string;
							public setValue(param0: globalAndroid.app.Activity, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public matches(param0: string, param1: any): boolean;
							public getData(param0: globalAndroid.app.Activity): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public constructor();
							public getChildAt(param0: any, param1: number): any;
							public getDecoration(param0: globalAndroid.app.Activity): string;
							public getChildCount(param0: any): number;
							public getName(param0: globalAndroid.app.Activity): string;
							public setValue(param0: any, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getAttributes(param0: globalAndroid.app.Activity): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public getDecoration(param0: any): string;
							public getId(param0: any): string;
							public getName(param0: any): string;
							public hitTest(param0: globalAndroid.app.Activity, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public setHighlighted(param0: any, param1: boolean, param2: boolean): void;
							public getData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public init(param0: globalAndroid.app.Activity): void;
							public getChildAt(param0: globalAndroid.app.Activity, param1: number): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export class ApplicationDescriptor extends com.facebook.flipper.plugins.inspector.NodeDescriptor<com.facebook.flipper.plugins.inspector.ApplicationWrapper> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.ApplicationDescriptor>;
							public static setSearchActive(param0: boolean): void;
							public hitTest(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public hitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getName(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper): string;
							public getExtraInfo(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper): com.facebook.flipper.core.FlipperObject;
							public getData(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public init(param0: any): void;
							public matches(param0: string, param1: any): boolean;
							public setHighlighted(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper, param1: boolean, param2: boolean): void;
							public constructor();
							public static getSearchActive(): boolean;
							public getId(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper): string;
							public getChildAt(param0: any, param1: number): any;
							public axHitTest(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public matches(param0: string, param1: com.facebook.flipper.plugins.inspector.ApplicationWrapper): boolean;
							public getDecoration(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper): string;
							public setValue(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getAXName(param0: any): string;
							public static clearEditedDelegates(): void;
							public getChildCount(param0: any): number;
							public setValue(param0: any, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getAXChildAt(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper, param1: number): any;
							public init(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper): void;
							public getExtraInfo(param0: any): com.facebook.flipper.core.FlipperObject;
							public getDecoration(param0: any): string;
							public getId(param0: any): string;
							public getName(param0: any): string;
							public getAXName(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper): string;
							public getChildAt(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper, param1: number): any;
							public setHighlighted(param0: any, param1: boolean, param2: boolean): void;
							public getAXChildAt(param0: any, param1: number): any;
							public getData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getAttributes(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public axHitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getChildCount(param0: com.facebook.flipper.plugins.inspector.ApplicationWrapper): number;
						}
						export module ApplicationDescriptor {
							export class NodeKey extends java.lang.Object {
								public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.ApplicationDescriptor.NodeKey>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export class DialogDescriptor extends com.facebook.flipper.plugins.inspector.NodeDescriptor<globalAndroid.app.Dialog> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.DialogDescriptor>;
							public matches(param0: string, param1: globalAndroid.app.Dialog): boolean;
							public setValue(param0: globalAndroid.app.Dialog, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public hitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getId(param0: globalAndroid.app.Dialog): string;
							public init(param0: any): void;
							public hitTest(param0: globalAndroid.app.Dialog, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public matches(param0: string, param1: any): boolean;
							public getChildCount(param0: globalAndroid.app.Dialog): number;
							public constructor();
							public getChildAt(param0: any, param1: number): any;
							public getName(param0: globalAndroid.app.Dialog): string;
							public getDecoration(param0: globalAndroid.app.Dialog): string;
							public getChildCount(param0: any): number;
							public setValue(param0: any, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public setHighlighted(param0: globalAndroid.app.Dialog, param1: boolean, param2: boolean): void;
							public getAttributes(param0: globalAndroid.app.Dialog): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public getDecoration(param0: any): string;
							public getId(param0: any): string;
							public getName(param0: any): string;
							public setHighlighted(param0: any, param1: boolean, param2: boolean): void;
							public getData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public init(param0: globalAndroid.app.Dialog): void;
							public getData(param0: globalAndroid.app.Dialog): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getChildAt(param0: globalAndroid.app.Dialog, param1: number): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export class DialogFragmentDescriptor extends com.facebook.flipper.plugins.inspector.NodeDescriptor<globalAndroid.app.DialogFragment> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.DialogFragmentDescriptor>;
							public setHighlighted(param0: globalAndroid.app.DialogFragment, param1: boolean, param2: boolean): void;
							public setValue(param0: globalAndroid.app.DialogFragment, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public hitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public init(param0: any): void;
							public getChildCount(param0: globalAndroid.app.DialogFragment): number;
							public matches(param0: string, param1: any): boolean;
							public getName(param0: globalAndroid.app.DialogFragment): string;
							public init(param0: globalAndroid.app.DialogFragment): void;
							public getId(param0: globalAndroid.app.DialogFragment): string;
							public constructor();
							public getChildAt(param0: any, param1: number): any;
							public getChildAt(param0: globalAndroid.app.DialogFragment, param1: number): any;
							public getChildCount(param0: any): number;
							public getAttributes(param0: globalAndroid.app.DialogFragment): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public setValue(param0: any, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getDecoration(param0: globalAndroid.app.DialogFragment): string;
							public getExtraInfo(param0: any): com.facebook.flipper.core.FlipperObject;
							public getDecoration(param0: any): string;
							public getId(param0: any): string;
							public getName(param0: any): string;
							public setHighlighted(param0: any, param1: boolean, param2: boolean): void;
							public hitTest(param0: globalAndroid.app.DialogFragment, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public matches(param0: string, param1: globalAndroid.app.DialogFragment): boolean;
							public getData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getExtraInfo(param0: globalAndroid.app.DialogFragment): com.facebook.flipper.core.FlipperObject;
							public getData(param0: globalAndroid.app.DialogFragment): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export class DrawableDescriptor extends com.facebook.flipper.plugins.inspector.NodeDescriptor<globalAndroid.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.DrawableDescriptor>;
							public getChildCount(param0: globalAndroid.graphics.drawable.Drawable): number;
							public getAttributes(param0: globalAndroid.graphics.drawable.Drawable): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public matches(param0: string, param1: globalAndroid.graphics.drawable.Drawable): boolean;
							public getAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public setValue(param0: globalAndroid.graphics.drawable.Drawable, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public hitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getData(param0: globalAndroid.graphics.drawable.Drawable): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public init(param0: any): void;
							public getId(param0: globalAndroid.graphics.drawable.Drawable): string;
							public matches(param0: string, param1: any): boolean;
							public constructor();
							public getName(param0: globalAndroid.graphics.drawable.Drawable): string;
							public getChildAt(param0: any, param1: number): any;
							public init(param0: globalAndroid.graphics.drawable.Drawable): void;
							public getChildCount(param0: any): number;
							public setValue(param0: any, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public hitTest(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getDecoration(param0: any): string;
							public getId(param0: any): string;
							public setHighlighted(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean): void;
							public getName(param0: any): string;
							public setHighlighted(param0: any, param1: boolean, param2: boolean): void;
							public getData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getChildAt(param0: globalAndroid.graphics.drawable.Drawable, param1: number): any;
							public getDecoration(param0: globalAndroid.graphics.drawable.Drawable): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export class FragmentDescriptor extends com.facebook.flipper.plugins.inspector.NodeDescriptor<globalAndroid.app.Fragment> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.FragmentDescriptor>;
							public init(param0: globalAndroid.app.Fragment): void;
							public matches(param0: string, param1: globalAndroid.app.Fragment): boolean;
							public getChildAt(param0: globalAndroid.app.Fragment, param1: number): any;
							public getAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public hitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getDecoration(param0: globalAndroid.app.Fragment): string;
							public getId(param0: globalAndroid.app.Fragment): string;
							public init(param0: any): void;
							public getData(param0: globalAndroid.app.Fragment): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public matches(param0: string, param1: any): boolean;
							public getExtraInfo(param0: globalAndroid.app.Fragment): com.facebook.flipper.core.FlipperObject;
							public getName(param0: globalAndroid.app.Fragment): string;
							public constructor();
							public getChildAt(param0: any, param1: number): any;
							public getAttributes(param0: globalAndroid.app.Fragment): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public setValue(param0: globalAndroid.app.Fragment, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getChildCount(param0: any): number;
							public hitTest(param0: globalAndroid.app.Fragment, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public setValue(param0: any, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public setHighlighted(param0: globalAndroid.app.Fragment, param1: boolean, param2: boolean): void;
							public getExtraInfo(param0: any): com.facebook.flipper.core.FlipperObject;
							public getDecoration(param0: any): string;
							public getId(param0: any): string;
							public getName(param0: any): string;
							public setHighlighted(param0: any, param1: boolean, param2: boolean): void;
							public getData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getChildCount(param0: globalAndroid.app.Fragment): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export class ImageViewDescriptor extends com.facebook.flipper.plugins.inspector.NodeDescriptor<globalAndroid.widget.ImageView> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.ImageViewDescriptor>;
							public getAXChildAt(param0: globalAndroid.widget.ImageView, param1: number): any;
							public getAXData(param0: globalAndroid.widget.ImageView): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getAXName(param0: globalAndroid.widget.ImageView): string;
							public getChildAt(param0: globalAndroid.widget.ImageView, param1: number): any;
							public getAXAttributes(param0: globalAndroid.widget.ImageView): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public getAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public setHighlighted(param0: globalAndroid.widget.ImageView, param1: boolean, param2: boolean): void;
							public hitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public init(param0: globalAndroid.widget.ImageView): void;
							public init(param0: any): void;
							public matches(param0: string, param1: any): boolean;
							public getAXAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public constructor();
							public getId(param0: globalAndroid.widget.ImageView): string;
							public getData(param0: globalAndroid.widget.ImageView): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getChildAt(param0: any, param1: number): any;
							public getAttributes(param0: globalAndroid.widget.ImageView): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public hitTest(param0: globalAndroid.widget.ImageView, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public matches(param0: string, param1: globalAndroid.widget.ImageView): boolean;
							public getAXName(param0: any): string;
							public getAXDecoration(param0: globalAndroid.widget.ImageView): string;
							public getChildCount(param0: any): number;
							public setValue(param0: globalAndroid.widget.ImageView, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getExtraInfo(param0: globalAndroid.widget.ImageView): com.facebook.flipper.core.FlipperObject;
							public setValue(param0: any, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getExtraInfo(param0: any): com.facebook.flipper.core.FlipperObject;
							public getDecoration(param0: any): string;
							public getId(param0: any): string;
							public getName(param0: any): string;
							public getChildCount(param0: globalAndroid.widget.ImageView): number;
							public setHighlighted(param0: any, param1: boolean, param2: boolean): void;
							public getAXChildAt(param0: any, param1: number): any;
							public getAXData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public axHitTest(param0: globalAndroid.widget.ImageView, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getDecoration(param0: globalAndroid.widget.ImageView): string;
							public getAXDecoration(param0: any): string;
							public getName(param0: globalAndroid.widget.ImageView): string;
							public axHitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export class ObjectDescriptor extends com.facebook.flipper.plugins.inspector.NodeDescriptor<any> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.ObjectDescriptor>;
							public constructor();
							public getChildAt(param0: any, param1: number): any;
							public getChildCount(param0: any): number;
							public setValue(param0: any, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public hitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getDecoration(param0: any): string;
							public getId(param0: any): string;
							public init(param0: any): void;
							public getName(param0: any): string;
							public setHighlighted(param0: any, param1: boolean, param2: boolean): void;
							public matches(param0: string, param1: any): boolean;
							public getData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export class SupportDialogFragmentDescriptor extends com.facebook.flipper.plugins.inspector.NodeDescriptor<androidx.fragment.app.DialogFragment> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.SupportDialogFragmentDescriptor>;
							public setValue(param0: androidx.fragment.app.DialogFragment, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getDecoration(param0: androidx.fragment.app.DialogFragment): string;
							public getAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public hitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getData(param0: androidx.fragment.app.DialogFragment): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public init(param0: any): void;
							public matches(param0: string, param1: any): boolean;
							public constructor();
							public getChildAt(param0: any, param1: number): any;
							public getChildCount(param0: any): number;
							public getAttributes(param0: androidx.fragment.app.DialogFragment): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public getName(param0: androidx.fragment.app.DialogFragment): string;
							public setValue(param0: any, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public init(param0: androidx.fragment.app.DialogFragment): void;
							public getExtraInfo(param0: any): com.facebook.flipper.core.FlipperObject;
							public getDecoration(param0: any): string;
							public getId(param0: androidx.fragment.app.DialogFragment): string;
							public hitTest(param0: androidx.fragment.app.DialogFragment, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getId(param0: any): string;
							public getChildCount(param0: androidx.fragment.app.DialogFragment): number;
							public getName(param0: any): string;
							public setHighlighted(param0: any, param1: boolean, param2: boolean): void;
							public getData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getExtraInfo(param0: androidx.fragment.app.DialogFragment): com.facebook.flipper.core.FlipperObject;
							public getChildAt(param0: androidx.fragment.app.DialogFragment, param1: number): any;
							public setHighlighted(param0: androidx.fragment.app.DialogFragment, param1: boolean, param2: boolean): void;
							public matches(param0: string, param1: androidx.fragment.app.DialogFragment): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export class SupportFragmentDescriptor extends com.facebook.flipper.plugins.inspector.NodeDescriptor<androidx.fragment.app.Fragment> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.SupportFragmentDescriptor>;
							public getChildAt(param0: androidx.fragment.app.Fragment, param1: number): any;
							public getDecoration(param0: androidx.fragment.app.Fragment): string;
							public getAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public getId(param0: androidx.fragment.app.Fragment): string;
							public hitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public init(param0: any): void;
							public getExtraInfo(param0: androidx.fragment.app.Fragment): com.facebook.flipper.core.FlipperObject;
							public setHighlighted(param0: androidx.fragment.app.Fragment, param1: boolean, param2: boolean): void;
							public matches(param0: string, param1: any): boolean;
							public constructor();
							public init(param0: androidx.fragment.app.Fragment): void;
							public getChildAt(param0: any, param1: number): any;
							public setValue(param0: androidx.fragment.app.Fragment, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getChildCount(param0: any): number;
							public getAttributes(param0: androidx.fragment.app.Fragment): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public setValue(param0: any, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getExtraInfo(param0: any): com.facebook.flipper.core.FlipperObject;
							public getDecoration(param0: any): string;
							public getId(param0: any): string;
							public getName(param0: androidx.fragment.app.Fragment): string;
							public getName(param0: any): string;
							public hitTest(param0: androidx.fragment.app.Fragment, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public matches(param0: string, param1: androidx.fragment.app.Fragment): boolean;
							public setHighlighted(param0: any, param1: boolean, param2: boolean): void;
							public getData(param0: androidx.fragment.app.Fragment): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getChildCount(param0: androidx.fragment.app.Fragment): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export class TextViewDescriptor extends com.facebook.flipper.plugins.inspector.NodeDescriptor<globalAndroid.widget.TextView> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.TextViewDescriptor>;
							public getAXAttributes(param0: globalAndroid.widget.TextView): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public getId(param0: globalAndroid.widget.TextView): string;
							public getName(param0: globalAndroid.widget.TextView): string;
							public setHighlighted(param0: globalAndroid.widget.TextView, param1: boolean, param2: boolean): void;
							public getChildCount(param0: globalAndroid.widget.TextView): number;
							public getAXChildAt(param0: globalAndroid.widget.TextView, param1: number): any;
							public hitTest(param0: globalAndroid.widget.TextView, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getDecoration(param0: globalAndroid.widget.TextView): string;
							public getAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public hitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getData(param0: globalAndroid.widget.TextView): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public init(param0: any): void;
							public getChildAt(param0: globalAndroid.widget.TextView, param1: number): any;
							public setValue(param0: globalAndroid.widget.TextView, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getAXDecoration(param0: globalAndroid.widget.TextView): string;
							public matches(param0: string, param1: any): boolean;
							public getAXAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public constructor();
							public getChildAt(param0: any, param1: number): any;
							public getAXName(param0: any): string;
							public getChildCount(param0: any): number;
							public init(param0: globalAndroid.widget.TextView): void;
							public setValue(param0: any, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public axHitTest(param0: globalAndroid.widget.TextView, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getAXName(param0: globalAndroid.widget.TextView): string;
							public getExtraInfo(param0: any): com.facebook.flipper.core.FlipperObject;
							public getDecoration(param0: any): string;
							public getId(param0: any): string;
							public getAXData(param0: globalAndroid.widget.TextView): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getName(param0: any): string;
							public getExtraInfo(param0: globalAndroid.widget.TextView): com.facebook.flipper.core.FlipperObject;
							public setHighlighted(param0: any, param1: boolean, param2: boolean): void;
							public matches(param0: string, param1: globalAndroid.widget.TextView): boolean;
							public getAXChildAt(param0: any, param1: number): any;
							public getAXData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getAttributes(param0: globalAndroid.widget.TextView): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public getData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getAXDecoration(param0: any): string;
							public axHitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export class ViewDescriptor extends com.facebook.flipper.plugins.inspector.NodeDescriptor<globalAndroid.view.View> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.ViewDescriptor>;
							public getChildAt(param0: globalAndroid.view.View, param1: number): any;
							public setHighlighted(param0: globalAndroid.view.View, param1: boolean, param2: boolean): void;
							public matches(param0: string, param1: globalAndroid.view.View): boolean;
							public axHitTest(param0: globalAndroid.view.View, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getAttributes(param0: globalAndroid.view.View): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public init(param0: globalAndroid.view.View): void;
							public setValue(param0: globalAndroid.view.View, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public getAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public hitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getAXData(param0: globalAndroid.view.View): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public init(param0: any): void;
							public getChildCount(param0: globalAndroid.view.View): number;
							public matches(param0: string, param1: any): boolean;
							public getAXAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public constructor();
							public getChildAt(param0: any, param1: number): any;
							public getAXName(param0: any): string;
							public getChildCount(param0: any): number;
							public getData(param0: globalAndroid.view.View): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public setValue(param0: any, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public hitTest(param0: globalAndroid.view.View, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getExtraInfo(param0: any): com.facebook.flipper.core.FlipperObject;
							public getDecoration(param0: any): string;
							public getId(param0: any): string;
							public getAXName(param0: globalAndroid.view.View): string;
							public getName(param0: any): string;
							public getAXAttributes(param0: globalAndroid.view.View): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public setHighlighted(param0: any, param1: boolean, param2: boolean): void;
							public getAXDecoration(param0: globalAndroid.view.View): string;
							public getAXData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getName(param0: globalAndroid.view.View): string;
							public getData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getAXDecoration(param0: any): string;
							public getId(param0: globalAndroid.view.View): string;
							public getExtraInfo(param0: globalAndroid.view.View): com.facebook.flipper.core.FlipperObject;
							public axHitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getDecoration(param0: globalAndroid.view.View): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export class ViewGroupDescriptor extends com.facebook.flipper.plugins.inspector.NodeDescriptor<globalAndroid.view.ViewGroup> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.ViewGroupDescriptor>;
							public getId(param0: globalAndroid.view.ViewGroup): string;
							public getAttributes(param0: globalAndroid.view.ViewGroup): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public hitTest(param0: globalAndroid.view.ViewGroup, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public getExtraInfo(param0: globalAndroid.view.ViewGroup): com.facebook.flipper.core.FlipperObject;
							public hitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public init(param0: globalAndroid.view.ViewGroup): void;
							public setValue(param0: globalAndroid.view.ViewGroup, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public init(param0: any): void;
							public getAXAttributes(param0: globalAndroid.view.ViewGroup): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public getAXChildAt(param0: globalAndroid.view.ViewGroup, param1: number): any;
							public setHighlighted(param0: globalAndroid.view.ViewGroup, param1: boolean, param2: boolean): void;
							public matches(param0: string, param1: any): boolean;
							public getAXName(param0: globalAndroid.view.ViewGroup): string;
							public getChildCount(param0: globalAndroid.view.ViewGroup): number;
							public getAXAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public getDecoration(param0: globalAndroid.view.ViewGroup): string;
							public constructor();
							public getData(param0: globalAndroid.view.ViewGroup): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getChildAt(param0: any, param1: number): any;
							public matches(param0: string, param1: globalAndroid.view.ViewGroup): boolean;
							public getChildAt(param0: globalAndroid.view.ViewGroup, param1: number): any;
							public getAXName(param0: any): string;
							public getChildCount(param0: any): number;
							public setValue(param0: any, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public axHitTest(param0: globalAndroid.view.ViewGroup, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getAXData(param0: globalAndroid.view.ViewGroup): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getExtraInfo(param0: any): com.facebook.flipper.core.FlipperObject;
							public getDecoration(param0: any): string;
							public getId(param0: any): string;
							public getName(param0: any): string;
							public setHighlighted(param0: any, param1: boolean, param2: boolean): void;
							public getAXChildAt(param0: any, param1: number): any;
							public getAXDecoration(param0: globalAndroid.view.ViewGroup): string;
							public getName(param0: globalAndroid.view.ViewGroup): string;
							public getAXData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getAXDecoration(param0: any): string;
							public axHitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
						}
						export module ViewGroupDescriptor {
							export class NodeKey extends java.lang.Object {
								public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.ViewGroupDescriptor.NodeKey>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export class WindowDescriptor extends com.facebook.flipper.plugins.inspector.NodeDescriptor<globalAndroid.view.Window> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.WindowDescriptor>;
							public init(param0: globalAndroid.view.Window): void;
							public getData(param0: globalAndroid.view.Window): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public getAttributes(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public getName(param0: globalAndroid.view.Window): string;
							public hitTest(param0: any, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public matches(param0: string, param1: globalAndroid.view.Window): boolean;
							public init(param0: any): void;
							public getId(param0: globalAndroid.view.Window): string;
							public matches(param0: string, param1: any): boolean;
							public constructor();
							public getChildAt(param0: any, param1: number): any;
							public getAttributes(param0: globalAndroid.view.Window): java.util.List<com.facebook.flipper.plugins.inspector.Named<string>>;
							public getChildCount(param0: any): number;
							public setValue(param0: any, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public setValue(param0: globalAndroid.view.Window, param1: androidNative.Array<string>, param2: com.facebook.flipper.plugins.inspector.SetDataOperations.FlipperValueHint, param3: com.facebook.flipper.core.FlipperDynamic): void;
							public hitTest(param0: globalAndroid.view.Window, param1: com.facebook.flipper.plugins.inspector.Touch): void;
							public getDecoration(param0: any): string;
							public getId(param0: any): string;
							public getName(param0: any): string;
							public setHighlighted(param0: any, param1: boolean, param2: boolean): void;
							public getChildCount(param0: globalAndroid.view.Window): number;
							public getChildAt(param0: globalAndroid.view.Window, param1: number): any;
							public getDecoration(param0: globalAndroid.view.Window): string;
							public getData(param0: any): java.util.List<com.facebook.flipper.plugins.inspector.Named<com.facebook.flipper.core.FlipperObject>>;
							public setHighlighted(param0: globalAndroid.view.Window, param1: boolean, param2: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export class AccessibilityEvaluationUtil extends java.lang.Object {
								public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityEvaluationUtil>;
								public static isAccessibilityFocusable(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat, param1: globalAndroid.view.View): boolean;
								public static hasText(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): boolean;
								public static hasFocusableAncestor(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat, param1: globalAndroid.view.View): boolean;
								public static isActionableForAccessibility(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): boolean;
								public static hasNonActionableSpeakingDescendants(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat, param1: globalAndroid.view.View): boolean;
								public static isTopLevelScrollItem(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat, param1: globalAndroid.view.View): boolean;
								public static hasEqualBoundsToViewRoot(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat, param1: globalAndroid.view.View): boolean;
								public static isTalkbackFocusable(param0: globalAndroid.view.View): boolean;
								public static isSpeakingNode(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat, param1: globalAndroid.view.View): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export class AccessibilityRoleUtil extends java.lang.Object {
								public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil>;
								public static getRole(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
								public static getRole(param0: globalAndroid.view.View): com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
								public static getTalkbackRoleString(param0: globalAndroid.view.View): string;
								public static getRole(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
							}
							export module AccessibilityRoleUtil {
								export class AccessibilityRole {
									public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole>;
									public static NONE: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static BUTTON: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static CHECK_BOX: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static DROP_DOWN_LIST: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static EDIT_TEXT: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static GRID: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static IMAGE: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static IMAGE_BUTTON: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static LIST: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static PAGER: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static RADIO_BUTTON: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static SEEK_CONTROL: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static SWITCH: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static TAB_BAR: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static TOGGLE_BUTTON: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static VIEW_GROUP: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static WEB_VIEW: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static CHECKED_TEXT_VIEW: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static PROGRESS_BAR: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static ACTION_BAR_TAB: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static DRAWER_LAYOUT: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static SLIDING_DRAWER: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static ICON_MENU: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static TOAST: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static DATE_PICKER_DIALOG: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static TIME_PICKER_DIALOG: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static DATE_PICKER: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static TIME_PICKER: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static NUMBER_PICKER: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static SCROLL_VIEW: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static HORIZONTAL_SCROLL_VIEW: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static KEYBOARD_KEY: com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static fromValue(param0: string): com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
									public static values(): androidNative.Array<com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole>;
									public getValue(): string;
									public getRoleString(): string;
									public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
									public static valueOf(param0: string): com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityRoleUtil.AccessibilityRole;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export class AccessibilityUtil extends java.lang.Object {
								public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.AccessibilityUtil>;
								public static sAccessibilityActionMapping: com.facebook.flipper.plugins.inspector.descriptors.utils.EnumMapping<java.lang.Integer>;
								public static sImportantForAccessibilityMapping: com.facebook.flipper.plugins.inspector.descriptors.utils.EnumMapping<java.lang.Integer>;
								public static isAXFocused(param0: globalAndroid.view.View): boolean;
								public static getRoleDescription(param0: globalAndroid.view.View): string;
								public static addTalkbackProperties(param0: com.facebook.flipper.core.FlipperObject.Builder, param1: globalAndroid.view.View): void;
								public static getViewData(param0: globalAndroid.view.View): com.facebook.flipper.core.FlipperObject;
								public static getTalkbackData(param0: globalAndroid.view.View): com.facebook.flipper.core.FlipperObject;
								public static getRoleDescription(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): string;
								public static isTalkbackEnabled(param0: globalAndroid.content.Context): boolean;
								public static getTalkbackDescription(param0: globalAndroid.view.View): string;
								public static getTalkbackHint(param0: globalAndroid.view.View): string;
								public static isAccessibilityEnabled(param0: globalAndroid.content.Context): boolean;
								public static getTalkbackFocusableReasons(param0: globalAndroid.view.View): string;
								public static getTalkbackIgnoredReasons(param0: globalAndroid.view.View): string;
								public static getAccessibilityNodeInfoData(param0: globalAndroid.view.View): com.facebook.flipper.core.FlipperObject;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export class AndroidRootResolver extends java.lang.Object {
								public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.AndroidRootResolver>;
								public listActiveRoots(): java.util.List<com.facebook.flipper.plugins.inspector.descriptors.utils.AndroidRootResolver.Root>;
								public constructor();
							}
							export module AndroidRootResolver {
								export class Root extends java.lang.Object {
									public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.AndroidRootResolver.Root>;
									public view: globalAndroid.view.View;
									public param: globalAndroid.view.WindowManager.LayoutParams;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export class ContextDescriptorUtils extends java.lang.Object {
								public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.ContextDescriptorUtils>;
								public static themeData(param0: globalAndroid.content.Context): com.facebook.flipper.core.FlipperObject;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export class EnumMapping<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.EnumMapping<any>>;
								public static findKeyForValue(param0: androidx.collection.SimpleArrayMap, param1: string, param2: any): string;
								public toPicker(): com.facebook.flipper.plugins.inspector.InspectorValue<any>;
								public toPicker(param0: T): com.facebook.flipper.plugins.inspector.InspectorValue<any>;
								public get(param0: string): T;
								public constructor(param0: string);
								public put(param0: string, param1: T): void;
								public get(param0: T, param1: boolean): com.facebook.flipper.plugins.inspector.InspectorValue<string>;
								public toPicker(param0: boolean): com.facebook.flipper.plugins.inspector.InspectorValue<any>;
								public toPicker(param0: T, param1: boolean): com.facebook.flipper.plugins.inspector.InspectorValue<any>;
								public get(param0: T): com.facebook.flipper.plugins.inspector.InspectorValue<string>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export class ViewAccessibilityHelper extends java.lang.Object {
								public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.ViewAccessibilityHelper>;
								public static createNodeInfoFromView(param0: globalAndroid.view.View): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export module stethocopies {
								export class DialogFragmentAccessor<DIALOG_FRAGMENT, FRAGMENT, FRAGMENT_MANAGER>  extends com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentAccessor<any,any> {
									public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.DialogFragmentAccessor<any,any,any>>;
									/**
									 * Constructs a new instance of the com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.DialogFragmentAccessor<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getDialog(param0: any): globalAndroid.app.Dialog;
										getFragmentManager(param0: any): any;
										getResources(param0: any): globalAndroid.content.res.Resources;
										getId(param0: any): number;
										getTag(param0: any): string;
										getView(param0: any): globalAndroid.view.View;
										getChildFragmentManager(param0: any): any;
									});
									public constructor();
									public static NO_ID: number;
									public getResources(param0: any): globalAndroid.content.res.Resources;
									public getView(param0: any): globalAndroid.view.View;
									public getId(param0: any): number;
									public getDialog(param0: any): globalAndroid.app.Dialog;
									public getTag(param0: any): string;
									public getFragmentManager(param0: any): any;
									public getChildFragmentManager(param0: any): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export module stethocopies {
								export class FragmentAccessor<FRAGMENT, FRAGMENT_MANAGER>  extends java.lang.Object {
									public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentAccessor<any,any>>;
									/**
									 * Constructs a new instance of the com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentAccessor<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getFragmentManager(param0: FRAGMENT): FRAGMENT_MANAGER;
										getResources(param0: FRAGMENT): globalAndroid.content.res.Resources;
										getId(param0: FRAGMENT): number;
										getTag(param0: FRAGMENT): string;
										getView(param0: FRAGMENT): globalAndroid.view.View;
										getChildFragmentManager(param0: FRAGMENT): FRAGMENT_MANAGER;
									});
									public constructor();
									public static NO_ID: number;
									public getTag(param0: FRAGMENT): string;
									public getView(param0: FRAGMENT): globalAndroid.view.View;
									public getChildFragmentManager(param0: FRAGMENT): FRAGMENT_MANAGER;
									public getId(param0: FRAGMENT): number;
									public getFragmentManager(param0: FRAGMENT): FRAGMENT_MANAGER;
									public getResources(param0: FRAGMENT): globalAndroid.content.res.Resources;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export module stethocopies {
								export class FragmentActivityAccessor<FRAGMENT_ACTIVITY, FRAGMENT_MANAGER>  extends java.lang.Object {
									public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentActivityAccessor<any,any>>;
									/**
									 * Constructs a new instance of the com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentActivityAccessor<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getFragmentManager(param0: FRAGMENT_ACTIVITY): FRAGMENT_MANAGER;
									});
									public constructor();
									public getFragmentManager(param0: FRAGMENT_ACTIVITY): FRAGMENT_MANAGER;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export module stethocopies {
								export abstract class FragmentCompat<FRAGMENT, DIALOG_FRAGMENT, FRAGMENT_MANAGER, FRAGMENT_ACTIVITY>  extends java.lang.Object {
									public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompat<any,any,any,any>>;
									public static getFrameworkInstance(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompat<any,any,any,any>;
									public getFragmentClass(): java.lang.Class<FRAGMENT>;
									public forFragmentActivity(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentActivityAccessor<FRAGMENT_ACTIVITY,FRAGMENT_MANAGER>;
									public forDialogFragment(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.DialogFragmentAccessor<DIALOG_FRAGMENT,FRAGMENT,FRAGMENT_MANAGER>;
									public static getSupportLibInstance(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompat<any,any,any,any>;
									public getDialogFragmentClass(): java.lang.Class<DIALOG_FRAGMENT>;
									public forFragmentManager(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentManagerAccessor<FRAGMENT_MANAGER,FRAGMENT>;
									public forFragment(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentAccessor<FRAGMENT,FRAGMENT_MANAGER>;
									public getFragmentActivityClass(): java.lang.Class<FRAGMENT_ACTIVITY>;
								}
								export module FragmentCompat {
									export class FragmentManagerAccessorViaReflection<FRAGMENT_MANAGER, FRAGMENT>  extends com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentManagerAccessor<any,any> {
										public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompat.FragmentManagerAccessorViaReflection<any,any>>;
										public getAddedFragments(param0: any): java.util.List<any>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export module stethocopies {
								export class FragmentCompatFramework extends com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompat<globalAndroid.app.Fragment,globalAndroid.app.DialogFragment,globalAndroid.app.FragmentManager,globalAndroid.app.Activity> {
									public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatFramework>;
									public forFragmentManager(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompat.FragmentManagerAccessorViaReflection<globalAndroid.app.FragmentManager,globalAndroid.app.Fragment>;
									public forFragmentActivity(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatFramework.FragmentActivityAccessorFramework;
									public getDialogFragmentClass(): java.lang.Class<any>;
									public getFragmentClass(): java.lang.Class<globalAndroid.app.Fragment>;
									public forFragmentActivity(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentActivityAccessor<any,any>;
									public getDialogFragmentClass(): java.lang.Class<globalAndroid.app.DialogFragment>;
									public getFragmentActivityClass(): java.lang.Class<any>;
									public forFragmentManager(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentManagerAccessor<any,any>;
									public forFragment(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentAccessor<any,any>;
									public getFragmentClass(): java.lang.Class<any>;
									public getFragmentActivityClass(): java.lang.Class<globalAndroid.app.Activity>;
									public forFragment(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatFramework.FragmentAccessorFrameworkHoneycomb;
									public forDialogFragment(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatFramework.DialogFragmentAccessorFramework;
									public forDialogFragment(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.DialogFragmentAccessor<any,any,any>;
								}
								export module FragmentCompatFramework {
									export class DialogFragmentAccessorFramework extends com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.DialogFragmentAccessor<globalAndroid.app.DialogFragment,globalAndroid.app.Fragment,globalAndroid.app.FragmentManager> {
										public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatFramework.DialogFragmentAccessorFramework>;
										public constructor(param0: com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentAccessor<globalAndroid.app.Fragment,globalAndroid.app.FragmentManager>);
										public getId(param0: globalAndroid.app.Fragment): number;
										public getView(param0: globalAndroid.app.Fragment): globalAndroid.view.View;
										public getChildFragmentManager(param0: any): any;
										public getChildFragmentManager(param0: globalAndroid.app.Fragment): globalAndroid.app.FragmentManager;
										public getResources(param0: any): globalAndroid.content.res.Resources;
										public getView(param0: any): globalAndroid.view.View;
										public getFragmentManager(param0: globalAndroid.app.Fragment): globalAndroid.app.FragmentManager;
										public getTag(param0: any): string;
										public getDialog(param0: any): globalAndroid.app.Dialog;
										public getDialog(param0: globalAndroid.app.DialogFragment): globalAndroid.app.Dialog;
										public getFragmentManager(param0: any): any;
										public getId(param0: any): number;
										public getResources(param0: globalAndroid.app.Fragment): globalAndroid.content.res.Resources;
										public getTag(param0: globalAndroid.app.Fragment): string;
									}
									export class FragmentAccessorFrameworkHoneycomb extends com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentAccessor<globalAndroid.app.Fragment,globalAndroid.app.FragmentManager> {
										public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatFramework.FragmentAccessorFrameworkHoneycomb>;
										public getView(param0: any): globalAndroid.view.View;
										public getFragmentManager(param0: globalAndroid.app.Fragment): globalAndroid.app.FragmentManager;
										public getId(param0: globalAndroid.app.Fragment): number;
										public getView(param0: globalAndroid.app.Fragment): globalAndroid.view.View;
										public getTag(param0: any): string;
										public getChildFragmentManager(param0: any): any;
										public getChildFragmentManager(param0: globalAndroid.app.Fragment): globalAndroid.app.FragmentManager;
										public getFragmentManager(param0: any): any;
										public getId(param0: any): number;
										public getResources(param0: any): globalAndroid.content.res.Resources;
										public getResources(param0: globalAndroid.app.Fragment): globalAndroid.content.res.Resources;
										public getTag(param0: globalAndroid.app.Fragment): string;
									}
									export class FragmentAccessorFrameworkJellyBean extends com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatFramework.FragmentAccessorFrameworkHoneycomb {
										public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatFramework.FragmentAccessorFrameworkJellyBean>;
										public getView(param0: any): globalAndroid.view.View;
										public getFragmentManager(param0: globalAndroid.app.Fragment): globalAndroid.app.FragmentManager;
										public getId(param0: globalAndroid.app.Fragment): number;
										public getTag(param0: any): string;
										public getView(param0: globalAndroid.app.Fragment): globalAndroid.view.View;
										public getChildFragmentManager(param0: any): any;
										public getChildFragmentManager(param0: globalAndroid.app.Fragment): globalAndroid.app.FragmentManager;
										public getFragmentManager(param0: any): any;
										public getId(param0: any): number;
										public getResources(param0: any): globalAndroid.content.res.Resources;
										public getResources(param0: globalAndroid.app.Fragment): globalAndroid.content.res.Resources;
										public getTag(param0: globalAndroid.app.Fragment): string;
									}
									export class FragmentActivityAccessorFramework extends com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentActivityAccessor<globalAndroid.app.Activity,globalAndroid.app.FragmentManager> {
										public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatFramework.FragmentActivityAccessorFramework>;
										public getFragmentManager(param0: globalAndroid.app.Activity): globalAndroid.app.FragmentManager;
										public getFragmentManager(param0: any): any;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export module stethocopies {
								export class FragmentCompatSupportLib extends com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompat<androidx.fragment.app.Fragment,androidx.fragment.app.DialogFragment,androidx.fragment.app.FragmentManager,androidx.fragment.app.FragmentActivity> {
									public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatSupportLib>;
									public forFragmentManager(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentManagerAccessor<androidx.fragment.app.FragmentManager,androidx.fragment.app.Fragment>;
									public getDialogFragmentClass(): java.lang.Class<any>;
									public forFragmentActivity(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentActivityAccessor<any,any>;
									public forFragmentActivity(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatSupportLib.FragmentActivityAccessorSupportLib;
									public getDialogFragmentClass(): java.lang.Class<androidx.fragment.app.DialogFragment>;
									public getFragmentActivityClass(): java.lang.Class<any>;
									public forFragmentManager(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentManagerAccessor<any,any>;
									public getFragmentClass(): java.lang.Class<androidx.fragment.app.Fragment>;
									public forFragment(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentAccessor<any,any>;
									public getFragmentActivityClass(): java.lang.Class<androidx.fragment.app.FragmentActivity>;
									public forFragment(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatSupportLib.FragmentAccessorSupportLib;
									public getFragmentClass(): java.lang.Class<any>;
									public forDialogFragment(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatSupportLib.DialogFragmentAccessorSupportLib;
									public forDialogFragment(): com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.DialogFragmentAccessor<any,any,any>;
								}
								export module FragmentCompatSupportLib {
									export class DialogFragmentAccessorSupportLib extends com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatSupportLib.FragmentAccessorSupportLib implements com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.DialogFragmentAccessor<androidx.fragment.app.DialogFragment,androidx.fragment.app.Fragment,androidx.fragment.app.FragmentManager>  {
										public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatSupportLib.DialogFragmentAccessorSupportLib>;
										public getResources(param0: androidx.fragment.app.Fragment): globalAndroid.content.res.Resources;
										public getDialog(param0: androidx.fragment.app.DialogFragment): globalAndroid.app.Dialog;
										public getChildFragmentManager(param0: any): any;
										public getResources(param0: any): globalAndroid.content.res.Resources;
										public getView(param0: androidx.fragment.app.Fragment): globalAndroid.view.View;
										public getView(param0: any): globalAndroid.view.View;
										public getFragmentManager(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentManager;
										public getChildFragmentManager(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentManager;
										public getId(param0: androidx.fragment.app.Fragment): number;
										public getTag(param0: any): string;
										public getDialog(param0: any): globalAndroid.app.Dialog;
										public getTag(param0: androidx.fragment.app.Fragment): string;
										public getFragmentManager(param0: any): any;
										public getId(param0: any): number;
									}
									export class FragmentAccessorSupportLib extends com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentAccessor<androidx.fragment.app.Fragment,androidx.fragment.app.FragmentManager> {
										public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatSupportLib.FragmentAccessorSupportLib>;
										public getView(param0: any): globalAndroid.view.View;
										public getFragmentManager(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentManager;
										public getResources(param0: androidx.fragment.app.Fragment): globalAndroid.content.res.Resources;
										public getChildFragmentManager(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentManager;
										public getId(param0: androidx.fragment.app.Fragment): number;
										public getTag(param0: any): string;
										public getTag(param0: androidx.fragment.app.Fragment): string;
										public getChildFragmentManager(param0: any): any;
										public getFragmentManager(param0: any): any;
										public getId(param0: any): number;
										public getView(param0: androidx.fragment.app.Fragment): globalAndroid.view.View;
										public getResources(param0: any): globalAndroid.content.res.Resources;
									}
									export class FragmentActivityAccessorSupportLib extends com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentActivityAccessor<androidx.fragment.app.FragmentActivity,androidx.fragment.app.FragmentManager> {
										public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatSupportLib.FragmentActivityAccessorSupportLib>;
										public getFragmentManager(param0: androidx.fragment.app.FragmentActivity): androidx.fragment.app.FragmentManager;
										public getFragmentManager(param0: any): any;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export module stethocopies {
								export class FragmentCompatUtil extends java.lang.Object {
									public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompatUtil>;
									public static isDialogFragment(param0: any): boolean;
									public static findFragmentForView(param0: globalAndroid.view.View): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export module stethocopies {
								export class FragmentManagerAccessor<FRAGMENT_MANAGER, FRAGMENT>  extends java.lang.Object {
									public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentManagerAccessor<any,any>>;
									/**
									 * Constructs a new instance of the com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentManagerAccessor<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getAddedFragments(param0: FRAGMENT_MANAGER): java.util.List<FRAGMENT>;
									});
									public constructor();
									public getAddedFragments(param0: FRAGMENT_MANAGER): java.util.List<FRAGMENT>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export module stethocopies {
								export class ReflectionUtil extends java.lang.Object {
									public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.ReflectionUtil>;
									public static tryGetClassForName(param0: string): java.lang.Class<any>;
									public static getFieldValue(param0: java.lang.reflect.Field, param1: any): any;
									public static tryGetDeclaredField(param0: java.lang.Class<any>, param1: string): java.lang.reflect.Field;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export module stethocopies {
								export class ResourcesUtil extends java.lang.Object {
									public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.ResourcesUtil>;
									public static getIdStringQuietly(param0: any, param1: globalAndroid.content.res.Resources, param2: number): string;
									public static getIdString(param0: globalAndroid.content.res.Resources, param1: number): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module inspector {
					export module descriptors {
						export module utils {
							export module stethocopies {
								export class ViewUtil extends java.lang.Object {
									public static class: java.lang.Class<com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.ViewUtil>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module navigation {
					export class NavigationFlipperPlugin extends java.lang.Object implements com.facebook.flipper.core.FlipperPlugin {
						public static class: java.lang.Class<com.facebook.flipper.plugins.navigation.NavigationFlipperPlugin>;
						public onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
						/** @deprecated */
						public sendNavigationEvent(param0: string): void;
						public getId(): string;
						public runInBackground(): boolean;
						public static getInstance(): com.facebook.flipper.plugins.navigation.NavigationFlipperPlugin;
						public sendNavigationEvent(param0: string, param1: string, param2: java.util.Date): void;
						public onDisconnect(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module network {
					export class BuildConfig extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.network.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static BUILD_TYPE: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module network {
					export class FlipperOkhttpInterceptor extends java.lang.Object implements com.facebook.flipper.plugins.common.BufferingFlipperPlugin.MockResponseConnectionListener {
						public static class: java.lang.Class<com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor>;
						public onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
						public constructor(param0: com.facebook.flipper.plugins.network.NetworkFlipperPlugin);
						public constructor(param0: com.facebook.flipper.plugins.network.NetworkFlipperPlugin, param1: number, param2: boolean);
						public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
						public constructor(param0: com.facebook.flipper.plugins.network.NetworkFlipperPlugin, param1: number);
						public constructor(param0: com.facebook.flipper.plugins.network.NetworkFlipperPlugin, param1: boolean);
						public onDisconnect(): void;
					}
					export module FlipperOkhttpInterceptor {
						export class PartialRequestInfo extends globalAndroid.util.Pair<string,string> {
							public static class: java.lang.Class<com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor.PartialRequestInfo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module network {
					export class NetworkFlipperPlugin extends com.facebook.flipper.plugins.common.BufferingFlipperPlugin implements com.facebook.flipper.plugins.network.NetworkReporter {
						public static class: java.lang.Class<com.facebook.flipper.plugins.network.NetworkFlipperPlugin>;
						public static ID: string;
						public onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
						public reportResponse(param0: com.facebook.flipper.plugins.network.NetworkReporter.ResponseInfo): void;
						public constructor();
						public constructor(param0: java.util.List<com.facebook.flipper.plugins.network.NetworkResponseFormatter>);
						public reportRequest(param0: com.facebook.flipper.plugins.network.NetworkReporter.RequestInfo): void;
						public getId(): string;
						public runInBackground(): boolean;
						public addProtobufDefinitions(param0: string, param1: com.facebook.flipper.core.FlipperArray): void;
						public onDisconnect(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module network {
					export class NetworkReporter extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.network.NetworkReporter>;
						/**
						 * Constructs a new instance of the com.facebook.flipper.plugins.network.NetworkReporter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							reportRequest(param0: com.facebook.flipper.plugins.network.NetworkReporter.RequestInfo): void;
							reportResponse(param0: com.facebook.flipper.plugins.network.NetworkReporter.ResponseInfo): void;
						});
						public constructor();
						public reportResponse(param0: com.facebook.flipper.plugins.network.NetworkReporter.ResponseInfo): void;
						public reportRequest(param0: com.facebook.flipper.plugins.network.NetworkReporter.RequestInfo): void;
					}
					export module NetworkReporter {
						export class Header extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.network.NetworkReporter.Header>;
							public name: string;
							public value: string;
							public constructor(param0: string, param1: string);
							public toString(): string;
						}
						export class RequestInfo extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.network.NetworkReporter.RequestInfo>;
							public requestId: string;
							public timeStamp: number;
							public headers: java.util.List<com.facebook.flipper.plugins.network.NetworkReporter.Header>;
							public method: string;
							public uri: string;
							public body: androidNative.Array<number>;
							public constructor();
							public getFirstHeader(param0: string): com.facebook.flipper.plugins.network.NetworkReporter.Header;
						}
						export class ResponseInfo extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.network.NetworkReporter.ResponseInfo>;
							public requestId: string;
							public timeStamp: number;
							public statusCode: number;
							public statusReason: string;
							public headers: java.util.List<com.facebook.flipper.plugins.network.NetworkReporter.Header>;
							public body: androidNative.Array<number>;
							public isMock: boolean;
							public constructor();
							public getFirstHeader(param0: string): com.facebook.flipper.plugins.network.NetworkReporter.Header;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module network {
					export class NetworkResponseFormatter extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.network.NetworkResponseFormatter>;
						/**
						 * Constructs a new instance of the com.facebook.flipper.plugins.network.NetworkResponseFormatter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							shouldFormat(param0: com.facebook.flipper.plugins.network.NetworkReporter.ResponseInfo): boolean;
							format(param0: com.facebook.flipper.plugins.network.NetworkReporter.ResponseInfo, param1: com.facebook.flipper.plugins.network.NetworkResponseFormatter.OnCompletionListener): void;
						});
						public constructor();
						public format(param0: com.facebook.flipper.plugins.network.NetworkReporter.ResponseInfo, param1: com.facebook.flipper.plugins.network.NetworkResponseFormatter.OnCompletionListener): void;
						public shouldFormat(param0: com.facebook.flipper.plugins.network.NetworkReporter.ResponseInfo): boolean;
					}
					export module NetworkResponseFormatter {
						export class OnCompletionListener extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.network.NetworkResponseFormatter.OnCompletionListener>;
							/**
							 * Constructs a new instance of the com.facebook.flipper.plugins.network.NetworkResponseFormatter$OnCompletionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCompletion(param0: string): void;
							});
							public constructor();
							public onCompletion(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module react {
					export class ReactFlipperPlugin extends java.lang.Object implements com.facebook.flipper.core.FlipperPlugin {
						public static class: java.lang.Class<com.facebook.flipper.plugins.react.ReactFlipperPlugin>;
						public static ID: string;
						public onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
						public constructor();
						public getId(): string;
						public runInBackground(): boolean;
						public onDisconnect(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module sandbox {
					export class SandboxFlipperPlugin extends java.lang.Object implements com.facebook.flipper.core.FlipperPlugin {
						public static class: java.lang.Class<com.facebook.flipper.plugins.sandbox.SandboxFlipperPlugin>;
						public static ID: string;
						public onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
						public getId(): string;
						public runInBackground(): boolean;
						public constructor(param0: com.facebook.flipper.plugins.sandbox.SandboxFlipperPluginStrategy);
						public onDisconnect(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module sandbox {
					export class SandboxFlipperPluginStrategy extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.flipper.plugins.sandbox.SandboxFlipperPluginStrategy>;
						/**
						 * Constructs a new instance of the com.facebook.flipper.plugins.sandbox.SandboxFlipperPluginStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getKnownSandboxes(): java.util.Map<string,string>;
							setSandbox(param0: string): void;
						});
						public constructor();
						public setSandbox(param0: string): void;
						public getKnownSandboxes(): java.util.Map<string,string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module plugins {
				export module sharedpreferences {
					export class SharedPreferencesFlipperPlugin extends java.lang.Object implements com.facebook.flipper.core.FlipperPlugin {
						public static class: java.lang.Class<com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin>;
						public onConnect(param0: com.facebook.flipper.core.FlipperConnection): void;
						public constructor(param0: globalAndroid.content.Context);
						public getId(): string;
						public constructor(param0: globalAndroid.content.Context, param1: string, param2: number);
						public runInBackground(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: string);
						public constructor(param0: globalAndroid.content.Context, param1: java.util.List<com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin.SharedPreferencesDescriptor>);
						public onDisconnect(): void;
					}
					export module SharedPreferencesFlipperPlugin {
						export class SharedPreferencesDescriptor extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin.SharedPreferencesDescriptor>;
							public name: string;
							public mode: number;
							public constructor(param0: string, param1: number);
							public getSharedPreferences(param0: globalAndroid.content.Context): globalAndroid.content.SharedPreferences;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module testing {
				export class FlipperConnectionMock extends java.lang.Object implements com.facebook.flipper.core.FlipperConnection {
					public static class: java.lang.Class<com.facebook.flipper.testing.FlipperConnectionMock>;
					public receivers: java.util.Map<string,com.facebook.flipper.core.FlipperReceiver>;
					public sent: java.util.Map<string,java.util.List<any>>;
					public errors: java.util.List<java.lang.Throwable>;
					public reportError(param0: java.lang.Throwable): void;
					public constructor();
					public reportErrorWithMetadata(param0: string, param1: string): void;
					public send(param0: string, param1: com.facebook.flipper.core.FlipperObject): void;
					public receive(param0: string, param1: com.facebook.flipper.core.FlipperReceiver): void;
					public send(param0: string, param1: com.facebook.flipper.core.FlipperArray): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module flipper {
			export module testing {
				export class FlipperResponderMock extends java.lang.Object implements com.facebook.flipper.core.FlipperResponder {
					public static class: java.lang.Class<com.facebook.flipper.testing.FlipperResponderMock>;
					public successes: java.util.List<any>;
					public errors: java.util.List<com.facebook.flipper.core.FlipperObject>;
					public error(param0: com.facebook.flipper.core.FlipperObject): void;
					public success(param0: com.facebook.flipper.core.FlipperObject): void;
					public constructor();
					public success(): void;
					public success(param0: com.facebook.flipper.core.FlipperArray): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class SoLoader extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.SoLoader>;
				public static SOLOADER_ENABLE_EXOPACKAGE: number;
				public static SOLOADER_ALLOW_ASYNC_INIT: number;
				public static SOLOADER_LOOK_IN_ZIP: number;
				public static SOLOADER_DISABLE_BACKUP_SOSOURCE: number;
				public static loadLibrary(param0: string): boolean;
				public constructor();
				public static makeNonZipPath(param0: string): string;
				public static setInTestMode(): void;
				public static unpackLibraryAndDependencies(param0: string): java.io.File;
				public static makeLdLibraryPath(): string;
				public static loadLibrary(param0: string, param1: number): boolean;
				public static init(param0: globalAndroid.content.Context, param1: boolean): void;
				public static init(param0: globalAndroid.content.Context, param1: number): void;
				public static deinitForTest(): void;
				public static areSoSourcesAbisSupported(): boolean;
			}
			export module SoLoader {
				export class Api14Utils extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.soloader.SoLoader.Api14Utils>;
					public static getClassLoaderLdLoadLibrary(): string;
				}
				export class WrongAbiError extends java.lang.UnsatisfiedLinkError {
					public static class: java.lang.Class<com.facebook.soloader.SoLoader.WrongAbiError>;
				}
			}
		}
	}
}

//Generics information:
//com.facebook.flipper.plugins.common.RingBuffer:1
//com.facebook.flipper.plugins.databases.DatabaseDriver:1
//com.facebook.flipper.plugins.inspector.InspectorValue:1
//com.facebook.flipper.plugins.inspector.InspectorValue.Type:1
//com.facebook.flipper.plugins.inspector.Named:1
//com.facebook.flipper.plugins.inspector.NodeDescriptor:1
//com.facebook.flipper.plugins.inspector.SelfRegisteringNodeDescriptor:1
//com.facebook.flipper.plugins.inspector.descriptors.utils.EnumMapping:1
//com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.DialogFragmentAccessor:3
//com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentAccessor:2
//com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentActivityAccessor:2
//com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompat:4
//com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentCompat.FragmentManagerAccessorViaReflection:2
//com.facebook.flipper.plugins.inspector.descriptors.utils.stethocopies.FragmentManagerAccessor:2

