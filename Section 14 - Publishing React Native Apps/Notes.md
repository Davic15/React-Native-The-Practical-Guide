# Section 14 - Publishing React Native Apps

## Module Introduction

    - From Development to Production.
    - Configurin for production.
    - Icons and splash screens.
    - Build Process in Action.

## Publishing Apps: An Overview

    - Google Play Store or iOS Store.
    - With Expo (Managed or Bare Workflow).
        - Configure the project.
        - Build App binaries with Expo's Cloud Service.
            - Advantage: No local resource used and you can build for all target platforms.
        - Submit to App Stores.

    - Without Expo.
        - Configure the project.
        - Build App Binaries Locally.
        - Submit to App Stores.

## Key Configuration Items and Considerations

    - Configuring for production.
        - Permissions.
            - Android: Control permissions requsted and shown in app store.
            - iOS: Define permission request text snippets.
        - App Name and Identifier.
            - Set the visible app name, and app version and a unique app identifier (ID).
        - Environment Variables.
            - Store app-wide variables securely (e.g, API keys).
        - Icons and splash screen
            - Configure and generate fitting icons and loading screens.

## Configuring App Names and Version

    - Expo Application Services (EAS).
    - Check the app.json file.

## A Quick Note about environment variables

    - For API Keys or routes.

## Adding Icons and a Splash screen

    - The basic ones are stored in the assets folder, but we can make them too.

## Building Expo Apps with EAS

    - Create an Expo Account for free to use their services.
    - Target platform (iOS and/or Android).
    - Fill with some data, and after that we will get a link, to download our apk file.
    - The preview is fine for test and simulators, but the production is the one that is fine for Google Play Store.
