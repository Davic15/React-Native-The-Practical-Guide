# Section 06 - React Native with React Navigation [Meals app]

## Module Introduction

    - React Native Apps and Navigation.
    - Navigating between screens.
    - What is navigation?.
    - Using stack navigation.
    - Drawers and Tabs

## What is navigation

    - Navigation means moving to one screen to another one.
    - There are no a simple way to go back to the screen before.
    - In Mobile we don't have an url, we can just move tapping buttons to move between screens.

## Getting Started with the App and Outputting meal Categories

    - Displaying Data.

## Displaying Items in a Grid

    - We can specify the number of columns as a property inside the FlatList.
    - On iOS we need to add background color to add shadows.
    - When we click we need to see the icon clicked, so we can add android_ripple, for iOS we need to write the styles, but using a callback function

## Getting started with the React Navigation Package

    - No states to control screens.
    - React navigation is the package for Expo Go and React Native Apps.
        - Install even the extra packages.
    - It starts in the App component, wrap all there with NavigationContainer.
        - Use a Navigator, that it has a different navigation behavior.
    - Use the function createNativeStackNavigator to move between screens.

## Implementing Navigation Between Two Screens

    - Moving between components when we click them.
    - We can add a props (navigation) to the components that are screens to move between them.

## Understanding the useNavigation Hook

    - The default animation is the system animation.
    - The native stack package uses the native behavior of the system.
        - The stack emulates the behavior.
    - To send data, we can use it inside the hook.

## Displaying Meals

    - Creating the JSX code to display data.

## Adding Images and Styling

    - Styling the image.
        - Images should have the width and height.

## Styling Screen Headers and Backgrounds

    - We can set styling option in the Navigator, to set styles in different screens.

## Setting Navigation Options Dynamically

    - We can use useLayoutEffect.
