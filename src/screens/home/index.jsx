import { FlatList, Text, View } from "react-native";
import { semesters } from "../../db/semesters";
import { styles } from "./styles";
import { Card, ContentCard } from "../../componets";

const Home = ({ navigation }) => {
  const renderSemester = ({ item }) => (
    <ContentCard style={styles.cardContainer}>
      <Card
        style={styles.card}
        {...item}
        onChangeSelect={() => navigation.navigate("Period", { id: item.id })}
      />
    </ContentCard>
  );

  return (
    <FlatList
      style={styles.container}
      data={semesters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderSemester}
    />
  );
};

export default Home;
