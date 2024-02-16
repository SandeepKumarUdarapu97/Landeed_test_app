import {useEffect, useState} from 'react';
import {submitFormData} from '../../services';
import { validateForm } from '../../utils';

const Controller = route => {
  const [howFound, setHowFound] = useState('');

  const [required, setRequired] = useState({});
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    setRequired(route.params.required);
  }, [route]);
  useEffect(() => {
    if (
      Object.keys(required).length > 0 &&
      validateForm(
        ['How did you find us'],
        {'How did you find us': howFound},
        required,
      )
    ) {
      setValidated(true);
    }
  }, [howFound]);

  const handleSubmit = () => {
    const {required, ...newData} = {...route.params, howFound};
    submitFormData(newData);
  };

  return {howFound, setHowFound, handleSubmit,validated,required};
};

export default Controller;
