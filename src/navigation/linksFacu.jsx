import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinksFacu } from "../screens";
import { COLORS } from "../constants";

const Stack = createNativeStackNavigator();

const LinksFacuNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: COLORS.secondary } }}
    >
      <Stack.Screen name="Links-Facu" component={LinksFacu} />
    </Stack.Navigator>
  );
};

export default LinksFacuNavigator;
