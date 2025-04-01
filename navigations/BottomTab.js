import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import CartScreen from "../screens/cart/CartScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import CustomTabButton from "../components/CustomTabButton";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  const iconSize = 25;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabButton
              {...props}
              onPress={() => navigation.navigate("home")}
            >
              <Ionicons name="home-outline" size={iconSize} />
            </CustomTabButton>
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabButton
              {...props}
              onPress={() => navigation.navigate("cart")}
            >
              <Ionicons name="bag-handle-outline" size={iconSize} />
            </CustomTabButton>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabButton
              {...props}
              onPress={() => navigation.navigate("profile")}
            >
              <Feather name="user" size={iconSize} />
            </CustomTabButton>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
