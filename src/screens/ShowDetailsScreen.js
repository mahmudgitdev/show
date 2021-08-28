import React,{useState,useEffect} from 'react';
import {Text, View} from 'react-native'
export default ShowDetailsScreen = ({ route, navigation })=>{
    const { showId } = route.params;
    console.log(showId)
    const [singleShow,setSingleShow] = useState([]);

    const reqSingleShow = async (id)=>{
        const {data} = await axios.get(`http://api.tvmaze.com/shows/${id}`);
        setSingleShow(data);
        console.log(data)
    }

    useEffect(() => {
        reqSingleShow(showId);
    }, [0])
    console.log(showId);
    return(
        <Text>Hello</Text>
    )
}