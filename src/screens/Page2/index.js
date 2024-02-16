import {useState} from 'react';
import {getHeight, getWidth, styles, validateForm} from '../../utils';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Controller from './Controller';
import CustomDropdown from '../../components/CustomDropdown';

const Page2 = ({navigation, route}) => {
  const {
    profession,
    setProfession,
    services,
    setServices,
    required,
    validated,
  } = Controller(route);
  const handleNext = () => {
    navigation.navigate('Page3', {...route.params, profession, services});
  };
  return (
    <View style={styles.container}>
      <View>
        <CustomDropdown
          label="Profession"
          items={['Owner', 'Agent', 'Buyer', 'Seller']}
          onItemsSelect={gen => setProfession(gen)}
          AddItem={true}
          search={true}
          value={profession}
        />
        <View style={{marginTop: getHeight(2)}}>
          <CustomDropdown
            label="What services do you need?"
            items={[
              'Own a house',
              'Rent a house',
              'Buy a land',
              'Sell a property',
            ]}
            onItemsSelect={gen => setServices(gen)}
            AddItem={true}
            search={true}
            value={services}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={[styles.button, {width:getWidth(42.5)}]}
          onPress={() => navigation.goBack()}>
          <Text
            style={{
              color: 'black',
              fontWeight: '700',
              fontSize: getWidth(4.5),
              letterSpacing: 1,
            }}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!validated}
          style={[styles.button, {opacity: validated ? 1 : 0.5,width:getWidth(42.5)}]}
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
    </View>
  );
};

export default Page2;
