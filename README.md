[![npm](https://img.shields.io/npm/v/@nativescript-community/flipper.svg)](https://www.npmjs.com/package/@nativescript-community/flipper)
[![npm](https://img.shields.io/npm/dt/@nativescript-community/flipper.svg?label=npm%20downloads)](https://www.npmjs.com/package/@nativescript-community/flipper)
[![GitHub forks](https://img.shields.io/github/forks/@nativescript-community/flipper.svg)](https://github.com/@nativescript-community/flipper/network)
[![GitHub stars](https://img.shields.io/github/stars/@nativescript-community/flipper.svg)](https://github.com/@nativescript-community/flipper/stargazers)

## Installation

-   `tns plugin add @nativescript-community/flipper`

Be sure to run a new build after adding plugins to avoid any issues.

---

### Usage

```typescript
import { Client } from '@nativescript-community/flipper';
const flipper = new Client();
flipper.start({
    plugins: ['inspector', 'network', 'prefs'],
});
```
