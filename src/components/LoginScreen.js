import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class LoginScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen A
        </Text>
        <Text style={styles.instructions}>
          This is great
        </Text>
        <Button
          onPress={() => this.props.navigation.dispatch({ type: 'Login' })}
          title="Log in"
        />
      </View>
    )
  }
}

LoginScreen.navigationOptions = {
  title: 'Log In',
};

export default LoginScreen;