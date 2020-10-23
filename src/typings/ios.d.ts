
interface FKTextSearchable extends NSObjectProtocol {

	searchableText(): string;
}
declare var FKTextSearchable: {

	prototype: FKTextSearchable;
};

declare class FKUserDefaultsPlugin extends NSObject implements FlipperPlugin {

	static alloc(): FKUserDefaultsPlugin; // inherited from NSObject

	static new(): FKUserDefaultsPlugin; // inherited from NSObject

	constructor(o: { suiteName: string; });

	didConnect(connection: FlipperConnection): void;

	didDisconnect(): void;

	identifier(): string;

	initWithSuiteName(suiteName: string): this;

	runInBackground(): boolean;
}

declare class FlipperClient extends NSObject {

	static alloc(): FlipperClient; // inherited from NSObject

	static new(): FlipperClient; // inherited from NSObject

	static sharedClient(): FlipperClient;

	addPlugin(plugin: NSObject): void;

	getState(): string;

	getStateElements(): NSArray<NSDictionary<any, any>>;

	pluginWithIdentifier(identifier: string): NSObject;

	removePlugin(plugin: NSObject): void;

	start(): void;

	stop(): void;

	subscribeForUpdates(controller: FlipperStateUpdateListener): void;
}

interface FlipperConnection {

	errorWithMessageStackTrace(message: string, stacktrace: string): void;

	receiveWithBlock(method: string, receiver: (p1: NSDictionary<any, any>, p2: FlipperResponder) => void): void;

	sendWithParams(method: string, params: NSDictionary<any, any>): void;
}
declare var FlipperConnection: {

	prototype: FlipperConnection;
};

declare class FlipperDiagnosticsViewController extends UIViewController implements FlipperStateUpdateListener {

	static alloc(): FlipperDiagnosticsViewController; // inherited from NSObject

	static new(): FlipperDiagnosticsViewController; // inherited from NSObject

	logLabel: UILabel;

	scrollView: UIScrollView;

	stateLabel: UILabel;

	stateTable: UITableView;

	tableDataSource: StateTableDataSource;

	onUpdate(): void;
}

declare class FlipperKitLayoutComponentKitSupport extends NSObject {

	static alloc(): FlipperKitLayoutComponentKitSupport; // inherited from NSObject

	static new(): FlipperKitLayoutComponentKitSupport; // inherited from NSObject

	static setUpWithDescriptorMapper(mapper: SKDescriptorMapper): void;
}

declare class FlipperKitLayoutPlugin extends NSObject implements FlipperPlugin, SKInvalidationDelegate {

	static alloc(): FlipperKitLayoutPlugin; // inherited from NSObject

	static new(): FlipperKitLayoutPlugin; // inherited from NSObject

	readonly descriptorMapper: SKDescriptorMapper;

	constructor(o: { rootNode: NSObjectProtocol; withDescriptorMapper: SKDescriptorMapper; });

	constructor(o: { rootNode: NSObjectProtocol; withTapListener: SKTapListener; withDescriptorMapper: SKDescriptorMapper; });

	didConnect(connection: FlipperConnection): void;

	didDisconnect(): void;

	identifier(): string;

	initWithRootNodeWithDescriptorMapper(rootNode: NSObjectProtocol, mapper: SKDescriptorMapper): this;

	initWithRootNodeWithTapListenerWithDescriptorMapper(rootNode: NSObjectProtocol, tapListener: SKTapListener, mapper: SKDescriptorMapper): this;

	invalidateNode(node: NSObjectProtocol): void;

	runInBackground(): boolean;

	updateNodeReference(node: NSObjectProtocol): void;
}

declare class FlipperKitNetworkPlugin extends SKBufferingPlugin implements SKNetworkReporterDelegate {

	static alloc(): FlipperKitNetworkPlugin; // inherited from NSObject

	static new(): FlipperKitNetworkPlugin; // inherited from NSObject

	adapter: SKNetworkAdapterDelegate;

	constructor(o: { networkAdapter: SKNetworkAdapterDelegate; });

	constructor(o: { networkAdapter: SKNetworkAdapterDelegate; queue: NSObject; });

	didObserveRequest(request: SKRequestInfo): void;

	didObserveResponse(response: SKResponseInfo): void;

	initWithNetworkAdapter(adapter: SKNetworkAdapterDelegate): this;

	initWithNetworkAdapterQueue(adapter: SKNetworkAdapterDelegate, queue: NSObject): this;
}

declare var FlipperKitVersionNumber: number;

declare var FlipperKitVersionString: interop.Reference<number>;

declare function FlipperPerformBlockOnMainThread(block: () => void, responder: FlipperResponder): void;

interface FlipperPlugin {

	didConnect(connection: FlipperConnection): void;

	didDisconnect(): void;

