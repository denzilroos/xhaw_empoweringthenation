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
      <Stack.Screen name="childminding" options={{title :'Child minding'}}/>
      <Stack.Screen name="cooking" options={{title :'Cooking'}}/>
      <Stack.Screen name="gardenmaintenance" options={{title :'Garden maintenance'}}/>
     
    </Stack>
  );
}