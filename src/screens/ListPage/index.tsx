import React from "react";

import {
    View, FlatList,
} from 'react-native';

import { style } from "./styles";

const DATA = [
    { 
        id: '1', 
        title: 'Anotação 1', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    { 
        id: '2', 
        title: 'Anotação 2', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]


export function ListPage (){
    return (
        <View style={style.container}>
            <View style={style.listTxt}>
                <View style={style.cardTxt}></View>
                <View style={style.cardTxt}></View>
            </View>
        </View>
    )
}