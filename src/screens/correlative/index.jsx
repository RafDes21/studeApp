import { FlatList, Text, View } from "react-native";
import { CORRELATIVES } from "../../db/correlatives";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const Correlative = ({ route }) => {
  const { id, itemId } = route.params;
  const subject = CORRELATIVES.find((item) => item.id === id);
  const forStudy = subject.correlatives[itemId].study;
  const forYield = subject.correlatives[itemId].yield;

  const name = subject.subjects[itemId];

  const forStudyArray = forStudy.map((subject, index) => ({
    id: `${index}`,
    title: subject,
  }));
  const forYieldArray = forYield.map((subject, index) => ({
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
      return (
        <View style={styles.textContainer}>
          <Text style={styles.emptyText}>No tiene correlativa</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.listCorrelatives}>
          <FlatList
            style={styles.flatList}
            data={forStudyArray}
            renderItem={renderStudy}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }
  };

  const renderContent2 = () => {
    if (forYield.length === 0) {
      return (
        <View style={styles.textContainer}>
          <Text style={styles.emptyText}>No tiene correlativa</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.listCorrelatives}>
          <FlatList
            style={styles.flatList}
            data={forYieldArray}
            renderItem={renderStudy}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subTitle}>Para Cursar</Text>
      {renderContent()}
      <Text style={styles.subTitle}>Para Rendir</Text>
      {renderContent2()}
    </View>
  );
};

export default Correlative;
