import { StyleSheet, Alert, View, Image, Text } from 'react-native';
import {
    getCurrentPositionAsync,
    useForegroundPermissions,
    PermissionStatus,
} from 'expo-location';
import { OutlinedButton } from '../UI/OutlinedButton';
import { Colors } from '../../constants/colors';
import { useEffect, useState } from 'react';
import { getAddress, getMapPreview } from '../../util/location';
import {
    useNavigation,
    useRoute,
    useIsFocused,
} from '@react-navigation/native';

export const LocationPicker = ({ onPickLocation }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const isFocused = useIsFocused();
    const [pickedLocation, setPickedLocation] = useState();
    const [locationPermissionInformation, requestPermission] =
        useForegroundPermissions();

    useEffect(() => {
        if (isFocused && route.params) {
            const mapPickedLocation = {
                lat: route.params.pickedLat,
                lon: route.params.pickedLon,
            };
            setPickedLocation(mapPickedLocation);
        }
    }, [route, isFocused]);

    useEffect(() => {
        const handleLocation = async () => {
            if (pickedLocation) {
                const address = await getAddress(
                    pickedLocation.lat,
                    pickedLocation.lon
                );
                onPickLocation({ ...pickedLocation, address: address });
            }
        };
        handleLocation();
    }, [pickedLocation, onPickLocation]);

    const verifyPermissions = async () => {
        if (
            locationPermissionInformation.status ===
            PermissionStatus.UNDETERMINED
        ) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permissions!',
                'You need to grant location permissions to use this app.'
            );
            return false;
        }

        return true;
    };

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        const location = await getCurrentPositionAsync();
        setPickedLocation({
            lat: location.coords.latitude,
            lon: location.coords.longitude,
        });
    };

    const pickOnMapHandler = () => {
        navigation.navigate('Map');
    };

    let locationPreview = <Text>No location picked yet.</Text>;

    if (pickedLocation) {
        locationPreview = (
            <Image
                style={styles.image}
                source={{
                    uri: getMapPreview(pickedLocation.lat, pickedLocation.lon),
                }}
            />
        );
    }

    return (
        <View>
            <View style={styles.mapPreview}>{locationPreview}</View>
            <View style={styles.actions}>
                <OutlinedButton icon='location' onPress={getLocationHandler}>
                    Locate User
                </OutlinedButton>
                <OutlinedButton icon='map' onPress={pickOnMapHandler}>
                    Pick on Map
                </OutlinedButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden',
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 4,
    },
});
