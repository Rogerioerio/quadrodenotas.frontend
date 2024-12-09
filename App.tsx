import { StyleSheet } from 'react-native';
import { AnnotInsertPage } from './src/screens/AnnotInsertPage';
import { ListPage } from './src/screens/ListPage';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{
            tabBarLabelPosition: 'beside-icon',
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            headerShown: false,
            animation: 'shift',
            tabBarStyle: styles.tabBar
        }}>
          <Tab.Screen 
            name="Criar Nota" 
            component={AnnotInsertPage} 
          />
          <Tab.Screen 
            name="Lista de Anotações" 
            component={ListPage} 
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderColor: 'black',
    borderTopWidth: 4,
  }
})
