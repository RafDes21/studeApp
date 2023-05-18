import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

const InputWithLabel = ({ label, value, onChangeText }) => {
  const handleTextChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    onChangeText(numericValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleTextChange}
        keyboardType="numeric"
        maxLength={2}
      />
    </View>
  );
};

export default InputWithLabel;
