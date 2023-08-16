# Section 04 - Diving Deeper into Components Layouts and Styling - Building a Mini Game App

## Module Introduction

    - Build a Complete Demo App (Guess my number Game).
    - New Core components.
    - Complex Layouts and Styles.

## Starting Setup & Analyzing the Target App

    - The basic structure of the project, install dependencies and run into the emulator.

## Setting up our screen components

    - We can switch screens.
    - In the screen folder, as the name said it is for screens.
        - The screen is just a React Component, nothing special.

## Creating custom buttons

    - A Button (core component in React Native), it is a combination of View and Text core components.
    - It should accpet props, and props.children.

## Styling for Android and iOS

    - The same than before.
    - marginHorizontal = left and right.
    - elevation is to create a box-shadow, it only works with Android
    - In iOS we need other properties, like shadowColor, shadowOffset, shadowRadius and shadowOpacity.

## Styling the "Number Input" Element

    - Styling the input for numbers.
    - marginVertical = up and down margin.
    - maxLength={2} for the maximum value in the input.

## Configuring the TextInput Field

    - Another prop for the input (and the Keyboard) is keyboardType and it displays a numeric keyboard.
        - keyboardType="number-pad"
    - The prop autoCapitalize we can avoid a text that is capitalize.
    - The prop autoCorrect enables auto correct.

## Adding visual feedback to the buttons

    - Some visual feedback, can be achived with android_ripple and setting a color.
        - The android_ripple should be tweaked, because sometimes some effect are not set properly.
        - For example, setting a View outside and a Pressable component inside.
    - We can write style objects or we can write an array of style objects.

## Improving the Buttons

    - The props sometimes needs booleans or numbers and those should be passed using {false}, {2}, etc.
    - To add some extra effects, we can wrap them inside a View and create different View to achieve our goals.

## Coloring the Components & The Overall App

    - All the screens will end in the same component, the App component.
    - The View component takes as much space as it needs, not the whole screen.
    - With flex: 1, it takes the whole space.

## Adding a Linear Gradient

    - Expo Go provides an installer (expo install), and we can install the package for the linear gradient.
    - LinearGradient accepts an array of colors.

## Adding a Background Image

    - We can get it with ImageBackground component.
    - Check the documentation for it.

## Getting started with the Game Logic

    - Setting the states.

## Handling user input and Showing an Alert Dialog

    - React Native can displays Alert using an API.
        - Title, Message (to use the Alert) and the buttons to be displayed.

## Switching screens programmatically

    - For now no extra dependencies, but later we will use third party libraries.
    - We are switching between screens with a state.

## Starting work on the Game Screen

    - In the new screen we will have a log with the guesses of the opponent.
    - Save area view component.

## Respecting device screen restrictions with the SafeAreaView

    - A component can detect the devide and avoid the notch at the top.

## Creating a Title component

    - Changing the location of the title, into a new component.

## Managing Colors Globally

    - CSS variables are not available in React Native.
    - A file can be create with an object and create there all the colors we want to use.

## Creating, using and Displaying Random Numbers

    - The function is created.
    - A title component was created.

## Adding Game Control Buttons + and - to the App

    - Adding some extra logic for the game.

## Checking for Game Over

    - We need to compare if both numbers are equal, the typed number and the guessed number.

## Improving the Game Screen Visuals

    - Adding some CSS, to modify the layout.

## Using "Cascading Styles"

    - No Cascading Style and no inheritance.
    - We can share or pass styles via props.
    - It should be an array, and it is evaluated from left to right.

## Working with Icons (Button Icons)

    - Expo Go brings a library with icons, ready to be used.
    - The icon are Ionicons.

## Adding & using custom fonts with React Native Apps

    - Custom fonts can be loaded with an extra package.
        - The extra package is: expo install expo-font.
        - It is a React hook, that helps us to load fonts.

        - Another package is: expo install expo-app-loading.
        - It provides a splash screen (loading screen) till a condition is met.

## Adding a (Foreground) Image

    - The percentages are placed in the container of the image, it means in the image.

## Using and styling nested text

    - Text component can contain other Text components.
    - We can style the inner Text component as we want.

## Adding logic to Re-start games and displaying summary

    - A new button when the game ends.

## Logging Game Rounds

    - The implementation is with FlatList.

## Outputting Log Data with FlatList

    - Added FlatList.

## Styling The Game Round Logs

    - An extra component with the list.

## Finishing Touches

    - Adding some extra styles.
