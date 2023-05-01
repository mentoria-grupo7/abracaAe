import React from "react"
import { StyleSheet, Text,
         View } from "react-native"
import MapView,{ Marker }from "react-native-maps";


let locationONGs =[
  {
    title:'MARCO ZERO',
    location:{
      "latitude": -23.55741978287975,
      "longitude": -46.63602797314525, 
    }, 
    description: "só para saber onde estou "
  }, 
  {
    title:'MARCO 3',
    location:{
      "latitude": -23.59741978287975,
      "longitude": -47.70602797314525, 
    }, 
    description: "só para saber onde estou "
  }, 
]




export default function App(){
const onRegionChange = (region) =>{
  console.log(region)};


const showLocationsONGs =() =>{
    return locationONGs.map((item, index)=>{
      return(
       
        <Marker
        key={index}
        coordinate={item.location}
        title={item.title}
        description={item.description}
        
        />
      )
    });
  };  
  
  return(

<View style ={styles.container}>
 <MapView
  style={styles.map}
  onRegionChange={onRegionChange}
  initialRegion ={{
    "latitude": -23.55741978287975,
    "latitudeDelta": 0.02395516515318974,
    "longitude": -46.63602797314525, 
    "longitudeDelta": 0.012502111494541168
  }}
 > 
{showLocationsONGs()}

 </MapView>


</View>



  )
}


const styles =StyleSheet.create({
  container:{
    flex:1,
    background:'#fff',
    justifyContent: 'flex-end'
    
    },
    map:{
      width:'100%',
      height:'60%',
      alignSelf:'center'
    }
});