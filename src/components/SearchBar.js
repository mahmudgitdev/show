import React from 'react';
import {StyleSheet, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export default SearchBar = ({term,onTermChange,onTermSubmit})=>{

    return(
        <View style={styles.search__box}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput style={styles.inputStyle} 
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder="Search movies"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    search__box:{
        backgroundColor:'tomato',
        height:43,
        marginTop:15,
        borderRadius:5,
        marginHorizontal:10,
        marginVertical:7,
        flexDirection:'row'
    },
    inputStyle:{
        fontSize:20,
        flex:1,
        color:'white'
    },
    iconStyle:{
        fontSize:30,
        alignSelf:'center',
        marginHorizontal:15,
        color:'white'
    }
});