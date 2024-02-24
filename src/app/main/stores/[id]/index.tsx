import {Image, ScrollView, Text, View} from "react-native";
import {useGlobalSearchParams} from "expo-router";
import React, {useMemo, useState} from "react";
import {Flex} from "../../../../styles/main.style";
import Icon from "react-native-vector-icons/FontAwesome";
import {getStoreById} from "../../../../services/store.service";
import {StoreProps} from "../../../../types/stores";
import {useStore} from "../../../../contexts/StoreContex";
import ProductCard from "../../../../components/ProductCard";

export default function Stores() {
    const {products} = useStore()
    const {id} = useGlobalSearchParams()

    const [store, setStore] = useState<StoreProps>({} as StoreProps)

    useMemo(async () => {
        if (!id) return
        try {
            const response = await getStoreById(Number(id));
            setStore(response)
        } catch (error) {
            console.error(error);
        }
    }, [id]);
    return (
        <ScrollView>
            <Image src="https://placehold.co/400x140/png" style={{height: 140}}/>
            <Flex flexDirection="row" alignItems="center" gap={10} paddingLeft={20} paddingRight={20} paddingTop={20}>
                <Image src={store.logo} style={{height: 60, width: 60, borderRadius: 50}}/>
                <View>
                    <Text>{store.name}</Text>
                    <Text>{store.avaliation} <Icon color="#f0c20a" name="star"/></Text>
                    <Text style={{fontSize: 10, color: "#868686"}}>{store.delivery_time}</Text>
                </View>
            </Flex>
            <Flex paddingTop={20} paddingLeft={20}>
                <Text>Lanches</Text>
            </Flex>
            <Flex paddingTop={20} rowGap={5} paddingLeft={20} paddingRight={20}>
                {products.filter(product => product.store_id === store.id).map((product, index) => (
                    <ProductCard key={product.id} {...product} />))}
            </Flex>
        </ScrollView>
    )
}