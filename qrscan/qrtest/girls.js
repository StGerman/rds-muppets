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
    // fetch(link)
    //   .then(response => response.text())
    //   .then(data => {
    //     var raiting = JSON.parse(data);

    //     this.setState({raiting});
    //   })
    //   .catch((error) => {
    //     console.warn(error);
    //   });

    const girls = [{
      "id": 4,
      "slug": "b3f8947",
      "nickname": "Susan",
      "photo_url": "https://goldengirls.ru/upload/iblock/5ad/gallery4.jpg",
      "created_at": "2016-12-10T22:35:19.199Z",
      "updated_at": "2016-12-10T22:35:19.199Z",
      "emojis_count": 6
    },
    {
      "id": 5,
      "slug": "1134c8d",
      "nickname": "Jessica",
      "photo_url": "https://goldengirls.ru/upload/iblock/734/gallery5.jpg",
      "created_at": "2016-12-10T22:35:19.204Z",
      "updated_at": "2016-12-10T22:35:19.204Z",
      "emojis_count": 7
    },
    {
      "id": 2,
      "slug": "1ca59b2",
      "nickname": "Michelle",
      "photo_url": "https://goldengirls.ru/upload/iblock/4c6/gallery2.jpg",
      "created_at": "2016-12-10T22:35:19.191Z",
      "updated_at": "2016-12-10T22:35:19.191Z",
      "emojis_count": 8
    },
    {
      "id": 1,
      "slug": "cccca0a",
      "nickname": "Alisa",
      "photo_url": "https://goldengirls.ru/upload/iblock/f3d/alisa.jpg",
      "created_at": "2016-12-10T22:35:19.186Z",
      "updated_at": "2016-12-10T22:35:19.186Z",
      "emojis_count": 14
    },
    {
      "id": 3,
      "slug": "b5acdb6",
      "nickname": "Andrea",
      "photo_url": "https://goldengirls.ru/upload/iblock/217/gallery3.jpg",
      "created_at": "2016-12-10T22:35:19.195Z",
      "updated_at": "2016-12-10T22:35:19.195Z",
      "emojis_count": 15
    }];

    this.setState({girls});
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