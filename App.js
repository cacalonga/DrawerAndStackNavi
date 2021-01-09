import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from 'react-native-screens';
enableScreens();

import Screens from "./navigation/Screens";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <Screens
            initialRootNameKey="DrawerStack"
            initialRootNamePanel="HomeStack"
            initialRootNameChild=""
          />
        </View>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});