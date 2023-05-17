import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#caf0f8",
  },
  listCorrelatives: {
    alignItems: "center",
  },
  itemList: {
    flexDirection: "row",
    justifyContent:"space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
   
  },
  flatList: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius:5,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    marginTop: 20,
  },
  emptyText: {
    backgroundColor: "#fff",
    paddingVertical: 50,
    textAlign: "center",
    fontSize: 16,
    width: "80%",
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 20,
    
  },
  textContainer: {
    alignItems: "center",
  },
});
