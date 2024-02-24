import {Tabs} from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../components/Header";
import IconEntypo from "react-native-vector-icons/Entypo";


export default function Routes() {
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
                    headerTintColor: "#E7562AFF",
                    header: (p) => <Header {...p.options}/>
                }}
            />
            <Tabs.Screen name="stores/index" options={{
                title: "Lojas",
                tabBarShowLabel: false,
                headerTintColor: "#E7562AFF",
                headerTitleAlign: "left",
                tabBarIcon: () => <IconEntypo name="shop" color="#E7562AFF" size={28}/>
            }}/>

            <Tabs.Screen name="products/index" options={{
                title: "Produtos",
                tabBarShowLabel: false,
                headerTintColor: "#E7562AFF",
                headerTitleAlign: "left",
                tabBarIcon: () => <Icon name="fast-food-sharp" color="#E7562AFF" size={28}/>
            }}/>
            <Tabs.Screen name="stores/[id]/index"
                         options={{href: null, headerShown: false, tabBarShowLabel: false}}/>

            <Tabs.Screen
                name="products/[id]/index"
                options={{href: null, headerShown: false, tabBarShowLabel: false}}
            />

            <Tabs.Screen
                name="profile/index"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: () => (<IconEntypo name="user" color="#E7562AFF" size={28}/>)
                }}
            />
            <Tabs.Screen
                name="cart/index"
                options={{
                    title: "Sacola",
                    headerTintColor: "#E7562AFF",
                    href: null,
                    tabBarShowLabel: false
                }}/>
            <Tabs.Screen name="cart/finish/index" options={{href: null, headerShown: false, tabBarShowLabel: false}}/>
        </Tabs>
    )
}