import { StyleSheet } from 'react-native';
import { Distance } from '../types';
import { Picker } from '@react-native-picker/picker';
import { distances } from './distances';

interface DistancePickerProps {
    selectedDistance: number;
    setSelectedDistance: (
        value:
            | ((
                  prevState: number
              ) => number)
            | number
    ) => void;
}

export const DistancePicker = ({
    selectedDistance,
    setSelectedDistance,
}: DistancePickerProps) => {
    return (
        <>
            {/* ignore type error here - assume it is a problem with React Native Picker type */}
            <Picker
                selectedValue={selectedDistance}
                onValueChange={(metres) => setSelectedDistance(metres)}
                style={styles.picker}
            >
                {/* same as above */}
                {distances.map(({ label, metres }) => (
                    <Picker.Item
                        key={label}
                        label={label}
                        value={metres}
                    ></Picker.Item>
                ))}
            </Picker>
        </>
    );
};

const styles = StyleSheet.create({
    picker: {
        width: 350,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
});
