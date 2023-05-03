import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#E0E0E0',                     
            
        },

        containerArrow:{
            backgroundColor:'#4ECDC4',
            padding:20,
            width:'100%'

        },
       
        fotoPerfil:{
            flex:2,
            backgroundColor:'#4ECDC4',
            alignItems:'center',
            justifyContent:'center',
            paddingStart:'5%',
            width:'100%', 
            
        },

        userName:{
            paddingTop:10,
            fontSize:20,
            color:'#fff',
            fontWeight:'bold'


        },

        content:{
            flex:6,
            paddingStart:'3%',
            marginTop:'3%',
            
        },

        indica:{
            backgroundColor:'#69419D',
            width:313,
            borderRadius:20,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            left:30,
            margin:10,
            
        },

        buttonIndica:{
            color:'#fff',
            fontWeight:'bold',
            fontSize:18,
            padding:15,
            justifyContent:'center',
            alignItems:'center',
        },

        button:{
            width:313,
            borderRadius:20,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            left:30,
            margin:10,
            borderBottomWidth:1,

        },

        buttonText:{
            fontSize:12,
            padding:8,
            justifyContent:'center',
            alignItems:'center',
        },


    }
)