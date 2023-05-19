import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    marginTop: 20,
  },

  title: {
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 20,
  },

  containerInput: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  securityIcon: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 20,
    
  },
});
