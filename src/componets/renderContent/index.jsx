import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const RenderContent = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
      <Ionicons name="eyedrop" size={16} color="black" />
    </View>
  );

  if (data.length === 0) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.emptyText}>No tiene correlativa</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.containerFlatlist}>
        <FlatList
          style={styles.flatList}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
};

export default RenderContent
