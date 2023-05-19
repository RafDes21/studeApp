import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerFlatlist: {
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  flatList: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 5,
  },

  emptyText: {
    backgroundColor: "#fff",
    paddingVertical: 50,
    textAlign: "center",
    fontSize: 16,
    width: "80%",
    borderRadius: 8,
  },

  textContainer: {
    alignItems: "center",
  },
});
