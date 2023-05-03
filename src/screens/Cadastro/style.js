import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E0E0E0',
        paddingStart:'5%',
    },

    content:{
        color:'#698499',
        fontSize:18,
        marginTop:40,
        fontWeight:'bold'
        
        
    },

    title:{
        fontSize:18,
        marginTop:20,
        color:'#698499',
        
    },

    input:{
        width:350,
        backgroundColor:'#F3F3F3',
        height:35,
        marginBottom:10,
        borderRadius:8,
        fontSize:16,
        paddingHorizontal:8,
        paddingVertical:8,
    },

    containerRedesSociais:{
        justifyContent:'center',
        alignContent:'center',
        marginLeft:130,
        marginTop:50,
    },

    button:{
        backgroundColor:'#69419D',
        width:213,
        height:40,
        borderRadius:76,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        left:79,
        margin:10,
        marginTop:50,
        
    },

    buttonText:{
        color:'#ffff',
        fontWeight:'bold',
    },
})