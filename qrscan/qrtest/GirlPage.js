'use strict';

var React = require('react'); 

var {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} = require('react-native');

var raiting = require('./raiting');
var girls = require('./girls');

var GirlPage = React.createClass({
  getInitialState() {
    return {
      nickname: 'Кристина',
      photo_url: 'https://pbs.twimg.com/media/ChyDSe5XAAEIIG2.jpg',
      emojis_count: '83'
    };
  },

  render: function() {
    fetch('https://128.199.44.75/girls/1134c8d/emoji/new.json')
      .then(response => response.text())
      .then(data => {
        var girl = JSON.parse(data);

        this.setState({
          nickname: girl.nickname,
          photo_url: girl.photo_url,
          emojis_count: girl.emojis_count
        })
      })
      .catch((error) => {
        console.warn(error);
      });

    return (
      <View style={styles.contentContainer}>
        <Image
          style={{
            width: 380, 
            height: 200,
          }}
          source={{uri: this.state.photo_url}}
        />
        <Text style={styles.name}>{this.state.nickname}</Text>
        <Text>Лайков: {this.state.emojis_count}</Text>
        <View style={styles.emojiContainer}>
          <TouchableOpacity onPress={this._love}>
            <Text style={styles.emojiItem}>😍</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._hate}>
            <Text style={styles.emojiItem}>😡</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._crazy}>
            <Text style={styles.emojiItem}>😜</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._surprized}>
            <Text style={styles.emojiItem}>😳</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          marginTop: 20
        }}>
          <TouchableOpacity onPress={this._goToGuests}>
            <Text style={styles.raitings}>Гости</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._goToGirls}>
            <Text style={styles.raitings}>Девушки</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },

  _love: function() {
    // this.state.emojis_count = 1
  },

  _goToGuests: function() {
    this.props.navigator.push({
      component: raiting,
      title: 'raiting'
    });
  },

  _goToGirls: function() {
    this.props.navigator.push({
      component: girls,
      title: 'girls'
    });
  }
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
  },
  emojiContainer: {
    marginTop: 10,
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  emojiItem: {
    height: 55,
    fontSize: 50
  },
  raitings: {
    fontSize: 14,
    fontWeight: '200'
  }
});

module.exports = GirlPage;