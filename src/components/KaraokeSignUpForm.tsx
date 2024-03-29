import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import TextField from './TextField';
import SelectField from './SelectField';
import RadioGroup from './RadioGroup';
import CheckBox from './CheckBox';

interface FormInputs {
  name: string;
  song: string;
  soundKey: string;
  consent: boolean;
}

const KaraokeSignUpForm: React.FC = () => {
  const methods = useForm<FormInputs>();
  const [message, setMessage] = useState<string>("");

  const onSubmit = (data: FormInputs) => {
    console.log(data); 
    setMessage("Kiitos ilmoittautumisesta");
    setTimeout(() => {
      methods.reset(); 
      setMessage("");
    }, 2000);
  };

  
  const songOptions = [
    { value: 'chachacha', label: 'Käärijä - Cha Cha Cha' },
    { value: 'peggy', label: 'Samuli Edelman - Peggy' },
    { value: 'haissa', label: 'JVG - Häissä' },
    { value: 'glider', label: 'Den glider in' },
  ];

  return (
    <div>
      <h3>Ilmoittautumislomake</h3>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TextField 
            id="name" 
            label="Nimi tai nimimerkki*"
            type="text" 
            validationRules={{ required: 'Lisää nimi tai nimimerkki' }} 
          />
          <SelectField
            id="song"
            label="Biisi*"
            options={songOptions}
            validationRules={{ required: 'Valitse biisi' }}
          />
          <RadioGroup 
            id="soundKey" 
            label="Valitse sävellaji*" 
            validationRules={{ required: 'Valitse sävellaji' }}
          />
          <CheckBox 
            id="consent"
            label="Sallin tietojeni tallennuksen karaokejärjestelmään"
            validationRules={{ required: 'Hyväksy ehdot' }}
          />
          <button type="submit">
            Ilmoittaudu
          </button>
        </form>
        <p>{message}</p>  
      </FormProvider>  
    </div>
  );
};

export default KaraokeSignUpForm;
