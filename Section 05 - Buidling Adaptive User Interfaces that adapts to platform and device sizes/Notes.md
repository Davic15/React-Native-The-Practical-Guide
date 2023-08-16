# Section 05 - Buidling Adaptive User Interfaces that adapts to platform and device sizes

## Module Introduction

    - Adaptive and responsive UIs.
    - Building Cross-Platforms & Device user Interfaces.
    - Execute Platform-specific code.
    - Adjust to Different Device Sizes.
    - In some Devices (old or small), the style is a bit broken, we need to adjust some styles to work in different devices (small and/or old).

## Setting Dynamic Widths

    - Setting maxWidth and/or minWidth, with a percentage number like 80%
        - When we set width: 80% it is always 80%.
        - When we set maxWidth it is up 80%, but it could be less if less space is needed.
        - The percentage is always in the parent container.

## Introducing the Dimensions API

    - When the fontSize is big in different screens
    - Dimensions API, we can get the widht and height.
        - Example: const deviceWidth = Dimensions.get('window').width;
        - We can use ternary expressions in our styles.

## Adjusting Image Sizes with the Dimensions API

    - The same than before, we can set using Dimensions API, in the width, height and borderRadius properties, or other.

## Understanding Screen Orientation Problems

    - The orientation is set in app.json, by default is portrait.
        - We can set default or landscape.
        - The default option allows us to change between portrait and landscape.

## Setting Sizes Dynamically (for different orientations)

    - One way to handle it is to use Dimensions.
        - We can use the height for the Dimensions.
        - If we switch this screen, it won't re-render.
    - Other way is to write in a responsive way.
        - Any code that controls the orientation device should be place inside the component function.
        - We can use the hook (react-native) useWindowDimensions.
        - It will re-render every time.
        - We should write the new style inside the JSX.

## Managing Screen Content with KeyboardAvoidingView

    - The Keyboard overlays in the app, in iOS we can't close but in Android we can.
    - It allows to scroll the screen and able to close it if we tap outside.

## Improving the Landscape mode UI

    - We can set a default view and another view for the landscape view.

## Further Improvements with useWindowDimensions

    - Work with useWindowDimensions to calculate the width and height.

## Writing Platform-specific Code with the Platform API

    - The Platform API allows us to detect the platform the application is running.
        - Platform.OS === 'android' ? 'yes' : 'false'
        - Platform.select({ ios: 0, android: 2 })
        - Write specific code for specific platforms, a component for Android and Other component for iOS.
        - React native will detect and use the correct component for different platforms.
        - Example: Title.android.js, Title.ios.js.
        - In every import we should delete the ios or android part.

## Styling the Status Bar

    - In the status bar component provided by Expo Go, we can change the color of it.
