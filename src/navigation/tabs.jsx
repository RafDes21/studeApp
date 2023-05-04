import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import BiochemistryNavigator from "./biochemistry";
import LinksFacuNavigator from "./linksFacu";
import LinksInstagramNavigator from "./linksInstagram";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={BiochemistryNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={20}
              color={"#E359C0"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Links-Facu"
        component={LinksFacuNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "albums" : "albums-outline"}
              size={20}
              color={"#E359C0"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Links-Instagram"
        component={LinksInstagramNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "apps" : "apps-outline"}
              size={20}
              color={"#E359C0"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
