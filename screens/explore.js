import * as React from 'react';
import { View, useWindowDimensions, Text, Button} from 'react-native';
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { styles } from "../styles/explorestyles";
import { globalstyles } from "../styles/GlobalStyles";
import { Color, FontSize, FontFamily } from "../styles/GlobalStyles";

import { StatusBar } from 'expo-status-bar';

const Ejercicios = () => (
  <View style={{ flex: 1, backgroundColor: Color.primary }} />
);

const Rutinas = () => (
  <View style={{ flex: 1, backgroundColor: Color.primary }} />
);

const renderScene = SceneMap({
  Ejercicios: Ejercicios,
  Rutinas: Rutinas,
});

export default function Explore({ navigation }) {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Ejercicios', title: 'Ejercicios' },
    { key: 'Rutinas', title: 'Rutinas' },
  ]);

  const dynamicTabBarStyle = (index) => ({
    margin: 0,
    backgroundColor: index === 0 ? Color.secondary : Color.secondary, // Dynamic color based on index
    top: 0,
    borderRadius: 0,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ 
        backgroundColor: 'white',
        width: '46%',
        left: '2.5%',
        right: '2.5%',
      }}
      style={dynamicTabBarStyle(index)}
      
      labelStyle={{ 
        color: 'white', 
      }}

      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, margin: 0 , fontSize: 16 }}>
          {route.title}
        </Text>
      )}
      
    />
  );
  
  return (
    <View style={globalstyles.background}>
      <TabView
      swipeEnabled={false}
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      indicatorStyle={{ backgroundColor: Color.secondary }}
      style={{backgroundColor: Color.primary}}
      />

      <View style={styles.container}>

      </View>
      <StatusBar hidden={true} />
    </View>
  );
}