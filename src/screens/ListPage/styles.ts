import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#353839',
    },
    listTxt:{
        backgroundColor: 'white',
        width: width * 0.9,
        height: height,
        marginTop: '30%',
        paddingTop: 30,
        borderRadius: 40,
        borderWidth: 4,
        alignItems:'center',
        justifyContent:'flex-start',
        gap:30
    },
    cardTxt:{
        backgroundColor: '#efebdf',
        width: '90%',
        height: '20%',
        borderRadius: 40,

    }
})

