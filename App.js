import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from "nativewind";

export default function App() {

  const { colorScheme, setColorScheme } = useColorScheme();
  return (
    <View className="flex-1 items-center justify-center bg-gray-200 dark:bg-black"> 
      <Switch value={colorScheme === "dark"} onChange={setColorScheme}/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


