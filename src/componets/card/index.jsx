import { Text, TouchableOpacity, View } from "react-native";
import {styles} from "./styles"

const Card = ({style,title, onChangeSelect}) => {
  return (
    <TouchableOpacity style={{...styles.container, ...style}} onPress={onChangeSelect}>
      <View>
        <Text style={{...styles.title, ...style}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
