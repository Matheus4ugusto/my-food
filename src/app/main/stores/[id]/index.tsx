import {Image, RefreshControl, ScrollView, Text, View} from "react-native";
import {usePathname} from "expo-router";
import React from "react";
import {Flex} from "../../../../styles/main.style";
import Icon from "react-native-vector-icons/FontAwesome";
import ProductCard from "../../../../components/ProductCard";

export default function Stores() {
    const path = usePathname();

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000)
    }, []);

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
            <Image src="https://placehold.co/400x140/png" style={{height: 140}}/>
            <Flex flexDirection="row" alignItems="center" gap={10} paddingLeft={20} paddingRight={20} paddingTop={20}>
                <Image src="https://placehold.co/60x60/png" style={{height: 60, width: 60, borderRadius: 50}}/>
                <View>
                    <Text>Nome da loja</Text>
                    <Text>5 <Icon color="#f0c20a" name="star"/></Text>
                    <Text style={{fontSize: 10, color: "#868686"}}>30-45 min</Text>
                </View>
            </Flex>
            <Flex paddingTop={20} paddingLeft={20}>
                <Text>Lanches</Text>
            </Flex>
            <Flex paddingTop={20} rowGap={5} paddingLeft={20} paddingRight={20}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Flex>
        </ScrollView>
    )
}