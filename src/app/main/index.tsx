import {ScrollView, Text} from "react-native";
import {Container, Flex} from "../../styles/main.style";
import {Link} from "expo-router";
import {useStore} from "../../contexts/StoreContex";
import StoreCard from "../../components/storeCard";
import ProductCard from "../../components/ProductCard";

export default function MainPage() {
    const {stores, products} = useStore();

    return (
        <Container>
            <ScrollView>
                <Flex justifyContent="space-between" style={{flexDirection: "row"}}>
                    <Text>Lojas</Text>
                    <Link href="/main/stores" style={{color: "#b30000"}}>
                        Ver lojas
                    </Link>
                </Flex>
                <Flex style={{flexDirection: "row"}} flexWrap="wrap" paddingTop={20} rowGap={5}>
                    {stores.map((store) => <StoreCard key={store.id} {...store}/>)}
                </Flex>
                <Flex justifyContent="space-between" style={{flexDirection: "row"}} paddingTop={20}>
                    <Text>Ver lanches</Text>
                    <Link href="/main/products" style={{color: "#b30000"}}>
                        Ver lanches
                    </Link>
                </Flex>
                <Flex paddingTop={20} gap={5}>
                    {products.map((product, index) => (<ProductCard key={product.id + index} {...product} />))}
                </Flex>
            </ScrollView>
        </Container>
    )
}