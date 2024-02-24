import {Flex, Title} from "../styles/main.style";
import Icon from "react-native-vector-icons/Entypo"
import {router} from "expo-router";

const Header = ({title, headerTintColor}: any) => {
    return (
        <Flex style={{height: 80, marginBottom: 20}} justifyContent="flex-end">
            <Title titleLevel={2} textAlign="center"
                   style={{color: headerTintColor, alignSelf: "center"}}>{title}</Title>
            <Icon onPress={() => router.push("/main/cart")} name="shopping-bag" size={30}
                  style={{position: "absolute", right: 0, paddingHorizontal: 10}}
                  color={headerTintColor}/>
        </Flex>
    )
}

export default Header