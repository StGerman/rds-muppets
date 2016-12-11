'use strict';

var React = require('react'); 

var {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} = require('react-native');

var URL = 'https://128.199.44.75/girls';

var GirlsList = React.createClass({
  getInitialState() {
    return {
      girls: []
    };
  },

  componentDidMount: function(){ 
    this.gerGirls(URL); 
  },

  gerGirls: function(link){
    fetch(link)
      .then(response => response.text())
      .then(data => {
        var girls = JSON.parse(data);

        this.setState({girls});
      })
      .catch((error) => {
        console.warn(error);
      });
  },

  render: function() {
    var rows = [];
    this.state.girls.forEach(function(item, i) {
      rows.push(
        <View style={styles.girlsRow} key={i}>
          <Text style={styles.name}>{item.nickname}</Text>
          <Text style={styles.emojis_count}>😍 {item.emojis_count}</Text>
          <Image
            style={{
              width: 300, 
              height: 300,
            }}
            source={{uri: item.photo_url}}
          />
        </View>  
      );
    });
    return (
      <View style={styles.contentContainer}>
        <Text style={{
          marginBottom: 30,
          fontWeight: 'bold'
        }}>Рейтинг девушек</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiContainer: {
    flexDirection: 'row'
  },
  girlsRow: {
    height: 305,
    marginBottom: 70
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

module.exports = GirlsList;