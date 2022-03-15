import React from 'react';
import {ScrollView, View} from 'react-native';
import color from '../../common/color';
import Banner from './Banner';
import Categories from './Categories';
import NewArrival from './NewArrival';
import OfferBanner from './OfferBanner';
import ProductOffer from './ProductOffer';
import SearchBar from './SearchBar';

const Home = () => {
  return (
    <>
      <ScrollView style={{marginBottom: 60, backgroundColor: color.white}}>
        <SearchBar />
        <OfferBanner />
        <ProductOffer />
        <Categories />
        <Banner />
        <NewArrival />
      </ScrollView>
    </>
  );
};

export default Home;
