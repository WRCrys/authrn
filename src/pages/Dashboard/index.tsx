import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

const Dashboard: React.FC = () => {
    const { signOut, user } = useAuth();

    async function handleSignOut() {
        signOut();
    }

    return (
        <View style={styles.container}>
            <Text>Welcome {user?.name}</Text>
            <Button title="SignOut" onPress={handleSignOut} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Dashboard;
