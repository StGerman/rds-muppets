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
var GirlPage = require('./GirlPage');

// GirlPage ==================================

var GirlPage = React.createClass({
  render: function() {
    var girl = {
      "id":4,
      "slug":"1013a47",
      "nickname":"Susan",
      "photo_url":"http://goldengirls.ru/upload/iblock/5ad/gallery4.jpg",
      "created_at":"2016-12-10T13:56:58.673Z",
      "updated_at":"2016-12-10T13:56:58.673Z",
      "emojis_count":null
    };

    return (
      <View style={styles.contentContainer}>
        <Image
          style={{
            width: 255, 
            height: 378,
          }}
          source={{uri: 'https://pbs.twimg.com/media/ChyDSe5XAAEIIG2.jpg'}}
        />
        <Text style={styles.name}>{girl.nickname}</Text>
        <Text>Лайкнули {girl.emojis_count} раз</Text>
        <View>
          <TouchableOpacity onPress={this._onPressQRCode}>
            <Image />
          </TouchableOpacity>
        </View>
      </View>

    );
  },
});

// --- GirlPage ==================================

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
    fontSize: 19,
    fontWeight: 'bold',
    color: 'red'
  }
});

AppRegistry.registerComponent('qrtest', () => GirlPage);