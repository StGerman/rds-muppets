'use strict';

var React = require('react'); 

var {
  View,
  Text,
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
    // fetch(link)
    //   .then(response => response.text())
    //   .then(data => {
    //     var raiting = JSON.parse(data);

    //     this.setState({raiting});
    //   })
    //   .catch((error) => {
    //     console.warn(error);
    //   });

    const raiting = [
      {
        "emojis_today":0,
        "id":5,
        "nickname":"freegan"
      },{
        "emojis_today":0,
        "id":1,
        "nickname":"tacos"
      },{
        "emojis_today":0,
        "id":2,
        "nickname":"semiotics"
      },{
        "emojis_today":0,
        "id":4,
        "nickname":"mlkshk"
      },{
        "emojis_today":0,
        "id":3,
        "nickname":"+1"
      }
    ]; 

    this.setState({raiting});
  },

  render: function() {
    var rows = [
      <View>
        <Text style={styles.name}>Имя Гостя</Text>
        <Text style={styles.emojis_today}>Кол-во лайков</Text>
      </View>  
    ];
    this.state.raiting.forEach(function(item, i) {
      rows.push(
        <View style={styles.emojiContainer} key={i}>
          <Text style={styles.name}>{item.nickname}</Text>
          <Text style={styles.emojis_today}>{item.emojis_today}</Text>
        </View>  
      );
    });
    return (
      <View style={styles.contentContainer}>
        <Text>Рейтинг гостей</Text>
        {rows}
      </View>
    );
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
  emojiContainer: {
    flexDirection: 'row'
  }
});

module.exports = Raiting;