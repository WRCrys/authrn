import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

const SignIn: React.FC = () => {

    const { signIn, signed, user } = useAuth();

    console.log(signed);
    console.log(user);

    async function handleSignIn() {
        await signIn();
    }

    return (
        <View style={styles.container}>
            <Button title="SignIn" onPress={handleSignIn} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default SignIn;
