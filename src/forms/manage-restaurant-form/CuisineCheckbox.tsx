import { ControllerRenderProps, FieldValues } from "react-hook-form";

import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  cuisine: string;
  field: ControllerRenderProps<FieldValues, "cuisines">;
};

const CousineCheckbox = ({ cuisine, field }: Props) => {
  return (
    <FormItem className="flex flex-row-reverse items-center gap-2 space-y-0 mt-2 justify-end">
      <FormLabel>{cuisine}</FormLabel>
      <FormControl>
        <Checkbox
          className="bg-white"
          checked={field.value.includes(cuisine)}
          onCheckedChange={(checked) => {
            if (checked) {
              field.onChange([...field.value, cuisine]);
            } else {
              field.onChange(
                field.value.filter((value: string) => value !== cuisine)
              );
            }
          }}
        />
      </FormControl>
    </FormItem>
  );
};

export default CousineCheckbox;
