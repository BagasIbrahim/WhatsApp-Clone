import React from 'react';
import { Appbar,List, Avatar} from 'react-native-paper';

function SettingScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Setelan" />
      </Appbar.Header>
    
    <List.Item
      title="Bagas Maulana"
      titleStyle={{color: 'black'}}
      description="Available"
      descriptionStyle={{color: 'black'}}
      left={props => <Avatar.Image {...props} source={require('./Tab/Chat/Avatar.jpg')} size={50}/>}
      right={props => <List.Icon {...props} icon="qrcode" color='#128C7E' />}/>
    <List.Item
        title="Akun"
        titleStyle={{color: 'black'}}
        description="Privasi, keamanan, ganti nomor"
        descriptionStyle={{color: 'black'}}
        left={props => <List.Icon {...props} icon="key" />}
      />
      <List.Item
        title="Chat"
        titleStyle={{color: 'black'}}
        description="Tema, wallpaper, riwayat chat"
        descriptionStyle={{color: 'black'}}
        left={props => <List.Icon {...props} icon="chat-outline" />}
      />
      <List.Item
        title="Notifikasi"
        titleStyle={{color: 'black'}}
        description="Pesan, grup dan nada dering panggilan"
        descriptionStyle={{color: 'black'}}
        left={props => <List.Icon {...props} icon="bell" />}
      />
      <List.Item
        title="Penyimpanan dan data"
        titleStyle={{color: 'black'}}
        description="Penggunaan jaringan, unduh otomatis"
        descriptionStyle={{color: 'black'}}
        left={props => <List.Icon {...props} icon="circle-outline" />}
      />
      <List.Item
        title="Bantuan"
        titleStyle={{color: 'black'}}
        description="Pusat bantuan, hubungi kami, kebijakan privasi"
        descriptionStyle={{color: 'black'}}
        left={props => <List.Icon {...props} icon="help-circle-outline" />}
      />
      <List.Item
        title="Undang temam"
        titleStyle={{color: 'black'}}
        left={props => <List.Icon {...props} icon="account-multiple" />}
      />  
    </>
  );
}

export default SettingScreen;
