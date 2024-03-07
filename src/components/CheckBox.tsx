import { useFormContext } from 'react-hook-form';

interface CheckBoxProps {
    label: string;
    id: string;
    validationRules: Record<string, unknown>;
  }
  
const CheckBox: React.FC<CheckBoxProps> = ({ label, id, validationRules }) => {
    const { register, formState: { errors } } = useFormContext();

  return (
    <div style={{ marginBottom: errors?.[id] ? '8px' : '29px' }}>
    <div className='checkbox'>
        <input type='checkbox' {...register(id, validationRules)} />
        <label>{label}</label>
      </div>
      <div>
        {errors?.[id] && <p className='error-message'>{errors[id]?.message?.toString()}</p>}
      </div>
    </div>
  );
};

export default CheckBox;