import { Button, Text, View } from "react-native";
import { styles } from "./styles";
import InputWithLabel from "../../componets/inputWithLabel";
import useGrade from "../../hook/useGrade";
import { RenderContent } from "../../componets";
import { getCorrelativeData } from "../../utils/correlativeUtil";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Correlative = ({ route }) => {
  const { id, itemId } = route.params;

  const {
    handleNumber1Change,
    handleNumber2Change,
    number1,
    number2,
    toggleInput,
    isInputEnabled,
  } = useGrade();

  const { studyWithId, yieldWithId, name } = getCorrelativeData(id, itemId);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.securityIcon}
        name="security"
        size={24}
        color="black"
        onPress={toggleInput}
      />

      <Text style={styles.title}>{name}</Text>
      <View style={styles.containerInput}>
        <InputWithLabel
          label="Nota Final"
          value={number1}
          onChangeText={handleNumber1Change}
          editable={isInputEnabled}
        />
        <InputWithLabel
          label="Promocionado"
          value={number2}
          onChangeText={handleNumber2Change}
          editable={isInputEnabled}
        />
      </View>
      <Text style={styles.subTitle}>Para Cursar</Text>
      <RenderContent data={studyWithId} />
      <Text style={styles.subTitle}>Para Rendir</Text>
      <RenderContent data={yieldWithId} />
    </View>
  );
};

export default Correlative;
