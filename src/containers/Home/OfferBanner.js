import React, {useRef} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');

const offer = [
  {id: 1, imgUrl: require('../../assets/images/banner-1.png')},
  {id: 2, imgUrl: require('../../assets/images/banner-1.png')},
  {id: 3, imgUrl: require('../../assets/images/banner-1.png')},
];

const renderItem = ({item, index}, parallaxProps) => {
  return (
    <View style={styles.item}>
      {/* <Text>{JSON.stringify(item.imgUrl)}</Text> */}
      <ParallaxImage
        source={item.imgUrl}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        fadeDuration={500}
        {...parallaxProps}
      />
    </View>
  );
};
const OfferBanner = () => {
  const carouselRef = useRef(null);

  return (
    <>
      <View style={styles.container}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 90}
          data={offer}
          renderItem={renderItem}
          hasParallaxImages={true}
          loop={true}
          autoplay={true}
        />
      </View>
    </>
  );
};

export default OfferBanner;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 90,
    height: screenWidth - 300,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
