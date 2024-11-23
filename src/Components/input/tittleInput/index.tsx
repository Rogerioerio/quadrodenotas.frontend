import { TextInput, View } from "react-native";

import { style } from "./styles";

export function TittleInput() {
    return(
        <TextInput style={style.control} placeholder="Pense em um título..." placeholderTextColor={'gray'}/>
    )
}