import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';
import TaskPage from './pages/TaskPage';
import CongratsPage from './pages/CongratsPage';
import ResultPage from './pages/ResultPage';
import DonateConfirmationPage from './pages/DonateConfirmationPage';

const navigator = createStackNavigator(
  {
    LoginPage: {
      screen: LoginPage,
      navigationOptions: ({ navigation }) => ({
      title: "Login",
    }),
  },
    HomePage: {
      screen: HomePage,
      navigationOptions: ({ navigation }) => ({
        title: "Home",
      }),
    },
    QuestionPage: {
      screen: QuestionPage,
      navigationOptions: ({ navigation }) => ({
        title: "How's your feeling today?",
      }),
    },
    TaskPage: {
      screen: TaskPage,
      navigationOptions: ({ navigation }) => ({
        title: "Task",
      }),
    },
    CongratsPage: {
      screen: CongratsPage,
      navigationOptions: ({ navigation }) => ({
        title: "Well Done!",
      }),
    },
    ResultPage: {
      screen: ResultPage,
      navigationOptions: ({ navigation }) => ({
        title: "Congrats!",
      }),
    },
    DonateConfirmationPage: {
      screen: DonateConfirmationPage,
      navigationOptions: ({ navigation }) => ({
        title: "Donation Sucess",
      }),
    },
  },
  {
    initialRouteName: 'LoginPage',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
