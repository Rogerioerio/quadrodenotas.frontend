import React from "react";

import {
    View,
} from 'react-native';

import { style } from "./styles";

import { TittleInput } from "../../Components/input/tittleInput";
import { AnnotInput } from "../../Components/input/annotInput";
import { BtnSubmit } from "../../Components/buttonSubmit";

export function AnnotInsertPage (){
    return (
        <View style={style.container}>
            
            <View style={style.formsTxt}>
                <TittleInput />

                <AnnotInput />

                <BtnSubmit />
            </View>
            
        </View>
    )
}