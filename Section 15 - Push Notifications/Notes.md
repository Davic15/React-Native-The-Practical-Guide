# Section 15 - Push Notifications

## Module Introduction

## What are (Local) Notifications?

    - Notifications that are triggered by the installed app, for the local device.
        - Not sent to any other users or devices.
        - Notifications are scheduled, delivered and handled on the same device (no server involved).
        - Example: Reminder, Alarm clock, To-do, etc.

## Understanding Push Notifications

    - Data might be sent to a custom backend (e.g. to store it in a database). This is not required to integrate push notifications though!.
    - Your app
        - Some event (e.g. Chat message sent).
        - Notification (Your App on another device).
    - Your app can't (directly) send notifications to other devices.
    - Push notification Server (e.g. provided by Expo).
