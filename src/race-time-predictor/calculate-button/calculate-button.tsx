import { Button, StyleSheet } from 'react-native';

interface CalculateButtonProps {
    onClick: () => void;
}

export const CalculateButton = ({ onClick }: CalculateButtonProps) => {
    return <Button style={styles.button} title="predict" onClick={onClick} />;
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
    },
});
