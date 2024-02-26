import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disable?:boolean
};
const FMInput = ({ type, name, label,disable }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} disabled={disable} />
            {error && <small style={{color:'red'}}>{error?.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
}; 

export default FMInput;
