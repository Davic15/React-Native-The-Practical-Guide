# What is React Native?

    - Related to React.js
    - It helps us to write React Native (Real Native Mobile Apps), for Android and iOS.
    - Can we distributed by the market.
    - React.js is a JavaScript library for building user Interfaces.
        - Typically used for web development.
        - But it's actually react-dom that adds web support.
        - Ract itself is platform-agnostic.
    - React Native is a collection of "special" React components.
        - Components are compiled to native UI elements.
        - Native platform APIs exposed to JavaScript.
        - React Native is like react-dom: it "connects" React to a specific platform.

## A Glance Under the Hood of React Native

    - React + React Native App
        - The code is similar to React.js (components, arrow functions, etc).
        - It is compiled to React Native App.
        - We have new Components like "View" and "Text"
        - "Views" are compiled (i.e. the JSX code / components - not the JavaScript logic).
        - React Native maps (and compiles) re-usable components to respective platform equivalents.
    - What about the Logic?
        - UI Elements (components exposed by React Native), compiled to native views.
        - Logic (written by us in JavaScript), It runs in a JavaScript thread, hosted by React Native (in the app), NOT Compiled.

## Creating React Native Projects: Expo CLI vs React Native CLI

    - Expo CLI ("Expo")
        - Third party service (free).
        - Managed app development.
        - Very convenient, less friction.
        - You can leave the Expo ecosystem any time, you can switch "eject" any time.

    - React Native CLI
        - By the React Native Team and Community.
        - Bare-bone development (you need to set up way more).
        - Less convenience features.
        - Easier integration with native source code.

## Analyzing the Created Project

    - Assets folder: Contains assets (images, file, videos, etc).
    - package.json: The same than React.js.
    - babel.config.js: Compile to JavaScript.
    - app.json: Configuration file for our application.
    - App.js: The main file that we will work on, it is a regular component with the same structure (more or less).
    * The structure is similar to React.js

## Running our First App on a Real Device!

    - Check Expo Go in the market.
    - Type npm start in the terminal, it will generate a QRCode.
    - Scan the Code in your Expo Go application in your mobile device.
    - The Application will run in the device.

## Setting Up A Local Development Environment

    - A simulator can be installed for Android or iOS.
    - For Android we can install Android Studio.
        - Create an Android Virtual Device (AVD).
    - For iOS, we need a MAC otherwise we can't run or deploy applications for iOS.
