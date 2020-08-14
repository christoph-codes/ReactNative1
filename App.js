import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import ColorPalette from "./screens/ColorPalette";
import Color from "./screens/Color";
import ColorList from "./screens/ColorList";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Color Palettes" component={ColorPalette} />
        <Stack.Screen name="Color List" component={ColorList} />
        <Stack.Screen name="Color" component={Color} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
