import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    padding: 8,
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  disabledInput:{
    opacity: 0.9,
    color:COLORS.secondary,
  }
});
