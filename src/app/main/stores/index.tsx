import {Flex} from "../../../styles/main.style";
import StoreCard from "../../../components/storeCard";
import {ScrollView} from "react-native";
import {useStore} from "../../../contexts/StoreContex";

export default function Stores() {
    const {stores} = useStore()
    return (
        <ScrollView>
            <Flex gap={5} paddingTop={20} paddingLeft={10} paddingRight={10}>
                {stores.map((store) => <StoreCard key={store.id} {...store}/>)}
            </Flex>
        </ScrollView>
    )
}