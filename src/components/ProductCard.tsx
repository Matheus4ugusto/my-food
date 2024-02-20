import {ProductCardBox} from "../styles/stores.style";
import React from "react";
import {Image, Text, View} from "react-native";
import {Flex} from "../styles/main.style";
import {router} from "expo-router";

const ProductCard: React.FC = () => {

    return (
        <ProductCardBox onPress={() => router.push("/main/products/1")}>
            <Image
                src="https://placehold.co/60x60.png"
                style={{height: 80, width: 80, borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
            />
            <Flex style={{flex: 1}}>
                <View style={{flexDirection: "row"}}>
                    <Text style={{fontSize: 14}}>Nome do produto</Text>
                    <Text style={{color: "#3cae03", marginLeft: 20}}>R$ 10,00</Text>
                </View>
                <Text style={{fontSize: 10, color: "#868686", flex: 1}}>Jogadô
                    de futibou
                    muíto bon que quai no campu ha cadah sinco minutus</Text>

            </Flex>
        </ProductCardBox>
    )
};

export default ProductCard