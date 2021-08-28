import React,{useState,useContext} from 'react';
import {FlatList, StyleSheet, Text,ActivityIndicator} from 'react-native';
import SearchBar from '../components/SearchBar'
import ShowList from '../components/ShowList'
import {Context as ShowsContext} from '../context/ShowsContext';

const HomeScreen  = ()=>{

    const {state,searchShows} = useContext(ShowsContext);

    const [term,setTerm] = useState('girls');

    const searchTvShows =()=>{
        searchShows(term);
    }

    return(
        <>
        <SearchBar 
        term={term} 
        onTermChange={(newTerm)=>setTerm(newTerm)}
        onTermSubmit={searchTvShows}
         />
        {state.loading?<ActivityIndicator size="large" color="tomato" />:<Text></Text>}

        <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={tvshow=>tvshow.show.name}
        data={state.shows}
        renderItem={({item})=>{
            return <ShowList
            id={item.show.id}
            name={item.show.name}
            image={item.show.image?item.show.image.medium : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
            rating={item.show.rating.average? item.show.rating.average: "Not rated Yet!"}
             />
        }}
        numColumns={2}
        />
        </>
    );
}

const styles = StyleSheet.create({
    logo__img:{
        width:150,
        height:150,
        alignSelf:'center',
        justifyContent:'center'
    }
})


export default HomeScreen;