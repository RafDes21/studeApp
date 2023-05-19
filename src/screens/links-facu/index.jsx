import { View, Text, TextInput, FlatList, Button } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { COLORS } from "../../constants";
import { AntDesign } from "@expo/vector-icons";
import useLinks from "../../hook/useLinks";

const LinksFacu = () => {
  const {
    isButtonEnabled,
    link,
    linksArrayWithId,
    handleAddLink,
    handleChangeInput,
  } = useLinks();

  const renderItemLinks = ({ item }) => (
    <View style={styles.linkContainer}>
      <Text>{item.title}</Text>
      <AntDesign name="delete" size={20} color="black" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>listFacult</Text>
      <TextInput
        style={styles.textInput}
        placeholder="url"
        onChangeText={handleChangeInput}
        value={link}
      />
      <Button
        color={COLORS.textColor}
        title="Guardar"
        disabled={isButtonEnabled}
        onPress={handleAddLink}
      />
      <FlatList
        style={styles.flatLitsContainer}
        data={linksArrayWithId}
        renderItem={renderItemLinks}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default LinksFacu;
