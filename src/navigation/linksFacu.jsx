import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LinksFacu } from "../screens"

const Stack = createNativeStackNavigator()

const LinksFacuNavigator = () => {
  return (
 <Stack.Navigator>
    <Stack.Screen name="Links-Facu" component={LinksFacu} />
 </Stack.Navigator>
  )
}

export default LinksFacuNavigator
