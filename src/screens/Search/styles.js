import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#F3F3F3"
    },
    inputContainer: {
        marginTop: 32,
        borderWidth: 1,
        padding: 16,
        height: 54,
        borderRadius: 10,
        backgroundColor: "#E1E1E1",
        borderColor: "#FF6B6B",
        borderWidth: 1
        
    },
    input: {
        fontSize: 16,
    },

    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20
        
    },
    image: {
        width: 90,
        height: 90,
        backgroundColor: '#FF6B6B',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#69419D'
    },
    subTitle: {
        textTransform: 'uppercase',
        marginLeft: 20,
        fontSize:16,
        fontWeight: 'bold'

    }

});