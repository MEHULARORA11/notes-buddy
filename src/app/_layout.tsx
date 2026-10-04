import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
   <StatusBar style="light"/> {/*controls the top status bar appearance, setting it to light mode for better visibility on dark backgrounds */}
    <Stack screenOptions={{headerShown:false , contentStyle:{backgroundColor:"#121212"}}} />
  
    </> 
  )
}
