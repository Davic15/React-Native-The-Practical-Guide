import { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { IconButton } from '../components/UI/IconButton';

export const Map = ({ navigation, route }) => {
    const initialLocation = route.params && {
        lat: route.params.initialLat,
        lon: route.params.initialLon,
    };

    const [selectedLocation, setSelectedLocation] = useState(initialLocation);

    const region = {
        latitude: initialLocation ? initialLocation.lat : 37.78,
        longitude: initialLocation ? initialLocation.lon : -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const selectLocationHandler = (event) => {
        if (initialLocation) {
            return;
        }
        const lat = event.nativeEvent.coordinate.latitude;
        const lon = event.nativeEvent.coordinate.longitude;

        setSelectedLocation({ lat: lat, lon: lon });
    };

    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation) {
            Alert.alert(
                'No location picked!',
                'You have to pick a location (by tapping on the map) first!'
            );
            return;
        }
        navigation.navigate('AddPlace', {
            pickedLat: selectedLocation.lat,
            pickedLon: selectedLocation.lon,
        });
    }, [navigation, selectedLocation]);

    useLayoutEffect(() => {
        if (initialLocation) {
            return;
        }
        navigation.setOptions({
            headerRight: ({ tintColor }) => {
                return (
                    <IconButton
                        icon='save'
                        size={24}
                        color={tintColor}
                        onPress={savePickedLocationHandler}
                    />
                );
            },
        });
    }, [navigation, savePickedLocationHandler, initialLocation]);

    return (
        <MapView
            style={styles.map}
            initialRegion={region}
            onPress={selectLocationHandler}
        >
            {selectedLocation && (
                <Marker
                    title='Picked Location'
                    coordinate={{
                        latitude: selectedLocation.lat,
                        longitude: selectedLocation.lon,
                    }}
                />
            )}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});
