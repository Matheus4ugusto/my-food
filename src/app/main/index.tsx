import {Text} from "react-native";
import {Container, Flex} from "../../styles/main.style";
import {Link} from "expo-router";
import {StoreCard} from "../../components/storeCard";

export default function MainPage() {
    return (
        <Container>
            <Flex justifyContent="space-between">
                <Text>Lojas</Text>
                <Link href="/stores" style={{color: "#b30000"}}>
                    Ver lojas
                </Link>
            </Flex>
            <Flex>
                <StoreCard/>
            </Flex>
        </Container>
    )
}