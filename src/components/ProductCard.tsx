import {ProductCardBox} from "../styles/stores.style";
import React from "react";
import {Image, Text, View} from "react-native";
import {Flex} from "../styles/main.style";
import {router} from "expo-router";
import {ProductCardProps} from "../types/stores";
import {moneyFormat} from "../utils/moneyFormat";

const ProductCard = ({id, name, price, description, image}: ProductCardProps) => {

    return (
        <ProductCardBox onPress={() => router.push("/main/products/" + id)}>
            <Image
                src={image[0].url}
                style={{height: 80, width: 80, borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
            />
            <Flex style={{flex: 1}}>
                <View style={{flexDirection: "row"}}>
                    <Text style={{fontSize: 14}}>{name}</Text>
                    <Text style={{color: "#3cae03", marginLeft: 20}}>{moneyFormat(price)}</Text>
                </View>
                <Text style={{fontSize: 10, color: "#868686", flex: 1}}>{description}</Text>

            </Flex>
        </ProductCardBox>
    )
};

export default ProductCard