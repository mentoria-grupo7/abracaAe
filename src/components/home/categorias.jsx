import { FlatList,Text } from "react-native"

const DATA = [
    {id:'1',cat:'Frutas e verduras'},
    {id:'2',cat:'Roupas'},
    {id:'3',cat:'Alimentos'},
    {id:'4',cat:'Distribuição de alimentos'},
    {id:'5',cat:'Distribuição de roupas'},
]

export const Categorias= () => {
    const renderItem = ({item}) =>{
        <Text>{item.cat}</Text>
    }

    return(
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        )

}