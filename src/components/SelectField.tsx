import { useFormContext } from 'react-hook-form';

interface SelectFieldProps {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  validationRules: Record<string, unknown>;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, id, options, validationRules }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div style={{ marginBottom: errors?.[id] ? '8px' : '29px' }}>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        {...register(id, validationRules)}
        defaultValue=""
      >
        <option value="" disabled hidden>Valitse alta</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <div>
      {errors?.[id] && <p className='Error-message'>{errors[id]?.message?.toString()}</p>}</div>
    </div>
  );
};

export default SelectField;
