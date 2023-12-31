import { Button, StyleSheet } from 'react-native';

interface CalculateButtonProps {
    onPress: () => void;
}

export const CalculateButton = ({ onPress }: CalculateButtonProps) => {
    return <Button style={styles.button} title="predict" onPress={onPress} />;
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
    },
});
