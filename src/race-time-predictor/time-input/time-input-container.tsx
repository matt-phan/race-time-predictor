import { View, StyleSheet } from 'react-native';
import { ReactNode } from 'react';

interface TimeInputContainerProps {
    children: ReactNode;
}

export const TimeInputContainer = ({ children }: TimeInputContainerProps) => {
    return <View style={styles.timeInputContainer}>{children}</View>;
};

const styles = StyleSheet.create({
    timeInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
});
