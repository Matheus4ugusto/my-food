import {ScrollView, Text, View} from "react-native";
import CartProduct from "../../../components/CartProduct";
import {useStore} from "../../../contexts/StoreContex";
import {Title} from "../../../styles/main.style";
import {useMemo} from "react";
import {moneyFormat} from "../../../utils/moneyFormat";
import {BuyButton} from "../../../styles/stores.style";
import {router} from "expo-router";

export default function Cart() {
    const {cartProducts} = useStore();

    const total = useMemo(
        () => cartProducts.reduce((act, cur) => act + cur.amount * cur.price, 0),
        [cartProducts]
    );

    return (
        <>
            <ScrollView style={{maxHeight: "80%", paddingHorizontal: 10}}>
                {cartProducts.length ? (cartProducts.map((product, index) => <CartProduct
                    key={product.id + index} {...product}/>)) : (
                    <Title titleLevel={1} textAlign="center" style={{color: "#9c9c9c", paddingTop: 20}}>Sua sacola está
                        vazia</Title>)}
            </ScrollView>
            {cartProducts.length ? (
                <View style={{position: "absolute", bottom: 0, marginBottom: 16, width: "100%"}}>
                    <Text style={{paddingHorizontal: 10, paddingBottom: 20}}>Total: {moneyFormat(total)}</Text>
                    <BuyButton onPress={() => router.push("/main/cart/finish")}>
                        <Text style={{color: "#fff", textAlign: "center"}}>
                            Finalizar pedido
                        </Text>
                    </BuyButton>
                </View>
            ) : (<></>)}
        </>
    )
}