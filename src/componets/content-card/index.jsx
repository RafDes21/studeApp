import { View } from "react-native";
import {styles} from "./styles";

const ContentCard = ({children, style}) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default ContentCard;
