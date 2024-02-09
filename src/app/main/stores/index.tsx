import {Flex} from "../../../styles/main.style";
import StoreCard from "../../../components/storeCard";
import {ScrollView} from "react-native";

export default function Stores() {
    return (
        <ScrollView>
            <Flex gap={5} paddingTop={20} paddingLeft={10} paddingRight={10}>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
            </Flex>
        </ScrollView>
    )
}