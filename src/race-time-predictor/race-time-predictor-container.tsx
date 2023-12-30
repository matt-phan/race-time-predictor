import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import { Title } from './title';
import { TimeInput } from './time-input';
import { Distance, Time } from './types';
import { DistancePicker } from './distance-picker';
import { CalculateButton } from './calculate-button';
import { PredictedTime } from './prediction';

export const RaceTimePredictorContainer = () => {
    const [selectedDistance, setSelectedDistance] =
        useState<Pick<Distance, 'metres'>>();
    const [predictedDistance, setPredictedDistance] =
        useState<Pick<Distance, 'metres'>>();

    const [time, setTime] = useState<Time>({
        hours: '0',
        minutes: '0',
        seconds: '0',
    });

    console.log(selectedDistance);
    console.log(typeof selectedDistance);

    return (
        <View style={styles.container}>
            <Title>Your recent best effort</Title>
            <TimeInput time={time} setTime={setTime} />
            <DistancePicker
                selectedDistance={selectedDistance}
                setSelectedDistance={setSelectedDistance}
            />
            <Title>Your race prediction</Title>
            <DistancePicker
                selectedDistance={predictedDistance}
                setSelectedDistance={setPredictedDistance}
            />
            <CalculateButton onClick={() => {}} />
            <PredictedTime />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 35,
        marginBottom: 20,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: 'black',
    },
});
