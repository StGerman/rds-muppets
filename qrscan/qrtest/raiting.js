'use strict';

var React = require('react'); 

var {
  View,
  Text,
  ScrollView,
  StyleSheet
} = require('react-native');

var URL = 'https://128.199.44.75/rating';

var Raiting = React.createClass({
  getInitialState() {
    return {
      raiting: []
    };
  },

  componentDidMount: function(){ 
    this.gerRaiting(URL); 
  },

  gerRaiting: function(link){
    fetch(link)
      .then(response => response.text())
      .then(data => {
        var raiting = JSON.parse(data);

        this.setState({raiting});
      })
      .catch((error) => {
        console.warn(error);
      });
  },

  render: function() {
    var rows = [];
    this.state.raiting.forEach(function(item, i) {
      rows.push(
        <View style={styles.guestRow} key={i}>
          <Text style={styles.name}>{item.nickname}</Text>
          <Text style={styles.emojis_count}>😍 {item.emojis_today}</Text>
        </View>  
      );
    });
    return (
      <View style={styles.contentContainer}>
        <Text style={{
          marginBottom: 30,
          marginLeft: 90,
          fontWeight: 'bold'
        }}>Рейтинг гостей</Text>
        <ScrollView>
          {rows}
        </ScrollView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 50
  },
  emojiContainer: {
    flexDirection: 'row'
  },
  guestRow: {
    height: 35,
    marginBottom: 30
  },
  name: {
    marginBottom: 0,
    fontWeight: 'bold'
  },
  emojis_count: {
    color: 'red',
    marginBottom: 5,
    fontWeight: 'bold'
  }
});

module.exports = Raiting;