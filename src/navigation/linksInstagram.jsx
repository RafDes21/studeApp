import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinksInstagram } from "../screens";
import { COLORS } from "../constants";

const Stack = createNativeStackNavigator();

const LinksInstagramNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: COLORS.secondary } }}
    >
      <Stack.Screen name="Links-Instagram" component={LinksInstagram} />
    </Stack.Navigator>
  );
};

export default LinksInstagramNavigator;
