import { TextInput, View } from "react-native";

import { style } from "./styles";

export function AnnotInput() {
    return(
        <TextInput style={style.control} placeholder="Crie uma anotação..." placeholderTextColor={'gray'} multiline={true}/>
    )
}