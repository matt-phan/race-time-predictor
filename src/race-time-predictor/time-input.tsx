import { Text, TextInput, View, StyleSheet } from "react-native";
import { Time } from "./types";
interface TimeInputProps {
  time: Time;
  setTime: (value: ((prevState: Time) => Time) | Time) => void;
}

export const TimeInput = ({ time, setTime }: TimeInputProps) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        value={time.hours}
        onChangeText={(text) => setTime({ ...time, hours: text })}
      />
      <Text>h</Text>
      <TextInput
        style={styles.textInput}
        value={time.minutes}
        onChangeText={(text) => setTime({ ...time, minutes: text })}
      />
      <Text>m</Text>
      <TextInput
        style={styles.textInput}
        value={time.seconds}
        onChangeText={(text) => setTime({ ...time, seconds: text })}
      />
      <Text>s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    margin: 3,
    width: 25,
  },
});
