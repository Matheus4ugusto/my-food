import {Image, Pressable, ScrollView, Text} from "react-native";
import {Flex, Title} from "../../../styles/main.style";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import {useAuth} from "../../../contexts/AuthContext";

export default function Profile() {

    const {logout} = useAuth();

    return (
        <ScrollView>
            <Flex paddingTop={30} paddingBottom={30} backgroundColor="#e2e2e2">
                <Image src="https://placehold.co/100x100/png"
                       style={{height: 100, width: 100, alignSelf: "center", borderRadius: 50}}/>
            </Flex>
            <Flex paddingLeft={10} paddingRight={10} paddingTop={20} gap={10}>
                <Title titleLevel={3}>Nome de usuário</Title>
                <Text style={{color: "#a1a1a1"}}>Email@Email.com.br</Text>
                <Pressable style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    backgroundColor: "#e762aff",
                    paddingVertical: 10,
                    justifyContent: "center",
                    borderRadius: 20,
                    marginTop: 10
                }}
                           onPress={() => logout()}
                >
                    <Icon color="#fff" name="logout"/>
                    <Text style={{color: "#fff"}}>Sair</Text>
                </Pressable>
            </Flex>
        </ScrollView>
    )
}