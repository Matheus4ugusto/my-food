import {StoreCardBox} from "../styles/stores.style";
import {Image, Text, View} from "react-native";
import {Flex} from "../styles/main.style";
import Icon from "react-native-vector-icons/FontAwesome";
import {router} from "expo-router";

const StoreCard = () => {
    return (
        <StoreCardBox onPress={() => router.push("/main/stores/1")}>
            <View>
                <Image
                    src="https://placehold.co/60x60.png"
                    style={{borderRadius: 50, height: 60, width: 60}}/>
            </View>
            <Flex flexDirection="column">
                <Text>Nome da loja</Text>
                <Text>5 <Icon color="#f0c20a" name="star"/></Text>
                <Text style={{fontSize: 10, color: "#868686"}}>30-45 min</Text>
            </Flex>
        </StoreCardBox>
    );
}

export default StoreCard