import { Platform, StyleSheet } from 'react-native';

export const Colors = {
    blue: `#425dd6`,
}

export const globalStyles = StyleSheet.create({
    editLinkContainer: {
        borderColor: '#aaaaaa',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15,
        marginBottom: 10,
    },

    fieldHeader: {
        color: '#aaaaaa',
        fontFamily: 'Helvetica',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    fieldText: {
        fontFamily: 'Helvetica',
        fontSize: 12,
        fontWeight: 'bold',
    },

    updateButton: {
        alignItems: 'center',
        backgroundColor: 'black',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        padding: 20,
        marginTop: 40,
        width: '85%',
    },

    editPageContainer: {
        height: '100%',
        width: Platform.OS === 'web' ? '40%' : '100%',
        alignSelf: 'center',
    },

    editPageHeader: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    },

    editPageInputView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        width: '100%',
    },

    editPageInputContainer: {
        borderColor: '#e5e5e5', 
        borderWidth: 2,
        marginTop: 30, 
        padding: 10,
        width: '100%',
    },

    inputHeader: {
        color: '#aaaaaa',
        fontWeight: 'bold'
    },

    inputValue: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5, 
    },

    invalidInput: {
        color: 'red'
    }
})
