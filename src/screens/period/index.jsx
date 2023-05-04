import { Text, View } from "react-native";
import styles from "./styles";

const Period = ({ route }) => {
  const id = route.params;
  console.warn(id);

  return (
    <View>
      <Text>period</Text>
    </View>
  );
};

export default Period;
