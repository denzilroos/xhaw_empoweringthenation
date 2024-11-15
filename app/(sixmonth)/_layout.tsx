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
      <Stack.Screen name="firstaid" options={{title :'First aid'}}/>
      <Stack.Screen name="landscaping" options={{title :'Landscaping'}}/>
      <Stack.Screen name="sewing" options={{title :'Sewing'}}/>
      <Stack.Screen name="lifeskills" options={{title :'Life skills'}}/>
     
    </Stack>
  );
}
