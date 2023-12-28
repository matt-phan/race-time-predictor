import { StyleSheet, Text, View } from "react-native";
import { RaceTimePredictorContainer } from "./src/race-time-predictor/race-time-predictor-container";

export default function App() {
  return <RaceTimePredictorContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
