import {Flex} from "../../../styles/main.style";
import ProductCard from "../../../components/ProductCard";

export default function Products() {
    return (
        <Flex gap={5} paddingHorizontal={10} paddingTop={20}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </Flex>
    )
}