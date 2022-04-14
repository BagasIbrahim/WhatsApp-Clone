import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {List,Avatar} from 'react-native-paper';


function ChatScreen({navigation}) {  
    return (
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('Chat1')}>
          <List.Item
            title="Adit"
            titleStyle={{color: 'black'}}
            description="ayooo"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./Chat/Avatar.jpg')} size={50}/>}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chat2')}>
          <List.Item
            title="Zulham"
            titleStyle={{color: 'black'}}
            description="Oh ok zul"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./Chat/Avatar.jpg')} size={50}/>}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chat3')}>
          <List.Item
            title="Rifki"
            titleStyle={{color: 'black'}}
            description="bilang gini aja ya kira kira tugasnya apa pak?"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./Chat/Avatar.jpg')} size={50}/>}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
          <List.Item
            title="Denny"
            titleStyle={{color: 'black'}}
            description="Otw nihhh"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./Chat/Avatar.jpg')} size={50}/>}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
          <List.Item
            title="Agung"
            titleStyle={{color: 'black'}}
            description="Ok"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./Chat/Avatar.jpg')} size={50}/>}
          />
      </TouchableOpacity>

    </View>
  );
}
export default ChatScreen;
