import { Text } from 'react-native';
import { PredictionContainer } from './prediction-container';
import { Title } from '../title';
import { TimeInputContainer } from '../time-input/time-input-container';
import { TimeOutput } from './time-output';

export const PredictedTime = () => {
    return (
        <PredictionContainer>
            <Title>Your predicted time 👉</Title>
            <TimeInputContainer>
                <TimeOutput>3</TimeOutput>
                <Text>h</Text>
                <TimeOutput>29</TimeOutput>
                <Text>m</Text>
                <TimeOutput>59</TimeOutput>
                <Text>s</Text>
            </TimeInputContainer>
        </PredictionContainer>
    );
};
