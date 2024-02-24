import {StoreCardBox} from "../styles/stores.style";
import {Image, Text, View} from "react-native";
import {Flex} from "../styles/main.style";
import Icon from "react-native-vector-icons/FontAwesome";
import {router} from "expo-router";
import {StoreProps} from "../types/stores";

const StoreCard = ({logo, name, delivery_time, avaliation, id}: StoreProps) => {
    return (
        <StoreCardBox onPress={() => router.push("/main/stores/" + id)}>
            <View>
                <Image
                    src={logo}
                    style={{borderRadius: 50, height: 60, width: 60}}/>
            </View>
            <Flex flexDirection="column">
                <Text>{name}</Text>
                <Text>{avaliation} <Icon color="#f0c20a" name="star"/></Text>
                <Text style={{fontSize: 10, color: "#868686"}}>{delivery_time}</Text>
            </Flex>
        </StoreCardBox>
    );
}

export default StoreCard