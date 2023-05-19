import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "500",
  },
  textInput: {
    width: "80%",
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  linksFacultad: {
    backgroundColor: "black",
    height: 300,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
  },
  flatLitsContainer: {
    width: "90%",
    marginVertical: 20,
  },
});
