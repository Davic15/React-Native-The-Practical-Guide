import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Platform, StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export default function App() {
    useEffect(() => {
        async function configurePushNotifications() {
            const { status } = await Notifications.getPermissionsAsync();
            let finalStatus = status;
            if (finalStatus !== 'granted') {
                const { status } =
                    await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }

            if (finalStatus !== 'granted') {
                Alert.alert(
                    'Permission required',
                    'Push notification need the appropriate permissions.'
                );
                return;
            }
            const pushTokenData = await Notifications.getExpoPushTokenAsync();
            console.log(pushTokenData);
        }
        configurePushNotifications();
        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.DEFAULT,
            });
        }
    }, []);

    useEffect(() => {
        const subscriptionOne = Notifications.addNotificationReceivedListener(
            (notification) => {
                console.log('Notification received');
                console.log(notification);
                const userName = notification.request.content.data.userName;
                console.log(userName);
            }
        );

        const subscriptionTwo =
            Notifications.addNotificationResponseReceivedListener(
                (response) => {
                    console.log('Notification response received');
                    console.log(response);
                    const userName =
                        response.notification.request.content.data.userName;
                    console.log(userName);
                }
            );
        return () => {
            subscriptionOne.remove();
            subscriptionTwo.remove();
        };
    }, []);

    async function scheduleNotificationHandler() {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "You've got mail! 📬",
                body: 'Here is the notification body',
                data: { userName: 'David' },
            },
            trigger: { seconds: 2 },
        });
    }

    return (
        <View style={styles.container}>
            <Button
                title='Schedule Notification'
                onPress={scheduleNotificationHandler}
            />
            <Text>Hello World!!!!</Text>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
