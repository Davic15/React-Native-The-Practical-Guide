import { View } from 'react-native';
import { PlacesList } from '../components/Places/PlacesList';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { fetchPlaces } from '../util/database';

export const AllPlaces = ({ route }) => {
    const [loadedPlaces, setLoadedPlaces] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        async function loadedPlaces() {
            const places = await fetchPlaces();
            setLoadedPlaces(places);
        }
        if (isFocused) {
            loadedPlaces();
            //setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
        }
    }, [isFocused]);

    return <PlacesList places={loadedPlaces} />;
};
