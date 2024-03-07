//import React from 'react';
import { useFormContext } from 'react-hook-form';

interface TextFieldProps {
  label: string;
  id: string;
  type: string;
  validationRules: Record<string, unknown>;
}

const TextField: React.FC<TextFieldProps> = ({ label, id, type, validationRules }) => {
  const { register, formState: { errors } } = useFormContext();
  console.log(validationRules);
  console.log(errors);

  return (
    <div style={{ marginBottom: errors?.[id] ? '8px' : '29px' }}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        {...register(id, validationRules)}
      />
      <div>
    {errors?.[id] && <p className='Error-message'>{errors[id]?.message?.toString()}</p>}</div>
    </div>
  );
};

export default TextField;
