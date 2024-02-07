import {Tabs} from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

export default function MainLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "My Food",
                    tabBarIcon: () => <Icon name="home" color="#E7562AFF" size={28}/>,
                    tabBarShowLabel: false,
                    tabBarLabelStyle: {
                        color: "#E7562AFF"
                    },
                    headerTitleAlign: "center",
                    headerTintColor: "#E7562AFF"
                }}
            />
        </Tabs>
    )
}