'use strict';

var React = require('react'); 

var {
  View,
  Text,
  Image,
  StyleSheet
} = require('react-native');

var GirlPage = React.createClass({
  render: function() {
    var fakeGirl = {
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
          source={{uri: 'http://goldengirls.ru/upload/iblock/5a7/gallery11.jpg'}}
        />
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
  }
});

module.exports = GirlPage;