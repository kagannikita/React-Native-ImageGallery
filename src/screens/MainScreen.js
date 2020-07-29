import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {setPhotosTC} from '../redux/MainScreen_reducer';

const MainScreen = (props) => {
  useEffect(() => {
    props.setPhotosTC();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderFlatListItem = (item) => {
    const {navigate} = props.navigation;
    return (
      <TouchableOpacity
        onPress={() =>
          navigate('FullSize', {
            user: item.user.name,
            image_url: item.urls.full,
          })
        }>
        <View style={styles.photoView}>
          <Image style={styles.photo} source={item.urls.regular} id={item.id} />
          <Text style={styles.photoName}>{item.alt_description}</Text>
          <Text style={styles.userName}>{item.user.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={{backgroundColor: '#fff'}}
        data={props.photos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => renderFlatListItem(item)}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  photos: state.mainPage.photos,
});

export default connect(mapStateToProps, {setPhotosTC})(MainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 5,
    paddingLeft: 5,
  },
  photoView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  photo: {
    height: 300,
    width: '100%',
  },
  photoName: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  userName: {
    fontSize: 15,
  },
});
