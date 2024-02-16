import { Alert, Dimensions, StyleSheet } from "react-native";

const {width,height} = Dimensions.get('screen');

export const getWidth =(percentage)=>{
  return (width/100)*percentage
}
export const getHeight =(percentage)=>{
  return (height/100)*percentage
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:getWidth(5),
      justifyContent: 'space-between',
      backgroundColor:'#24293e',
      paddingVertical: getHeight(5),
      paddingTop:getHeight(5)
    },
    input: {
      height: getHeight(6),
      borderColor: 'white',
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: getWidth(2),
      borderRadius:getWidth(1.5),
      color:'white',
      marginLeft:getWidth(2),
      fontSize:getWidth(4),
    },
    button: {
      width:getWidth(70),
      backgroundColor: '#DDDDDD',
      padding: getHeight(2),
      alignItems: 'center',
      alignSelf:'center',
      marginTop: getHeight(2.5),
      borderRadius: getWidth(8)
    },
  });
  const validateField = (field, value,required) => {

    return required[field] === 'required' ? value.trim() !== '' : true;
  };
  
  export const validateForm = (fields,values,required) => {
    for (const field of fields) {
      console.log('required:-',required[field],values[field].trim() !== '');
      if (!validateField(field, values[field],required)) {
        return false;
      }
    }
    return true;
  };

  export const timeOut = (navigation, timer) => {
    console.log('timer started', timer);
    const timeoutId = setTimeout(() => {
      console.log('timer ended');
      
      Alert.alert('Alert', 'Session timed out.', [
        { text: 'OK', onPress: () => navigation.navigate('Page1', { reset: true }) },
      ]);
    }, timer * 1000);
  };
  