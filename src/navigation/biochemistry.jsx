import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Correlative, Period } from "../screens";
import { COLORS } from "../constants";

const Stack = createNativeStackNavigator();

const BiochemistryNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="StudeApp"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.secondary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: "500",
          fontSize: 28,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="StudeApp" component={Home} />
      <Stack.Screen name="Period" component={Period} />
      <Stack.Screen name="Correlative" component={Correlative} />
    </Stack.Navigator>
  );
};

export default BiochemistryNavigator;
