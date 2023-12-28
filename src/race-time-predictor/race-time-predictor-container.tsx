import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { Title } from "./title";
import { TimeInput } from "./time-input";
import { Time } from "./types";
export const RaceTimePredictorContainer = () => {
  const [selectedDistance, setSelectedDistance] = useState();
  const [time, setTime] = useState<Time>({
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  console.log(time);

  return (
    <View style={styles.container}>
      <Title>Your recent best effort</Title>
      <TimeInput time={time} setTime={setTime} />
      <Picker
        selectedValue={selectedDistance}
        onValueChange={(itemValue, itemIndex) => setSelectedDistance(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="400m" value="400"></Picker.Item>
        <Picker.Item label="1/2 mile" value="805"></Picker.Item>
        <Picker.Item label="1k" value="1000"></Picker.Item>
        <Picker.Item label="1 mile" value="1609"></Picker.Item>
        <Picker.Item label="2 mile" value="3219"></Picker.Item>
        <Picker.Item label="5k" value="5000"></Picker.Item>
        <Picker.Item label="10k" value="10000"></Picker.Item>
        <Picker.Item label="15k" value="15000"></Picker.Item>
        <Picker.Item label="10 mile" value="16093"></Picker.Item>
        <Picker.Item label="20k" value="20000"></Picker.Item>
        <Picker.Item label="Half-Marathon" value="21098"></Picker.Item>
        <Picker.Item label="30k" value="30000"></Picker.Item>
        <Picker.Item label="Marathon" value="42195"></Picker.Item>
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 35,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  picker: {
    width: 350,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
  },
});
