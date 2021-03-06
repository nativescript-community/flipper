/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="../src/references.d.ts" />
/// <reference path="./vue.shim.d.ts" />

// typings/custom.d.ts
declare module "nativescript-worker-loader!*" {
    const content: any;
    export = content;
  }

  declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
  }