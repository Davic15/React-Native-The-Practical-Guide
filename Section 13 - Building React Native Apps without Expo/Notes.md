# Section 13 - Building React Native Apps without Expo

## Module Introduction

## How does Expo work?

    - Expo Go App
        - Shared native runtime.
    - App development
        - Your Codigo.
    - All loaded into Expo client app (Expo Go).

    - You don't build real app executables during development.
        - Instead, your source code is injected into the Expo Go client app (and executed there).
        - We can still build and publish standalone apps though!.
    - Use EAS Build Service.
        - During development.
            - Move fast with expo go app.
            - Shared runtime loads your code and reflects changes instantly.
        - For production
            - Build lean, independent standalone apps that don't need Expo go.

## Expo Alternatives

    - Expo 'Managed Workflow' (Used in this course).
        - Easy to set up and work with.
        - Quick and frictionless development.
        - No or very little configuration required.
        - You can build (cross-platform) standalone apps.

    - Expo 'Bare Workflow'.
        - Relative easy to set up and work with.
        - Convenient development.
        - Some configuration requried.
        - You can build (cross-platform) standalone apps.

        - When we create our app, should be Expo Bare Workflow.
            - We have two folders, Android and iOS.
        - To change to Bare Workflow, we need to write expo eject.

    - React Native CLI.
        - More complex setup.
        - Convenient development.
        - Can require more configuration effort.
        - Standalone apps are built locally.

        - We can change into Bare Workflow.
