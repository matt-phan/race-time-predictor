import { View, StyleSheet } from 'react-native';
import { ReactNode } from 'react';

interface PredictionContainerProps {
    children: ReactNode;
}

export const PredictionContainer = ({ children }: PredictionContainerProps) => {
    return <View style={styles.predictionContainer}>{children}</View>;
};

const styles = StyleSheet.create({
    predictionContainer: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        flexDirection: 'row',
    },
});
