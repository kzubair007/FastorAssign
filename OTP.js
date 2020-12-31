/* eslint-disable */
import * as React from "react";
import {Text, View, StyleSheet,FlatList,TextInput,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import {Appbar, Title, Button, Card} from 'react-native-paper';
import Header from './Header'
import {useEffect, useRef, useState} from 'react';

const OTP=({navigation})=>{
    let textInput= useRef(null)
    const lengthInput=6
    const[internalVal,setInternalVal]=useState("")
    const validateAndSend= ()=>{
        if (internalVal==123456)
        {
            navigation.navigate("Home")
        }

    }
    const onChangeText=(val)=>{
        setInternalVal(val)
    }
    useEffect(()=>{
        textInput.focus()

    },[])
    return(
        <View>
            <Header name ="Enter OTP"/>
            <KeyboardAvoidingView
                keyboardVerticalOffset={50}
                behaviour={"padding"}
            >
                <View>
                    <TextInput
                        onChangeText={onChangeText}
                        value={internalVal}
                        maxLength={lengthInput}
                        returnKeyType="done"
                        keyboardType="numeric"
                        ref={(input)=> textInput= input}
                        style={{padding:10,alignItems:"center",justifyContent:"center"}}
                    />
                    <View style={styles.containerInput}>
                        {
                            Array(lengthInput).fill().map((data, index)=>(
                                <View key= {index}
                                      style={[styles.cellView,
                                          {
                                              borderBottomColor: index=== internalVal.length ? 'FB6C6A':'#234DB7'
                                          }]}

                                >
                                    <Text style={styles.cellText}
                                          onPress={()=>textInput.focus()}
                                    >
                                        {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                                    </Text>
                                </View>
                            ))
                        }



                    </View>
                </View>
                <View style={styles.bottomView}>

                </View>
            </KeyboardAvoidingView>
            <Button
                icon="content-save"
                mode="contained"
                theme={{colors: {primary: "#00aaff"} }}
                style={{margin: 30}}
                onPress={() => validateAndSend()}>
                <Text style={{color: "white"}}>Continue</Text>
            </Button>

        </View>
    )
}

const styles= StyleSheet.create({
    containerInput: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    cellView: {
        paddingVertical:11,
        width:40,
        margin:5,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1.5
    },
    cellText: {
        textAlign: "center",
        fontSize: 16
    },
    bottomView: {
        flexDirection: "row",
        flex:1,
        justifyContent: "center",
        marginBottom: 50,
        alignItems: "center"
    },
    buttonChange: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: "flex-start",
        justifyContent: "center"
    }
})

export default OTP
