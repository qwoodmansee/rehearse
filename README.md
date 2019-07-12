# rehearse [![Build Status](https://travis-ci.org/qwoodmansee/rehearse.svg?branch=master)](https://travis-ci.org/qwoodmansee/rehearse)
rehearse is an iOS/Android application used to practice difficult pieces of music to recordings, allowing users to speed up or slow down recordings and set practice points and loops. With an emphasis on a user-friendly experience, rehearse allows users to simply log in to their Google account and link to a Google Drive folder to source the audio and sheet music for their practice needs. If you lead an ensemble, you can set up one shared Google Drive for all your students to use. Alternatively, if you are a student, you can create your own Google Drive just for the songs you know you need to practice.

## Download
rehearse is currently under active development in an extremely early stage. Once core features are complete, you'll be able to find rehearse on the App Store and Play Store. Be sure to keep an eye on the repository for updates!

## Running Locally
Rehearse was built using React Native on top of the [Expo](https://expo.io/learn) toolset. You'll need an Android Simulator (we recommend downloading [Android Studio](https://developer.android.com/studio)) and/or an iOS Simulator (we recommend installing [XCode](https://developer.apple.com/xcode/)), but otherwise running the app locally is simple:

```bash
git clone https://github.com/qwoodmansee/rehearse.git
cd rehearse
expo start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. All code is required to be tested in a dedicated file, and all lint rules are strongly enforced for code style consistency. Standalone commits with details messages are always appreciated.

## Development Tools
This project includes multiple project tools which can be helpful while developing. [Expo](https://expo.io/learn) allows you to easily run simulators from your command line, and allows for changing to other frameworks relatively easily. If you need custom native modules for iOS and Android, consider [ejecting](https://docs.expo.io/versions/v33.0.0/expokit/eject/).

For testing, [Jest](https://jestjs.io/docs/en/getting-started) combined with [native-testing-library](https://www.native-testing-library.com/docs/example) has been chosen for an easy way to write maintanable tests, and should be familar to anyone who has worked with Kent Dodd's testing library.

[Component Driven Development](https://blog.hichroma.com/component-driven-development-ce1109d56c8e) is supported via the inclusion of [Storybook](https://storybook.js.org/docs/basics/introduction/). Try `yarn storybook` (you'll probably need to restart your simulator after this,) to see examples of components in a standalone environment. This tool can be extremely powerful for building up a component without necessarily worrying about the context of a page, or needing a fully active environment. Look to any file with the suffix `-stories` for an example of how easy they can be to set up.

## License
[MIT](https://choosealicense.com/licenses/mit/)
