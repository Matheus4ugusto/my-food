import {Image, Text, View} from "react-native";

export default function Finish() {
    return <View>
        <Image style={{width: "60%", height: 300, objectFit: "contain", alignSelf: "center"}}
               source={{uri: "https://www.boyber.com.br/images/service_1.gif"}}/>
        <Text style={{fontSize: 20, width: "60%", textAlign: "center", alignSelf: "center", fontWeight: "bold"}}>O
            entregador já saiu com o
            seu
            pedido!</Text>
    </View>
}