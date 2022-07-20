import { StyleSheet, Platform } from 'react-native';
import { Colors } from '../../styles.js'

export const styles = StyleSheet.create({
    container: {
        alignSelf: Platform.OS === 'web' && 'center',
        alignItems: 'center',
        height: '100%',
        paddingTop: 50,
        width: Platform.OS === 'web' ? '40%' : '100%',
    },

    header: {
        color: Colors.blue,
        fontSize: 25,
        fontWeight: 'bold',
    }
})