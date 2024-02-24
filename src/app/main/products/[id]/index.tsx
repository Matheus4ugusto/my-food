import {Image, ScrollView, Text, View} from "react-native";
import {Flex, Title} from "../../../../styles/main.style";
import {BuyButton} from "../../../../styles/stores.style";
import {useGlobalSearchParams} from "expo-router";
import {useMemo, useState} from "react";
import {ProductCardProps} from "../../../../types/stores";
import {getProductById} from "../../../../services/store.service";
import {moneyFormat} from "../../../../utils/moneyFormat";
import {useStore} from "../../../../contexts/StoreContex";

export default function Product() {
    const {id} = useGlobalSearchParams()
    const {addCart} = useStore()

    const [product, setProduct] = useState<ProductCardProps>({} as ProductCardProps)

    useMemo(async () => {
        if (!id) return
        try {
            const response = await getProductById(Number(id));
            setProduct(response)
        } catch (error) {
            console.error(error);
        }
    }, [id]);
    return (
        <ScrollView>
            <Flex style={{height: "100%"}}>
                <Image src="https://placehold.co/400x140/png" style={{height: 200, width: "100%"}}/>
                <View style={{paddingHorizontal: 10}}>
                    <View style={{paddingVertical: 10}}>
                        <Title titleLevel={4}>{product.name}</Title>
                        <Text style={{color: "#3cae03"}}>{moneyFormat(product.price ?? 0)}</Text>
                    </View>
                    <Text>
                        {product.description}
                    </Text>
                </View>
                <BuyButton style={{marginTop: 20}} onPress={() => addCart(product)}>
                    <Text style={{color: "#fff", textAlign: "center"}}>
                        Adicionar à sacola
                    </Text>
                </BuyButton>
            </Flex>
        </ScrollView>
    )
}