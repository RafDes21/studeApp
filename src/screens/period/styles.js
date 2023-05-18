import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
  },
  cardContainer: {
    marginVertical: 10,
    width: "95%",
    marginHorizontal: 10,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    height: 100,
  },
  card: {
    color: COLORS.textColor,
    fontSize: 20,
    width: "100%",
    height: "100%",
  },
});
