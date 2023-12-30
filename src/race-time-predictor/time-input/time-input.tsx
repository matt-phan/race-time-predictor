import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Time } from '../types';
import { TimeInputContainer } from './time-input-container';

interface TimeInputProps {
    time: Time;
    setTime: (value: ((prevState: Time) => Time) | Time) => void;
}

export const TimeInput = ({ time, setTime }: TimeInputProps) => {
    return (
        <TimeInputContainer>
            <TextInput
                style={styles.timeInput}
                value={time.hours.toString()}
                onChangeText={(hours) => setTime({ ...time, hours })}
            />
            <Text>h</Text>
            <TextInput
                style={styles.timeInput}
                value={time.minutes.toString()}
                onChangeText={(minutes) => setTime({ ...time, minutes })}
            />
            <Text>m</Text>
            <TextInput
                style={styles.timeInput}
                value={time.seconds.toString()}
                onChangeText={(seconds) => setTime({ ...time, seconds })}
            />
            <Text>s</Text>
        </TimeInputContainer>
    );
};

const styles = StyleSheet.create({
    timeInput: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 3,
        width: 40,
    },
});
