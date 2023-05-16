import { FlatList, Text, View } from "react-native";
import { SUBJECTS } from "../../db/subjects";
import { styles } from "./styles";
import { Card, ContentCard } from "../../componets";

const Period = ({ navigation, route }) => {
  const { id } = route.params;

  const subject = SUBJECTS.find((item) => item.id === id);
  const subjectRender = subject.subjects;
  const subjectHandleId = subjectRender.map((subject, index) => ({
    id: `${index}`,
    title: subject,
  }));

  const renderSubjects = ({ item }) => (
    <ContentCard style={styles.cardContainer}>
      <Card
        style={styles.card}
        {...item}
        onChangeSelect={() =>
          navigation.navigate("Correlative", { id: id, itemId: item.id })
        }
      />
    </ContentCard>
  );

  return (
    <FlatList
      style={styles.container}
      data={subjectHandleId}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderSubjects}
    />
  );
};

export default Period;
