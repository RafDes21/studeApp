import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Correlative, Period } from "../screens";

const Stack = createNativeStackNavigator();

const BiochemistryNavigator = () => {
  return (
    <Stack.Navigator initialRoutName="Home">
      <Stack.Screen name="StudeApp" component={Home} options={{headerStyle:{backgroundColor:"#E359C0"}}} />
      <Stack.Screen name="Period" component={Period} />
      <Stack.Screen name="Correlative" component={Correlative} />
    </Stack.Navigator>
  );
};

export default BiochemistryNavigator;
