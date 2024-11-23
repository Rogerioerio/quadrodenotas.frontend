import { AnnotInsertPage } from './src/screens/AnnotInsertPage';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { ListPage } from './src/screens/ListPage';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarLabelPosition: 'beside-icon',
          tabBarShowLabel: false,
          }}>
          <Tab.Screen name="Criar Nota" component={AnnotInsertPage} />
          <Tab.Screen name="Lista de Anotações" component={ListPage} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
