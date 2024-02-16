import {useState} from 'react';
import {getHeight, getWidth, styles} from '../../utils';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Controller from './Controller';

const Page3 = ({navigation, route}) => {
  const {howFound, setHowFound, handleSubmit, validated,required} = Controller(route);
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: 'white',
            marginBottom: getHeight(1),
            fontWeight: '700',
            fontSize: getWidth(4.2),
          }}>
          {required['How did you find us'] === 'required'
            ? 'How did you find us?* :'
            : 'How did you find us? :'}
        </Text>
        <TextInput
        numberOfLines={4}
          style={{
            minHeight: getHeight(6),
            borderColor: 'white',
            borderWidth: 1,
            marginBottom: 16,
            paddingHorizontal: getWidth(2),
            borderRadius:getWidth(1.5),
            color:'white',
            marginLeft:getWidth(2),
            fontSize:getWidth(4),
          }}
          multiline
          value={howFound}
          onChangeText={text => setHowFound(text)}
          placeholder={'Please give your Inputs...'}
          placeholderTextColor="rgba(255,255,255, 0.5)"
        />
      </View>

      <TouchableOpacity
        disabled={!validated}
        style={[styles.button, {opacity: validated ? 1 : 0.5}]}
        onPress={() => {
          handleSubmit()
          setTimeout(() => {
            navigation.navigate('Page1',{reset:true})
          }, 500);
          }}>
        <Text
          style={{
            color: 'black',
            fontWeight: '700',
            fontSize: getWidth(4.5),
            letterSpacing: 1,
          }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page3;
