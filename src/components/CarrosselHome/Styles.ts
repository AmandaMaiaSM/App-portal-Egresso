import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    height: 220,
    marginBottom: -18,
  },

  slide: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  text: {
    color: "white",
    fontSize: 14,
    marginBottom: 10,
  },

  button: {
    backgroundColor: Colors.primaria,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: "flex-start",
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
  },

  dot: {
    backgroundColor: "rgba(255,255,255,0.5)",
  },

  activeDot: {
    backgroundColor: Colors.primaria,
  },
});