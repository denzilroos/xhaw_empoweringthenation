import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title :'Home'}} />
      <Stack.Screen name="contactdetails" options={{title :'Contact details'}}/>
      <Stack.Screen name="calculatefees" options={{title :'Calculate fees'}}/>
      <Stack.Screen name="sixmonth_courses" options={{title :'Six-month courses'}}/>
      <Stack.Screen name="sixweek_courses" options={{title :'Six-week courses'}}/>
      <Stack.Screen name="sixmonthdetails" options={{title :'Six-month courses details'}}/>
      <Stack.Screen name="sixweekdetails" options={{title :'Six-week courses details'}}/>
      <Stack.Screen name="(sixmonth)" options={{title :'Six month'}}/>
      <Stack.Screen name="(sixweek)" options={{title :'Six week'}}/>


      <Stack.Screen name="+not-found" />
    </Stack>
    
  );
}