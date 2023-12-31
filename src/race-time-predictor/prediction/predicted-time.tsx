import { Text } from 'react-native';
import { PredictionContainer } from './prediction-container';
import { Title } from '../title';
import { TimeInputContainer } from '../time-input/time-input-container';
import { TimeOutput } from './time-output';
import { Time } from '../types';

interface PredictedTimeProps {
    time: Time;
}

export const PredictedTime = ({
    time: { hours, minutes, seconds },
}: PredictedTimeProps) => {
    return (
        <PredictionContainer>
            <Title>Your predicted time 👉</Title>
            <TimeInputContainer>
                <TimeOutput>{hours}</TimeOutput>
                <Text>h</Text>
                <TimeOutput>{minutes}</TimeOutput>
                <Text>m</Text>
                <TimeOutput>{seconds}</TimeOutput>
                <Text>s</Text>
            </TimeInputContainer>
        </PredictionContainer>
    );
};
