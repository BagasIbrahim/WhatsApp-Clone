import React from 'react';
import {List, Avatar} from 'react-native-paper';

function PanggilanScreen({navigation}) {
  return (
    <>
      <List.Item
        title="Adit"
        titleStyle={{color: 'black'}}
        description="Hari ini 19.00"
        descriptionStyle={{color: 'black'}}
        left={props => <Avatar.Image {...props} source={require('./Chat/Avatar.jpg')} size={50}/>}
        right={props => <List.Icon {...props} icon="phone" color='#128C7E'/>}
      />
      <List.Item
        title="Rifki"
        titleStyle={{color: 'black'}}
        description="kemarin 04.30"
        descriptionStyle={{color: 'black'}}
        left={props => <Avatar.Image {...props} source={require('./Chat/Avatar.jpg')} size={50}/>}
        right={props => <List.Icon {...props} icon="video" color='#128C7E' />}
      />
      <List.Item
        title="Zulham"
        titleStyle={{color: 'black'}}
        description="kemarin 19.00"
        descriptionStyle={{color: 'black'}}
        left={props => <Avatar.Image {...props} source={require('./Chat/Avatar.jpg')} size={50}/>}
        right={props => <List.Icon {...props} icon="phone" color='#128C7E' />}
      />
    </>
  );
}
export default PanggilanScreen;