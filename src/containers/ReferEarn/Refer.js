import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import color from '../../common/color';
import Button from '../../components/Button';

const Refer = () => {
  return (
    <>
      <View style={{backgroundColor: color.white,flex:1}}>
        <View style={{backgroundColor: 'rgba(83, 177, 117, 0.7)'}}>
          <View style={styles.container}>
            <Image
              source={require('../../assets/images/left-arrow.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Refer and Earn</Text>
          </View>
          <View style={styles.headContainer}>
            <View style={{width: '50%'}}>
              <Text style={styles.headText}>
                Invite your friend and get $100 each
              </Text>
              <Text style={styles.headKM}>Know More</Text>
            </View>
            <Image
              source={require('../../assets/images/refer-and-earn.png')}
              style={styles.image}
            />
          </View>
        </View>
        <Text style={[styles.earnHeading, {paddingLeft: 20, paddingTop: 20}]}>
          Your invites
        </Text>
        <View style={styles.earnContainer}>
          <View style={styles.earnDetails}>
            <View>
              <Text style={[styles.earnHeading, {color: color.primary}]}>
                $1000
              </Text>
              <Text style={styles.earnText}>Earned</Text>
            </View>
            {/* <View></View> */}
            <View
              style={{
                borderLeftWidth: 1,
                borderLeftColor: '#E2E2E2',
                paddingHorizontal: 50,
              }}>
              <Text style={styles.earnHeading}>$1000</Text>
              <Text style={styles.earnText}>Pending</Text>
            </View>
          </View>
          <Text style={styles.earnHeading}>See All</Text>
        </View>
        <View style={styles.codeContainer}>
          <Text style={[styles.earnText, {fontSize: 20, paddingLeft: 20}]}>
            Your referral code
          </Text>
          <View style={styles.row}>
            <Text style={styles.earnHeading}>G9XM0</Text>
            <Image
              source={require('../../assets/images/copy.png')}
              style={styles.image}
            />
          </View>
        </View>
        <Button title="Share Code" />
      </View>
    </>
  );
};

export default Refer;
const styles = StyleSheet.create({
  container: {
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    marginHorizontal: 25,
  },
  text: {
    fontFamily: 'Alata',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: 5,
    alignItems: 'center',
    color: color.black,
  },
  headContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
  },
  headText: {
    fontFamily: 'Alata',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 28,
    textAlign: 'left',
    color: color.black,
  },
  headKM: {
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'left',
    color: '#0075FF',
  },
  image: {
    // width: 219,
    right: 0,
  },
  earnContainer: {
    backgroundColor: color.white,
    elevation: 2,
    padding: 20,
    margin: 20,
  },
  earnDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 20,
    borderRadius: 5,
  },
  earnHeading: {
    fontFamily: 'Alata',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    // lineHeight: 18,
    color: color.black,
  },
  earnText: {
    fontFamily: 'Alata',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    paddingTop: 5,
  },
  codeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.productBg,
    margin: 20,
    borderRadius: 20,
    marginTop: '30%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
