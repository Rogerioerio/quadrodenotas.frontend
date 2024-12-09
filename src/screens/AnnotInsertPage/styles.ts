import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#353839',
    },
    formsTxt:{
        width: width * 0.9,
        height: "80%",
        alignItems:'center',
        justifyContent:'flex-start',
        gap:30
    }
})

