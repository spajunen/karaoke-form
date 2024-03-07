import { useFormContext } from "react-hook-form";

interface RadioProps {
    value: string;
    id: string;
    validationRules: Record<string, unknown>;
    checked?: boolean;
  }
  
  const Radio: React.FC<RadioProps> = ({ value, id, validationRules, checked }) => {
    const { register } = useFormContext();

    return (
      <div className="radio-container">
          <input 
          type="radio" 
          value={value} 
          id={id}
          checked={checked}
          {...register(id, validationRules)}
          />
          <label htmlFor={id}>{value}</label>
      </div>
    );
  };

  interface RadioGroupProps {
    id: string;
    label: string;
    validationRules: Record<string, unknown>;
  }

  const RadioGroup: React.FC<RadioGroupProps> = ({ id, label, validationRules }) => {
    const { formState: { errors } } = useFormContext();

    return (
      <div style={{ marginBottom: errors?.[id] ? '8px' : '29px' }}>
      <p className="radio-label">{label}</p>
        <div className="radio-group">
        <Radio id={id} value="-2" validationRules={validationRules} />
        <Radio id={id} value="-1" validationRules={validationRules} />
        <Radio id={id} value="0" validationRules={validationRules} />
        <Radio id={id} value="+1" validationRules={validationRules} />
        <Radio id={id} value="+2" validationRules={validationRules} />
        </div>
        <div>
          {errors?.[id] && <p className='error-message'>{errors[id]?.message?.toString()}</p>}
        </div>
      </div>
    );
  }

  export default RadioGroup;




