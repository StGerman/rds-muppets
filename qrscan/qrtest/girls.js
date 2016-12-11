'use strict';

var React = require('react'); 

var {
  View,
  Text,
  Image,
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
    var rows = [
      <View>
        <Text style={styles.name}>Девушка</Text>
        <Text style={styles.photo_url}>Фото</Text>
        <Text style={styles.emojis_today}>Кол-во лайков</Text>
      </View>  
    ];
    this.state.girls.forEach(function(item, i) {
      rows.push(
        <View style={styles.emojiContainer} key={i}>
          <Text style={styles.name}>{item.nickname}</Text>
          <Image
            style={{
              width: 100, 
              height: 100,
            }}
            source={{uri: item.photo_url}}
          />
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

module.exports = GirlsList;