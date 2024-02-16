import {useState} from 'react';
import {getHeight, getWidth, styles, validateForm} from '../../utils';
import {Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import Controller from './controller';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomDropdown from '../../components/CustomDropdown';
const TAG = 'Page1 :-';
const Page1 = ({navigation,route}) => {
  const {name, setName, gender, setGender, age, setAge, required, validated} =
    Controller(route);

  const handleNext = () => {
    navigation.navigate('Page2', {name, gender, age, required,reset:true});
  };

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
          {required['name'] === 'required' ? 'Name* :' : 'Name :'}
        </Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
          placeholder={'Enter your name...'}
          placeholderTextColor="rgba(255,255,255, 0.5)"
        />
        <Text
          style={{
            color: 'white',
            marginBottom: getHeight(1),
            fontWeight: '700',
            fontSize: getWidth(4.2),
          }}>
          {required['name'] === 'required' ? 'Age* :' : 'Age :'}
        </Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={text => setAge(text)}
          placeholder="Enter your age..."
          keyboardType="numeric"
          placeholderTextColor="rgba(255,255,255, 0.5)"
        />
        <View style={{marginLeft: getWidth(2), marginTop: getHeight(0.5)}}>
          <CustomDropdown
            label="Gender"
            items={['Male', 'Female', 'Nonbinary']}
            onItemsSelect={gen => setGender(gen)}
            AddItem={false}
            search={false}
            value={gender}
          />
        </View>
      </View>

      <TouchableOpacity
        disabled={!validated}
        style={[styles.button, {opacity: validated ? 1 : 0.5}]}
        onPress={() => handleNext()}>
        <Text
          style={{
            color: 'black',
            fontWeight: '700',
            fontSize: getWidth(4.5),
            letterSpacing: 1,
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page1;
