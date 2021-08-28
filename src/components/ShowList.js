import React from 'react';
import { View,StyleSheet,Text, Image } from 'react-native';

export default ShowList =({id,name,image,rating})=>{

     return(

        <View style={styles.show__container}> 
            <View style={styles.show__box}>
            <Text style={styles.name}>{name}</Text>
            <Image style={styles.image} source={{uri:image}} />
            <Text style={styles.rating}>Imdb Rating : {rating}</Text>
            </View>
        </View>
     )

}

const styles = StyleSheet.create({
    show__container:{
        backgroundColor:'#F5DDD9',
        paddingHorizontal:5
        

    },
    show__box:{
        alignSelf:'center',
        backgroundColor:'#FAEFED',
        flex:1,
        flexDirection:'column',
        marginVertical:10,
    },
    name:{
        fontWeight:'bold',
        fontSize:15,
        color:'tomato'
    },
    rating:{
        fontWeight:'700',
        fontSize:13,
        color:'tomato'

    },
    image:{
        width:202,
        height:295
    }
})