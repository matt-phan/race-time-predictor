import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Title } from './title';
import { TimeInput } from './time-input';
import { Time } from './types';
import { DistancePicker } from './distance-picker';
import { CalculateButton } from './calculate-button';
import { PredictedTime } from './prediction';
import {predictTime} from "./formula";

export const RaceTimePredictorContainer = () => {
    const [selectedDistance, setSelectedDistance] =
        useState<number>();
    const [predictedDistance, setPredictedDistance] =
        useState<number>();

    const [time, setTime] = useState<Time>({
        hours: '0',
        minutes: '0',
        seconds: '0',
    });
    const [predictedTime, setPredictedTime] = useState<Time>(
        {
            hours: '0',
            minutes: '0',
            seconds: '0',
        }
    );

    const predict = () => setPredictedTime(predictTime({t1: time, d1: selectedDistance, d2: predictedDistance}));

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
            <CalculateButton onPress={predict} />
            <PredictedTime time={predictedTime} />
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
