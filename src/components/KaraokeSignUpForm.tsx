import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import TextField from './TextField';
import SelectField from './SelectField';

interface FormInputs {
  name: string;
  song: string;
}

const KaraokeSignUpForm: React.FC = () => {
  const methods = useForm<FormInputs>();

  const [message, setMessage] = useState<string>("");

  const onSubmit = (data: FormInputs) => {
    console.log(data); // Here, you can send the form data to your server
    setMessage("Kiitos ilmoittautumisesta");
    setTimeout(() => {
      methods.reset(); // Reset form after submission
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
            label="Nimi tai nimimerkki*"
            id="name" 
            type="text" 
            validationRules={{ required: 'Lisää nimi tai nimimerkki' }} 
          />
          <SelectField
            label="Biisi*"
            id="song"
            options={songOptions}
            validationRules={{ required: 'Valitse biisi' }}
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
