import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const PhotoScreen = ({route, navigation}) => {

    const {image_url} = route.params;
    return (
        <View style={styles.imageContainer}>
            <Image
                resizeMode="contain"
                source={{uri: image_url}} style={styles.image}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});


export default PhotoScreen;
