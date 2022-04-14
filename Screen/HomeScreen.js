import React from 'react';
import { Appbar,} from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CameraScreen from './Tab/CameraScreen';
import ChatScreen from './Tab/ChatScreen';
import StatusScreen from './Tab/StatusScreen';
import PanggilanScreen from './Tab/PanggilanScreen';

const Tab = createMaterialTopTabNavigator();

function HomeScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="WhatsApp" />
        <MaterialIcons name = "search" size={24} color="white"/>
        <Appbar.Action icon="dots-vertical" onPress={() => navigation.navigate("SettingScreen")}/>
      </Appbar.Header>

      <Tab.Navigator
       tabBarOptions={{
       activeTintColor: '#fff',
           style: {
                 backgroundColor: '#0C6157',
                 paddingBottom: 3
           }
    }}>
        <Tab.Screen name='CAMERA' component={CameraScreen}
          options={{
          tabBarIcon: ({}) => (
          <MaterialCommunityIcons name="camera" size={24} color="#fff" />
          ),
          tabBarShowLabel:false
      }}/>    
        <Tab.Screen name='CHAT' component={ChatScreen}/>
        <Tab.Screen name='STATUS' component={StatusScreen}/>
        <Tab.Screen name='PANGGILAN' component={PanggilanScreen}/>
    </Tab.Navigator>
    
    </>
  );
}

export default HomeScreen;