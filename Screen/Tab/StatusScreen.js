import React from 'react';
import {List, Avatar} from 'react-native-paper';
import {Text} from 'react-native';

function StatusScreen({navigation}) {
  return (
    <>
      <List.Item
        title="Status saya"
        titleStyle={{color: 'black'}}
        description="Ketuk untuk menambahkan pembaruan sta..."
        descriptionStyle={{color: 'black'}}
        left={props => <Avatar.Image {...props} source={require('./Chat/Avatar.jpg')} size={50}/>}
      />
      <>
      <Text>Pembaruan terkini</Text>
       </>
      <List.Item
        title="Adit"
        titleStyle={{color: 'black'}}
        description="Hari ini 19.00"
        descriptionStyle={{color: 'black'}}
        left={props => <List.Icon {...props} icon="account" />}
      />
      <List.Item
        title="Rifki"
        titleStyle={{color: 'black'}}
        description="Hari ini 12.53"
        descriptionStyle={{color: 'black'}}
        left={props => <List.Icon {...props} icon="account" />}
      />
      <List.Item
        title="Zulham"
        titleStyle={{color: 'black'}}
        description="Hari ini 09.48"
        descriptionStyle={{color: 'black'}}
        left={props => <List.Icon {...props} icon="account" />}
      />

    </>
  );
}
export default StatusScreen;