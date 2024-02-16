import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Page1 from "../screens/Page1";
import Page2 from "../screens/Page2";
import Page3 from "../screens/Page3";
import { StatusBar } from "react-native";

const Navigation = () => {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
         <StatusBar
        backgroundColor="#152238"  
        barStyle="light-content"   
        hidden={false}            
      />
        <Stack.Navigator initialRouteName="Page1" >
          <Stack.Screen name="Page1" component={Page1} options={{ headerShown: false }}/>
          <Stack.Screen name="Page2" component={Page2} options={{ headerShown: false }}/>
          <Stack.Screen name="Page3" component={Page3} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  export default Navigation;