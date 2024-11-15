import { Stack } from 'expo-router';

export default function sixmonthLayout() {
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
      <Stack.Screen name="firstaid" />
      <Stack.Screen name="landscaping" />
      <Stack.Screen name="sewing" />
      <Stack.Screen name="lifeskills" />
     
    </Stack>
  );
}
