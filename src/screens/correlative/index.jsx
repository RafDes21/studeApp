import { FlatList, Text, View } from "react-native";
import { CORRELATIVES } from "../../db/correlatives";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const Correlative = ({ route }) => {
  const { id, itemId } = route.params;
  const subject = CORRELATIVES.find((item) => item.id === id);
  const forStudy = subject.correlatives[itemId].study;

  const forStudyArray = forStudy.map((subject, index) => ({
    id: `${index}`,
    title: subject,
  }));

  const renderStudy = ({ item }) => (
    <View style={styles.itemList}>
      <Text>{item.title}</Text>
      <Ionicons name="eyedrop" size={16} color="black" />
    </View>
  );

  const renderContent = () => {
    if (forStudy.length === 0) {
      return <Text style={styles.emptyText}>No hay nada</Text>;
    } else {
      return (
        <FlatList
          style={styles.listCorrelatives}
          data={forStudyArray}
          renderItem={renderStudy}
          keyExtractor={(item) => item.id}
        />
      );
    }
  };

  return (
    <View>
      <Text>Para Cursar</Text>
      <View>{renderContent()}</View>
    </View>
  );
};

export default Correlative;
