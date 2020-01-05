import React,{Component} from 'react';
import { View, Text, StyleSheet, TextInput, Button,Image,Platform,  } from 'react-native';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import { NavigationEvents } from 'react-navigation';
import Dashboard from 'react-native-dashboard'

const items = [
  { name: 'Login', background: '#3498db', icon: 'user', routeName:'HomeScreen' },
  { name: 'KEC Katihar', background: '#3498db', icon: 'gratipay' },
  { name: 'About', background: '#3489db', icon: 'heart' },
  { name: 'Social Network', background: '#3489db', icon: 'users' },
];

export default class Login extends Component {
  _card = el => {
    console.log('Card: ' + el.name)
  };
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.kec}> Katihar Engineering College, Katihar</Text>
        <Dashboard items={items} background={true} card={this._card} column={2} />
      </View>
    );
  }
}
Login.navigationOptions = {
    headerTitle: 'Katihar Engg. College, Katihar',
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }; 
  

const styles = StyleSheet.create({
  screen: {
    
    flex: 1,
    padding: 10,
    
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  kec:{
    padding:20,
    paddingLeft: 45,
    fontSize:17,
    fontWeight:'900',
  }

 
});


