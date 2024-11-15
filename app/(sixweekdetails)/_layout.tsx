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
      <Stack.Screen name="index" options={{
          title: 'Home'}} />
      <Stack.Screen name="sixmonth_courses" options={{
          title: 'Six month courses'}}/>
      <Stack.Screen name="sixweek_courses" options={{
          title: 'Six week courses'}} />
          <Stack.Screen name="calculatefees" options={{
          title: 'Calculate total fees'}} />
          <Stack.Screen name="contactdetail" options={{
          title: 'Contact details'}} />
          
    </Stack>
  );
}