import { FlatList,Text,StyleSheet, TouchableOpacity} from "react-native"
import React from "react"

const DATA = [
    {id:'1',cat:'Frutas e verduras'},
    {id:'2',cat:'Roupas'},
    {id:'3',cat:'Alimentos'},
    {id:'4',cat:'Distribuição de alimentos'},
    {id:'5',cat:'Distribuição de roupas'},
];

export const Categorias= () => {

    const renderItem = ({item}) =>(

        <TouchableOpacity style={styles.itemList} >
                <Text style={styles.textItem} >{item.cat}</Text>
        </TouchableOpacity>
        
    )

    return(
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle = {styles.modalContainer}
        />
        )

}


const styles = StyleSheet.create({
    
    modalContainer:{
        width:'60%',
        backgroundColor:'#4ecdc5f2',
        borderRadius:10,
        marginLeft:10,
        borderWidth:3,
        borderColor:'#20171796',
        padding:10
    },

    itemList:{
        borderBottomColor:'red',
        borderBottomWidth:2,
        paddingVertical:5

    },
    textItem:{
        fontWeight:'bold'
    }

    })