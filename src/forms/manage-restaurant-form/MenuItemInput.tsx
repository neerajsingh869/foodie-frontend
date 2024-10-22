import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type Props = {
  index: number;
  removeItem: () => void;
};

const MenuItemInput = ({ index, removeItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="flex gap-2 items-end">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">Name</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Rajma Chawal" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">Price (₹)</FormLabel>
            <FormControl>
              <Input {...field} placeholder="250" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button className="self-end" variant="destructive" onClick={removeItem}>
        Remove
      </Button>
    </div>
  );
};

export default MenuItemInput;
