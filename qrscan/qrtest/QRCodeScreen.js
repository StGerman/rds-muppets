'use strict';

var React = require('react');

var {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  VibrationIOS,
} = require('react-native');

import Camera from 'react-native-camera';

var GirlPage = require('./GirlPage');

var QRCodeScreen = React.createClass({

  propTypes: {
    onSucess: React.PropTypes.func,
    onCancel: React.PropTypes.func
  },

  _onBarCodeRead: function(result) {
    var $this = this;

    if (this.barCodeFlag) {
      this.barCodeFlag = false;

      VibrationIOS.vibrate();
      $this.props.navigator.push({
        component: GirlPage,
        title: 'GirlPage',
        passProps: {
          girls: result.data
        }
      });
    }
  },

  render: function() {
    var cancelButton = null;
    this.barCodeFlag = true;

    return (
      <Camera onBarCodeRead={this._onBarCodeRead} style={styles.camera}>
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle}/>
        </View>
        {cancelButton}
      </Camera>
    );
  },
});

var CancelButton = React.createClass({
  render: function() {
    return (
      <View style={styles.cancelButton}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.cancelButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  },
});

var styles = StyleSheet.create({

  camera: {
    height: 568,
    alignItems: 'center',
  },

  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },

  cancelButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 15,
    width: 100,
    bottom: 10,
  },
  cancelButtonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#0097CE',
  },
});

module.exports = QRCodeScreen;