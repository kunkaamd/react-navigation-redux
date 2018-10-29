import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class LoginStatusMessage extends Component{
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          {'You are "logged in" right now'}
        </Text>
        <Button
          onPress={() =>
            this.props.dispatch(NavigationActions.navigate({ routeName: 'Profile' }))}
          title="Profile"
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(LoginStatusMessage);