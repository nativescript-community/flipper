import { getImage } from '@nativescript/core/http';
import { request } from '@nativescript-community/https';

export default {
    name: 'Home',
    template: `
    <Page>
      <ActionBar title="Bugsnag Demo">
      </ActionBar>
      <StackLayout>
        <Button text="logToConsole" @tap="logToConsole"/>
        <Button text="httpTest" @tap="httpTest"/>
        <Button text="imageTest" @tap="imageTest"/>
        <NSImg ref="imgView" height="100" width="100%"/>
      </StackLayout>
    </Page>
    `,
    methods: {
        logToConsole() {
            console.log('logToConsole')
        },
        async httpTest() {
          const result = await request({method:'GET', url: 'https://i.ytimg.com/vi/BsPyGUNp0Xs/maxresdefault.jpg', useLegacy: true});
          console.log('httpTest done1', result);
            
        },
        imageTest() {
          this.$refs.imgView.nativeView.src = 'https://i.ytimg.com/vi/BsPyGUNp0Xs/maxresdefault.jpg';
        }
    }
};
