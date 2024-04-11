import * as React from 'react';
import { View, useWindowDimensions, Text} from 'react-native';
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { styles } from "../styles/explorestyles";
import { globalstyles } from "../styles/GlobalStyles";
import { Color, FontSize, FontFamily } from "../styles/GlobalStyles";

const Ejercicios = () => (
  <View style={{ flex: 1, backgroundColor: Color.primary }} />
);

const Plantillas = () => (
  <View style={{ flex: 1, backgroundColor: Color.primary }} />
);

const renderScene = SceneMap({
  Ejercicios: Ejercicios,
  Plantillas: Plantillas,
});

export default function Explore({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Ejercicios', title: 'Ejercicios' },
    { key: 'Plantillas', title: 'Plantillas' },
  ]);

  const dynamicTabBarStyle = (index) => ({
    margin: 16,
    backgroundColor: index === 0 ? Color.secondary : Color.secondary, // Dynamic color based on index
    top: 38,
    borderRadius: 10,
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
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      indicatorStyle={{ backgroundColor: Color.secondary }}
      style={{backgroundColor: Color.primary}}
      />
    </View>
  );
}