import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Time } from '../types';

interface TimeInputProps {
    time: Time;
    setTime: (value: ((prevState: Time) => Time) | Time) => void;
}

export const TimeInput = ({ time, setTime }: TimeInputProps) => {
    return (
        <View style={styles.textInputContainer}>
            <TextInput
                style={styles.textInput}
                value={time.hours.toString()}
                onChangeText={(hours) => setTime({ ...time, hours })}
            />
            <Text>h</Text>
            <TextInput
                style={styles.textInput}
                value={time.minutes.toString()}
                onChangeText={(minutes) => setTime({ ...time, minutes })}
            />
            <Text>m</Text>
            <TextInput
                style={styles.textInput}
                value={time.seconds.toString()}
                onChangeText={(seconds) => setTime({ ...time, seconds })}
            />
            <Text>s</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 3,
        width: 25,
    },
});
