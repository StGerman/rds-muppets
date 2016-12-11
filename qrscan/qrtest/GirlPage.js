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

function getUrl(slug = '1134c8d') {
  if (slug.length > 8) {
    return 'welcome';
  }
  return 'https://128.199.44.75/girls/' + slug + '/emoji/new.json'
}

var URL = 'https://128.199.44.75/girls/1134c8d/emoji/new.json';

var GirlPage = React.createClass({
  getInitialState() {
    return {
      // random default data
      girl: {
        nickname: '',
        photo_url: '',
        emojis_count: ''
      }
    };
  },

  componentDidMount: function(){ 
    this.gerGirl(getUrl(this.props.girls)); 
  },

  gerGirl: function(link){
    if (link === 'welcome') {
      this.setState({
        welcome: 'Добро пожаловать!'
      })
    } else {
      fetch(link)
        .then(response => response.text())
        .then(data => {
          var girl = JSON.parse(data);
          this.setState({girl});
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  },

  render: function() {
    var welcome = false;
    var $this = this;
    
    if (this.state.welcome) {
      welcome = true;
    }

    var contentMessage = <Text></Text>;

    if (welcome) {
      contentMessage = (
        <View style={styles.contentWelcomeContainer}>
          <Text style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 45
          }}>Добро пожаловать!</Text>
        </View>
      )
    } else {
      contentMessage = (
        <View style={this.state.welcome ? styles.hidden : styles.contentContainer}>
          <Image
            style={{
              width: 380, 
              height: 450,
            }}
            source={{uri: $this.state.girl.photo_url || 'https://goldengirls.ru/upload/iblock/734/gallery5.jpg'}}
          />
          <Text style={styles.name}>{$this.state.girl.nickname}</Text>
          <View style={styles.emojiContainer}>
            <TouchableOpacity onPress={$this._love}>
              <Text style={styles.emojiItem}>❤️</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={$this._hate}>
              <Text style={styles.emojiItem}>😡</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={$this._crazy}>
              <Text style={styles.emojiItem}>😜</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={$this._surprized}>
              <Text style={styles.emojiItem}>😳</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            marginTop: 20
          }}>
            <TouchableOpacity onPress={$this._goToGuests}>
              <Text style={styles.raitings}>Гости</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={$this._goToGirls}>
              <Text style={styles.raitings}>Девушки</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    return contentMessage;
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
  hidden: {
    height: 0, 
    opacity: 0
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWelcomeContainer: {
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