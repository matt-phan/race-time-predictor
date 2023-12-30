import { Text, StyleSheet } from 'react-native';
import { ReactNode } from 'react';

interface TimeOutputProps {
    children: ReactNode;
}

export const TimeOutput = ({ children }: TimeOutputProps) => {
    return <Text style={styles.timeOutput}>{children}</Text>;
};

const styles = StyleSheet.create({
    timeOutput: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 3,
        width: 40,
    },
});
