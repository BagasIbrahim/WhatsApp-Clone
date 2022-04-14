import React from 'react';
import { StyleSheet,View,ImageBackground } from 'react-native';
import { Appbar, Text, Avatar} from 'react-native-paper';

function Chat1({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack('ChatScreen') } />
        <Avatar.Image size={50} source={require('./Avatar.jpg')} />
        <Appbar.Content title="Adit" subtitle="Online" />
        <Appbar.Action icon="video" onPress={() => {}} />
        <Appbar.Action icon="phone" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>


      <View style={{flex : 1}}>
      <ImageBackground style={{flex : 1}} source={require('./bg.jpg')}>
        <Text style={styles.container}>beli batagor</Text>
        <Text style={styles.container2}>dimana</Text>
        <Text style={styles.container}>dirumah lu</Text>
        <Text style={styles.container2}>ayooo</Text>
      </ImageBackground>  
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container : {
    // flex: 0.3,
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    marginRight: 'auto',
    // borderWidth : 5,
    borderRadius: 20
  },
  container2 : {
    // flex: 0.3,
    justifyContent: "space-between",
    backgroundColor: "#C0EDA6",
    padding: 20,
    margin: 10,
    marginLeft: 'auto',
    // borderWidth : 5,
    textAlign : 'right',
    borderRadius: 20
  }
});

export default Chat1;