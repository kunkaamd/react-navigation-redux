import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class MainScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <LoginStatusMessage />
        <AuthButton />
      </View>
    )
  }
}

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default MainScreen;