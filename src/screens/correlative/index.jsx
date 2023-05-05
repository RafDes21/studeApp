import { Text, View } from "react-native";
import { styles } from "./styles";

const Correlative = ({route}) => {
const {id} = route.params

console.warn(id)

  return (
    <View>
      <Text>correlative</Text>
    </View>
  );
};

export default Correlative;
