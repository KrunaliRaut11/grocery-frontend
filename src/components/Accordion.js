import React,{useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const details = [
  {
    id: '1',
    title: 'Product Detail',
    desc: 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
  },
  {
    id: '2',
    title: 'Nutritions',
    desc: 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
  },
  {
    id: '3',
    title: 'Self Life',
    desc: 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
  },
];
const Accordion = ({title, desc}) => {
  const [show, setShow] = useState(false);

  return (
    <View>

      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text style={styles.detailsTitle}>{title}</Text>
          <TouchableOpacity onPress={() => setShow(!show)}>
            {show ? (
              <Image
                style={styles.icons}
                source={require('../assets/images/down-arrow.png')}
              />
            ) : (
              <Image
                style={styles.icons}
                source={require('../assets/images/accordion.png')}
              />
            )}
          </TouchableOpacity>
        </View>
        {show && <Text style={styles.detailsDesc}>{desc}</Text>}
      </View>
    </View>
  );
};

export default Accordion;
const styles = StyleSheet.create({
  detailsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingVertical: 10,
  },
  detailsDesc: {
    fontFamily: 'Alata',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    textAlign: 'left',
  },
  detailsTitle: {
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'left',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
