import { getImage } from '@nativescript/core/http';

export default {
    name: 'Home',
    template: `
    <Page>
      <ActionBar title="Bugsnag Demo">
      </ActionBar>
      <StackLayout>
        <Button text="logToConsole" @tap="logToConsole"/>
        <Button text="httpTest" @tap="httpTest"/>
      </StackLayout>
    </Page>
    `,
    methods: {
        logToConsole() {
            console.log('logToConsole')
        },
        httpTest() {
            getImage('https://i.ytimg.com/vi/BsPyGUNp0Xs/maxresdefault.jpg');
        }
    }
};
