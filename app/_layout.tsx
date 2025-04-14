import React from 'react';
import {
    Stack, 
    useRouter 
} from 'expo-router';
import { Button } from 'react-native';

const StackLayout = () => {
    const router = useRouter();

    return (
    <Stack 
      screenOptions={{
        headerStyle: {
        backgroundColor: '#C2C2C2',
      },
      headerTintColor: '#000000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
        <Stack.Screen name="index" options={{ headerTitle: 'Login', headerShown: true}} />
        <Stack.Screen 
            name="sing_up" 
                options={{ 
                    headerTitle: 'Sign Up',
                    headerRight: () => (
                        <Button 
                            title='Open' 
                            onPress={() => {
                                router.push('/modal');
                            }}
                        />
                    ),
                }} 
        />
        <Stack.Screen
            name="modal"
                options={{
                    headerTitle: 'modal',
                    headerRight: () => (
                        <Button
                            title='Open'
                                onPress={() => {
                                    router.push('/aboutUS');
                                }} 
                        />
                    ),
                }} 
        />
    </Stack>
    );
};

export default StackLayout;