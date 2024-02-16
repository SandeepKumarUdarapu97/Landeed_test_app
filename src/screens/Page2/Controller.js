import {useEffect, useState} from 'react';
import { validateForm } from '../../utils';

const Controller = route => {
  const [profession, setProfession] = useState('');
  const [services, setServices] = useState('');
  const [required, setRequired] = useState({});
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    setRequired(route.params.required);
    if (route.params.reset) {
      setProfession('')
      setServices('')
    }
  }, [route]);
  useEffect(() => {
    if (
      Object.keys(required).length > 0 &&
      validateForm(
        ['profession', 'services'],
        {profession: profession, services: services},
        required,
      )
    ) {
      setValidated(true);
    }
  }, [services, profession]);
  return {
    profession,
    setProfession,
    services,
    setServices,
    required,
    validated,
  };
};

export default Controller;
