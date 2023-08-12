# Section 02 - React Native Basics [Course Goals App]

## Module Introduction

    - Diving into the core concepts.
    - Using React Native Components & Building UIs.
    - Styling React Native Apps.
    - Adding Interactivity & Managing State.

## Exploring Core Components & Component Styling

    - Functional React Componets, and Hooks.
    - The component App has:
        - Styles.
        - Expo import.
        - Text and View are the most important component that React Native gives us.
        - div => View
        - input => Text
    - Core Components (Built into React Native).
        - "Translation" to native UI widgets is provided by React Native.
    - Your UI and custom components.
        - Combination of "Core" components and other built-in components.
    - Styling React Nativ Apps.
        - There is no CSS!.
        - But we can use, inline Styles and / or StyleSheet Objects.
        - Written in JavaScript (i.e. in the JavaScript code files, next to the component code).
        - Based on CSS syntax, but only a subset of properties & features is supported!.
    - App is the root component, and it will run first.

## Working with core components

    - No text inside a View. View create a container and it can hold other components or elements.
    - To display text we need to use the Text component.
    - In Web we have sections, article, etc, but here we can just have View.
    - To use buttons we need to import them.
        - The button is self-closing tag, and the it has an attribute named title to write the text to display on it.

## Styling React Native Apps

    - There is no CSS!.
        - Inline Styles.
        - StyleSheet Objects.
    - Writing in JavaScript.
    - We don't need to write pixels.
        - Example: margin: 16

## React Native: Core Components, Styling and Colors - More Information

    - Check the official documentation.

## Exploring Layouts and Flexbox

    - We can create our App like a normal web, even we can use Flexbox.

## React Native & Flexbox

    - Layouts are (typically) created with Flexbox.
    - Very similar to browser CSS flexbox.
    - Elements are positioned inside of containers.
    - Positioning is controlled via style setting applied to the element containter.
    - Flexbox is about to axis, X and Y.
        - flexDirection, justifyContent, alignItems, etc.

## Using Flexbox to create layouts

    - We can control the layout with flex.
    - Percentage is allow but it should be wrapped between ''.
        - Example: width: '80%'

## Flexbox - A deep dive

    - In React Native flexbox is activated by default and the flexDirection is set to colum.
    - Flexbox is the same than normal CSS, but some small details are there.

## Improving the Layout

    - Button has no styles, it doesn't support styles.

## Handling Events

    - We can add events, like a normal React app, for different containers or components.
    - For text we have onChangeText, for buttons we have onPress.

## Managing A list of Course Goals (in our demo app)

    - To use hooks is the same than React.
    - The JavaScript is the same than normal React.

## iOS and Android Styling Differences

    - Some styles are applied in Android and not in iOS, and viceversa.
    - React Native, allows to write the same code base, for different platforms, but some styles are not applied.
    - For example, in Android some elements can be have the corners rounded, but in iOS no, but we can change it.
    - To work around, we can wrap our element into an element that can be rounded.
    - Styles cannot cascade as normal CSS.
    - It is the same CSS (in some stuffs), but it is not cascading, and we need to find a tweak to work around.

## Making Content Scrollable with ScrollView

    - View component is not scrollable.
    - In some cases we can wrap the ScrollView into a View to control the space and set the styles inside the View.
    - In the official documentation, there are some sections for Android and iOS, we can use them depending of the app we are building.

## Optimizing Lists with FlatList

    - For list ScrollView is not a good solution, because ScrollView renders all the child even if they dont fit in the screen.
        - Performance problems, and it will slow down.
    - It renders item in a lazy way, it means, when the user is getting to that item, it will be render.
    - FlatList gets two parameters, data={the data to render}, renderItem={Function to render the data}.
    - To add keys with FlatList are two ways:
        - One is automatically with the key property if we provided it.
        - Second one is to using a props that gets a function, that get two parameters (item and index) and return the id.
    - We should use FlatList to display a big set of data.

## Spliting components into smaller components

    - The same idea as React.js for web.
    - We can create components, and import and export them as we want, to be reusable.

## Utilizing Props

    - The same idea as React.js.

## Working on the "Goal Input" Component

    - The same idea as React.js.

## Handling Taps with the Pressable Component

    - To make a component pressable, we need to wrap the component, to tell React Native, that component is pressable.

## Making items deletable and using IDs

    - The same than React.js and vanilla JavaScript.

## Adding an Android Ripple Effect and an iOS Alternative

    - An Effect when the button is clicked.
    - For Android we can add android_ripple={{color: '#ddd'}} in the Pressable container.
    - For iOS is different, we need a different approach, like add a state to control when the button is clicked or not.

## Adding a modal Screen

    - The modal is included in React Native.
    - It should use a state.
    - Modal contains the visible and type of animation attributes.

## App Finishing Touches

    - We can add a main color in the app.json file.
    - The status bar at the top keeps the color of the application, we can change it with the component StatusBar provided by Expo Go.

## Module Summary

    - First basic application.
    - We should use Built-in components provided by React Native.
    - Styling is based in nested objects, like JavaScript objects.
        - It is not CSS, it is JavaScript, that React Native change into native styles instructions.
    - Rounded corners, can be handle with some tweaks, and we are deploying to two platforms (Android and iOS).
    - React Native is the same than React.js.
    - The diferences are minimal and in some different components.
