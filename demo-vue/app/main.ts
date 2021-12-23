import Vue from 'nativescript-vue';

import { Client } from '@nativescript-community/flipper';
import ImageVuePlugin  from '@nativescript-community/ui-image/vue';
import {initialize}  from '@nativescript-community/ui-image';

Vue.use(ImageVuePlugin);
const client  = new Client();
client.start({
    plugins:['layout', 'network', 'prefs', 'crash', 'database', 'leakCanary', 'image']
});
// make sure to call it after client.start
initialize();
import Home from './views/Home';
new Vue({
    render: h => {
        return h('frame', [h(Home)]);
    }
}).$start();
