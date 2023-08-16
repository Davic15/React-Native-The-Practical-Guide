import { View, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../constants/colors';

export const Card = ({ children }) => {
    return <View style={styles.card}>{children}</View>;
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        // Shadow for Android (box-shadow)
        elevation: 4,

        // Shadow for iPhone (box-shadow)
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});
