/* eslint-disable */
import * as React from "react";
import {Text, View, StyleSheet,FlatList,TextInput} from 'react-native';
import {Appbar, Title, Button, Card, Headline} from 'react-native-paper';
import Header from './Header'
import {useEffect, useRef, useState} from 'react';

const Detail= (props)=>{

    const[infos,setInfos]= useState([])
    const[info,setInfo]= useState({
        Name: "loading",
        Temp: "loading",
        Humidity: "loading",
        Cloud: "loading",
        Wind: "loading",
        Icon: "loading",
        Text: "loading",
        WindDir: "loading",
        WindDeg: "loading",
        feelslike: "loading"

    })

    useEffect(()=>{
        getRestaurantsDetails()
    },[])

    const getRestaurantsDetails= ()=>{
        let myRestaurants;

        fetch("https://staging.fastor.in:8090/v1/m/restaurant?city_id=118&&", {
            method: "GET",
            headers: {
                "Authorization": "Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNCIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjAtMDctMjRUMTE6NTk6NDUuMDAwWiIsImlhdCI6MTYwOTQwOTcyNSwiZXhwIjoxNjE2NjY3MzI1fQ.jZKMdl6YHTxAfEva4aN66s1EYs0XxefFISr_yQwgTu8"
            }
        })
            .then(data=> data.json())
            .then(results =>{
                setInfo({
                    Name: results.restaurant_name

                })
                console.log(results)

            })

    }

    return(
        <View style={{flex:1}}>
            <Header name= "Details"/>
            <Text>{info.Name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    }
});

export default Detail
