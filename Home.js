/* eslint-disable */
import * as React from "react";
import {Text, View, StyleSheet,FlatList,TextInput, TouchableOpacity} from 'react-native';
import {Appbar, Title, Button, Card, Headline} from 'react-native-paper';
import Header from './Header'
import {useEffect, useRef, useState} from 'react';

const Home=({navigation})=>{

    const[info,setInfo]= useState("")
    const[infos,setInfos]= useState([])
    const onClick= ()=>{
        navigation.navigate("Detail")
    }

    useEffect(()=>{
        getRestaurants()
    },[])

    const getRestaurants= ()=>{
        let myRestaurants;

        fetch("https://staging.fastor.in:8090/v1/m/restaurant?city_id=118&&", {
            method: "GET",
            headers: {
                "Authorization": "Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNCIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjAtMDctMjRUMTE6NTk6NDUuMDAwWiIsImlhdCI6MTYwOTQwOTcyNSwiZXhwIjoxNjE2NjY3MzI1fQ.jZKMdl6YHTxAfEva4aN66s1EYs0XxefFISr_yQwgTu8"
            }
        })
            .then(data=> data.json())
            .then(results =>{
                setInfos(results)
                console.log(results)

            })

    }
    return(
        <View style={{flex:1}}>
            <Header name = "Home"/>
            <View style={{alignItems: "center"}}>
                <Text style={{fontSize:20, fontWeight:"bold", marginVertical:15,color: "#00aaff"}}>List of Restaurants</Text>
            </View>
            <View>
                <FlatList
                    data={infos}
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity onPress={()=>onClick()}>
                                <Card style={{margin: 5, padding: 12}}>
                                    <Text>{item.restaurant_name}</Text>
                                </Card>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item=>item.restaurant_id}
                >

                </FlatList>
            </View>
        </View>
    )
}

export default Home