	identifier(): string;

	runInBackground?(): boolean;
}
declare var FlipperPlugin: {

	prototype: FlipperPlugin;
};

interface FlipperResponder {

	error(response: NSDictionary<any, any>): void;

	success(response: NSDictionary<any, any>): void;
}
declare var FlipperResponder: {

	prototype: FlipperResponder;
};

interface FlipperStateUpdateListener {

	onUpdate(): void;
}
declare var FlipperStateUpdateListener: {

	prototype: FlipperStateUpdateListener;
};

declare class SKBufferingPlugin extends NSObject implements FlipperPlugin {

	static alloc(): SKBufferingPlugin; // inherited from NSObject

	static new(): SKBufferingPlugin; // inherited from NSObject

	constructor(o: { queue: NSObject; });

	didConnect(connection: FlipperConnection): void;

	didDisconnect(): void;

	identifier(): string;

	initWithQueue(queue: NSObject): this;

	runInBackground(): boolean;

	sendSonarObject(method: string, sonarObject: NSDictionary<string, any>): void;
}

declare class SKDescriptorMapper extends NSObject {

	static alloc(): SKDescriptorMapper; // inherited from NSObject

	static new(): SKDescriptorMapper; // inherited from NSObject

	constructor(o: { defaults: void; });

	initWithDefaults(): this;
}

declare class SKHighlightOverlay extends NSObject {

	static alloc(): SKHighlightOverlay; // inherited from NSObject

	static new(): SKHighlightOverlay; // inherited from NSObject

	static overlayColor(): UIColor;

	static sharedInstance(): SKHighlightOverlay;

	mountInViewWithFrame(view: UIView, frame: CGRect): void;

	unmount(): void;
}

declare class SKIOSNetworkAdapter extends NSObject implements SKNetworkAdapterDelegate {

	static alloc(): SKIOSNetworkAdapter; // inherited from NSObject

	static new(): SKIOSNetworkAdapter; // inherited from NSObject

	delegate: SKNetworkReporterDelegate; // inherited from SKNetworkAdapterDelegate
}

declare class SKInvalidation extends NSObject {

	static alloc(): SKInvalidation; // inherited from NSObject

	static enableInvalidations(): void;

	static new(): SKInvalidation; // inherited from NSObject

	static sharedInstance(): SKInvalidation;

	delegate: SKInvalidationDelegate;
}

interface SKInvalidationDelegate {

	invalidateNode(node: NSObjectProtocol): void;

	updateNodeReference(node: NSObjectProtocol): void;
}
declare var SKInvalidationDelegate: {

	prototype: SKInvalidationDelegate;
};

declare function SKLayoutPluginSerialBackgroundQueue(): NSObject;

interface SKNetworkAdapterDelegate {

	delegate: SKNetworkReporterDelegate;
}
declare var SKNetworkAdapterDelegate: {

	prototype: SKNetworkAdapterDelegate;
};

interface SKNetworkReporterDelegate {

	didObserveRequest(request: SKRequestInfo): void;

	didObserveResponse(response: SKResponseInfo): void;
}
declare var SKNetworkReporterDelegate: {

	prototype: SKNetworkReporterDelegate;
};

declare class SKRequestInfo extends NSObject {

	static alloc(): SKRequestInfo; // inherited from NSObject

	static new(): SKRequestInfo; // inherited from NSObject

	body: string;

	identifier: number;

	request: NSURLRequest;

	timestamp: number;

	constructor(o: { identifier: number; timestamp: number; request: NSURLRequest; data: NSData; });

	initWithIdentifierTimestampRequestData(identifier: number, timestamp: number, request: NSURLRequest, data: NSData): this;

	setBodyFromData(data: NSData): void;
}

declare class SKResponseInfo extends NSObject {

	static alloc(): SKResponseInfo; // inherited from NSObject

	static new(): SKResponseInfo; // inherited from NSObject

	body: string;

	identifier: number;

	response: NSURLResponse;

	timestamp: number;

	constructor(o: { indentifier: number; timestamp: number; response: NSURLResponse; data: NSData; });

	initWithIndentifierTimestampResponseData(identifier: number, timestamp: number, response: NSURLResponse, data: NSData): this;

	setBodyFromData(data: NSData): void;
}

interface SKTapListener {

	isMounted: boolean;

	listenForTapWithBlock(receiver: (p1: CGPoint) => void): void;

	mountWithFrame(frame: CGRect): void;

	unmount(): void;
}
declare var SKTapListener: {

	prototype: SKTapListener;
};

declare class StateTableDataSource extends NSObject implements UITableViewDataSource {

	static alloc(): StateTableDataSource; // inherited from NSObject

	static new(): StateTableDataSource; // inherited from NSObject

	elements: NSArray<NSDictionary<any, any>>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;
}
