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
        marginBottom: 10,
        paddingBottom: 15,
    },

    editPageContainer: {
        alignSelf: 'center',
        height: '100%',
        marginTop: Platform.OS === 'web' ? 40 : 0,
        width: Platform.OS === 'web' ? '40%' : '100%',
    },

    editPageHeader: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    },

    editPageInputContainer: {
        borderColor: '#e5e5e5', 
        borderWidth: 2,
        marginTop: 30, 
        padding: 10,
        width: '100%',
    },

    editPageInputView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        width: '100%',
    },

    fieldHeader: {
        color: '#aaaaaa',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    fieldText: {
        fontSize: 12,
        fontWeight: 'bold',
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
    },

    updateButton: {
        alignItems: 'center',
        backgroundColor: 'black',
        marginTop: 40,
        padding: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        width: '85%',
    },
})
