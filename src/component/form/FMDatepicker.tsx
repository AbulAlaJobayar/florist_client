import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";
type TDatePickerProps = {
  name: string;
  label?: string;
};
const FMDatepicker = ({ name, label }: TDatePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large" style={{ width: "100%" }}  />
            {error && <small style={{ color: "red" }}>{error?.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default FMDatepicker;
