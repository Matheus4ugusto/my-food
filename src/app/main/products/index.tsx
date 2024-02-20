import {Flex} from "../../../styles/main.style";
import ProductCard from "../../../components/ProductCard";
import {ScrollView} from "react-native";

export default function Products() {
    return (
        <ScrollView>
            <Flex gap={5} paddingLeft={10} paddingRight={10} paddingTop={20}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Flex>
        </ScrollView>
        
    )
}