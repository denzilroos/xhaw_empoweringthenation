import { Stack } from 'expo-router';

export default function sixweekLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="childminding" />
      <Stack.Screen name="cooking" />
      <Stack.Screen name="gardenmaintenance" />
     
    </Stack>
  );
}