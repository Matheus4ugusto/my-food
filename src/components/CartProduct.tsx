import {ProductCardBox} from "../styles/stores.style";
import React from "react";
import {Image, Text, View} from "react-native";
import {Flex} from "../styles/main.style";
import Icon from "react-native-vector-icons/AntDesign";
import {CartProduct as CartProductProps} from "../types/stores";
import {moneyFormat} from "../utils/moneyFormat";
import {useStore} from "../contexts/StoreContex";


const CartProduct = ({id, name, price, description, image, amount}: CartProductProps) => {

    const {addCart, removeCart} = useStore()

    return (
        <ProductCardBox style={{marginTop: 10}}>
            <Image
                src={image[0].url}
                style={{height: 80, width: 80, borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
            />
            <Flex style={{flex: 1}}>
                <View style={{flexDirection: "row"}}>
                    <Text style={{fontSize: 14}}>{name}</Text>
                    <Text style={{color: "#3cae03", marginLeft: 20}}>{moneyFormat(price)}</Text>
                </View>
                <Text style={{fontSize: 10, color: "#868686", flex: 1}}>{description} </Text>
                <Flex flexDirection="row" alignContent="center" gap={10} paddingBottom={10}>
                    <Icon name="pluscircle" color="#1e88e5"
                          onPress={() => addCart({id, name, price, description, image})}/>
                    <Text>{amount}</Text>
                    <Icon name="minuscircle" color="#d32f2f"
                          onPress={() => removeCart(id)}/>
                </Flex>

            </Flex>
        </ProductCardBox>
    )
};

export default CartProduct