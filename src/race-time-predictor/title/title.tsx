import { StyleSheet, Text } from 'react-native';
import { ReactNode } from 'react';

interface TitleProps {
    children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
    return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
    title: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
    },
});
