// Controller.js
import {useEffect, useState} from 'react';
import {getConfig, getSubmissions} from '../../services';
import { timeOut, validateForm } from '../../utils';
import { useNavigation } from '@react-navigation/native';

const TAG = 'page1 controller :-';

const Controller = (route) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [validated, setAValidated] = useState(false);
  const [required, setRequired] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    getConfig().then(res => {
      setRequired(res); 
    });
    getSubmissions()
  }, []);

  useEffect(()=>{
    if (Object.keys(required).length > 0 && validateForm(
      ['name', 'age', 'gender'],
      {name: name, age: age, gender: gender},
      required,
    )) {
      setAValidated(true)
    }
  },[name,gender,age,required])

  useEffect(() => {
    if (route.params && route.params.reset) {
      setName('');
      setGender('');
      setAge('')
      setAValidated(false)
      if (Object.keys(required).length > 0) {
        timeOut(navigation,required.timer*60)
      }
    }
  }, [route]);

  useEffect(()=>{
    if (Object.keys(required).length > 0) {
      timeOut(navigation,required.timer*60)
    }
  },[required])
  

  return {
    name,
    setName,
    gender,
    setGender,
    age,
    setAge,
    required,
    validated
  };
};

export default Controller;
