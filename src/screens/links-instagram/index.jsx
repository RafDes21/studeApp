import { View, Text, TextInput, FlatList, Button } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { COLORS } from "../../constants";
import { AntDesign } from '@expo/vector-icons';

const LinksInstagram = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [linksFacu, setLinksFacu] = useState([]);
  const [link, setLink] = useState("");
  const forLinksArray = linksFacu.map((subject, index) => ({
    id: `${index}`,
    title: subject,
  }));
 
  const addLinkFacu = () => {
    if (linksFacu.length === 0) {
      setLinksFacu([link]);
      setLink("");
      setIsButtonEnabled(false);
    } else {
      setLinksFacu([...linksFacu, link]);
      setLink("");
      setIsButtonEnabled(false);
    }
  };

  const renderItemLinks = ({ item }) => (
    <View style={styles.linkContainer}>
      <Text>{item.title}</Text>
      <AntDesign name="delete" size={20} color="black" />
    </View>
  );

  const handleChangeInput = (text) => {
    const isInputFilled = text.trim().length > 0;
    setIsButtonEnabled(isInputFilled);
    setLink(text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>links Instagram</Text>
      <TextInput
        style={styles.textInput}
        placeholder="url"
        onChangeText={handleChangeInput}
        value={link}
      />
      <Button
        color={COLORS.textColor}
        title="Guardar"
        disabled={!isButtonEnabled}
        onPress={addLinkFacu}
      />
      <FlatList
         style={styles.flatLitsContainer}
        data={forLinksArray}
        renderItem={renderItemLinks}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default LinksInstagram
