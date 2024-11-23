import { Button, View } from "react-native";

import { style } from "./styles";

const handlePress = () => {
    alert('Botão pressionado!');
  };

export function BtnSubmit() {
    return(
        <View style={style.control}>
            <Button title="Salvar nota" onPress={handlePress} color={'#9d2a7f'}/>
        </View>
    )
}