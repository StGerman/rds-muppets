'use strict';

var React = require('react');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  NavigatorIOS,
} = require('react-native');

var QRCodeScreen = require('./QRCodeScreen');

var qrtest = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Index',
          backButtonTitle: 'Back',
          component: Index,
        }}
      />
    );
  }
});

var Index = React.createClass({

  render: function() {
    return (
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={this._onPressQRCode}>
          <Image
            style={{
              width: 50, 
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={{uri: 'https://storiesforsunday.files.wordpress.com/2014/06/smirking-emoji.jpeg'}}
          /><Text>Прочитать QR code </Text>
        </TouchableOpacity>
      </View>
    );
  },

  _onPressQRCode: function() {
    this.props.navigator.push({
      component: QRCodeScreen,
      title: 'QRCode',
      passProps: {
        onSucess: this._onSucess,
      },
    });
    this.props.navigator.pop();
  },

  _onSucess: function(result) {
    console.log('girl', result);
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: 'bold',
    color: 'red'
  }
});

AppRegistry.registerComponent('qrtest', () => qrtest);