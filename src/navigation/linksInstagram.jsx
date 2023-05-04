import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinksInstagram } from "../screens";

const Stack = createNativeStackNavigator();

const LinksInstagramNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Links-Instagram" component={LinksInstagram} />
    </Stack.Navigator>
  );
};

export default LinksInstagramNavigator;
