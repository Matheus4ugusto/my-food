import {Flex} from "../../../styles/main.style";
import ProductCard from "../../../components/ProductCard";
import {ScrollView} from "react-native";
import {useStore} from "../../../contexts/StoreContex";

export default function Products() {
    const {products} = useStore()
    return (
        <ScrollView>
            <Flex gap={5} paddingLeft={10} paddingRight={10} paddingTop={20}>
                {products.map((product, index) => (<ProductCard key={product.id} {...product} />))}
            </Flex>
        </ScrollView>

    )
}