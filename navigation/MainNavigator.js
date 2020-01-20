import React, { Component } from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  YellowBox,
  Dimensions,
  Button
} from "react-native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import AboutAppScreen from "../screens/AboutAppScreen";
import CollegeScreen from "../screens/CollegeScreen";
import DeveloperScreen from "../screens/DeveloperScreen";

import Screen3 from "../screens/Screen3";
import SideMenu from "../sidemenu";
import AddRoleScreen from "../screens/AddRoleScreen";
import SignUp from "../screens/SignUp";
import ActionBarImage from "../components/ActionBarImage";
import WelcomeUserScreen from "../screens/FacultyWelcomeScreen";
import AddStudentScreen from "../screens/AddStudentScreen";
import AttendanceScreen from "../screens/AttendanceScreen";
import AddAttendanceScreen from "../screens/AddAttendanceScreen";
import FacultyWelcomeScreen from "../screens/FacultyWelcomeScreen";

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require("../images/drawer.png")}
            style={{ width: 25, height: 25, marginLeft: 6 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const FirstActivity_StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Katihar Engg. College",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <ActionBarImage />,
      headerStyle: {
        backgroundColor: "#09C5F7"
      },
      headerTintColor: "#fff"
    })
  }
});
const LoginScreen_StackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Katihar Engg. College",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <ActionBarImage />,
      headerStyle: {
        backgroundColor: "#09C5F7"
      },
      headerTintColor: "#fff"
    })
  },
  FacultyWelcome: {
    screen: FacultyWelcomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Katihar Engg. College",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <ActionBarImage />,
      headerStyle: {
        backgroundColor: "#09C5F7"
      },
      headerTintColor: "#fff"
    })
  },
  AddRole: {
    screen: AddRoleScreen
    /*navigationOptions: ({ navigation }) => ({
      title: "Katihar Engg. College",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <ActionBarImage />,
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "black"
    })*/
  },

  AddStudents: {
    screen: AddStudentScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Katihar Engg. College",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <ActionBarImage />,
      headerStyle: {
        backgroundColor: "#09C5F7"
      },
      headerTintColor: "#fff"
    })
  }
});
const Attendance_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  WelcomeUser: {
    screen: WelcomeUserScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Katihar Engg. College",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <ActionBarImage />,
      headerStyle: {
        backgroundColor: "#09C5F7"
      },
      headerTintColor: "#fff"
    })
  },
  Attendance: {
    screen: AttendanceScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Katihar Engg. College",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <ActionBarImage />,
      headerStyle: {
        backgroundColor: "#09C5F7"
      },
      headerTintColor: "#fff"
    })
  },
  AddAttendance: {
    screen: AddAttendanceScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Katihar Engg. College",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <ActionBarImage />,
      headerStyle: {
        backgroundColor: "#09C5F7"
      },
      headerTintColor: "#fff"
    })
  }
});

const DeveloperScreen_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Developers: {
    screen: DeveloperScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Katihar Engg. College",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <ActionBarImage />,
      headerStyle: {
        backgroundColor: "#09C5F7"
      },
      headerTintColor: "#fff"
    })
  }
});
const CollegeScreen_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  KEC_Katihar: {
    screen: CollegeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Katihar Engg. College",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <ActionBarImage />,
      headerStyle: {
        backgroundColor: "#09C5F7"
      },
      headerTintColor: "#fff"
    })
  }
});
const AboutAppScreen_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  AboutApp: {
    screen: AboutAppScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Katihar Engg. College",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <ActionBarImage />,
      headerStyle: {
        backgroundColor: "#09C5F7"
      },
      headerTintColor: "#fff"
    })
  }
});

const SignUp_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  SignUp: {
    screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      title: "Katihar Engg. College",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <ActionBarImage />,
      headerStyle: {
        backgroundColor: "#09C5F7"
      },
      headerTintColor: "#fff"
    })
  }
});

const Drawer = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: { screen: FirstActivity_StackNavigator },
    NavScreen2: { screen: LoginScreen_StackNavigator },
    NavScreen3: { screen: SignUp_StackNavigator },
    NavScreen4: { screen: DeveloperScreen_StackNavigator },
    NavScreen5: { screen: CollegeScreen_StackNavigator },
    NavScreen6: { screen: AboutAppScreen_StackNavigator },

    NavScreen7: { screen: Attendance_StackNavigator }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get("window").width - 120
  }
);

export default createAppContainer(Drawer);
