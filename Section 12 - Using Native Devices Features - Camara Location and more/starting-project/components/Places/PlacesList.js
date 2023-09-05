import { FlatList, View, Text, StyleSheet } from 'react-native';
import { PlaceItem } from './PlaceItem';
import { Colors } from '../../constants/colors';

export const PlacesList = ({ places }) => {
    if (!places || places.length === 0) {
        return (
            <View style={style.fallbackContainer}>
                <Text style={style.fallbackText}>
                    No places added yet - start adding some
                </Text>
            </View>
        );
    }
    return (
        <FlatList
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PlaceItem place={item} />}
        />
    );
};

const style = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackText: {
        fontSize: 16,
        color: Colors.primary200,
    },
});
