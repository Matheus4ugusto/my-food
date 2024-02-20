import {Image, ScrollView, Text, View} from "react-native";
import {Flex, Title} from "../../../../styles/main.style";
import {BuyButton} from "../../../../styles/stores.style";

export default function Product() {
    return (
        <ScrollView>
            <Flex style={{height: "100%"}}>
                <Image src="https://placehold.co/400x140/png" style={{height: 200, width: "100%"}}/>
                <View style={{paddingHorizontal: 10}}>
                    <View style={{paddingVertical: 10}}>
                        <Title titleLevel={4}>Nome Produto</Title>
                        <Text style={{color: "#3cae03"}}>R$ 10,00</Text>
                    </View>
                    <Text>
                        Jogadô de futibou muíto bon que quai no campu ha cadah sinco minutus
                    </Text>
                </View>
                <BuyButton style={{marginTop: 20}}>
                    <Text style={{color: "#fff", textAlign: "center"}}>
                        Adicionar à sacola
                    </Text>
                </BuyButton>
            </Flex>
        </ScrollView>
    )
}