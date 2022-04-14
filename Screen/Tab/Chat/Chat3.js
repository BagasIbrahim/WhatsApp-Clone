import React from 'react';
import { StyleSheet,View,ImageBackground } from 'react-native';
import { Appbar, Text, Avatar} from 'react-native-paper';

function Chat3({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack('ChatScreen') } />
        <Avatar.Image size={50} source={require('./Avatar.jpg')} />
        <Appbar.Content title="Rifki" subtitle="Online" />
        <Appbar.Action icon="video" onPress={() => {}} />
        <Appbar.Action icon="phone" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>


      <View style={{flex : 1}}>
      <ImageBackground style={{flex : 1}} source={require('./bg.jpg')}>
        <Text style={styles.container2}>Di suruh japri ki abo</Text>
        <Text style={styles.container}>Japri gimana?</Text>
        <Text style={styles.container2}>Liat grup dah</Text>
        <Text style={styles.container}>ya iya ngomong gimana</Text>
        <Text style={styles.container}>bilang gini aja ya kira kira tugasnya apa pak?</Text>
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

export default Chat3;