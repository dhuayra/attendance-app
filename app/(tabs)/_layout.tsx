import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import TabScanner from "./scanner";
import TabFiles from "./files";
import TabHome from "./home";
const Tab = createBottomTabNavigator();
export default function TabLayout() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: '#fff', height: "5%" },
                    tabBarActiveTintColor: '#65a30d',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
                }}
            >
                <Tab.Screen
                    name="INICIO"
                    component={TabHome}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => <MaterialIcons size={28} name="dashboard" color={color} />
                    }}
                />
                <Tab.Screen
                    name="ESCÁNER"
                    component={TabScanner}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => <MaterialIcons size={28} name="qr-code-scanner" color={color} />
                    }}
                />
                <Tab.Screen
                    name="ARCHIVOS"
                    component={TabFiles}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => <MaterialIcons size={28} name="snippet-folder" color={color} />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}