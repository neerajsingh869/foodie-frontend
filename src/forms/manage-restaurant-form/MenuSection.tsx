import { useFieldArray, useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import MenuItemInput from "./MenuItemInput";
import { FormField, FormItem } from "@/components/ui/form";

const MenuSection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="space-y-2">
      <div>
        <h2 className="font-bold text-2xl">Menu</h2>
        <p className="text-sm">
          Create your menu and give each item a name and a price
        </p>
      </div>
      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((item, index) => (
              <MenuItemInput
                key={item.id}
                index={index}
                removeItem={() => remove(index)}
              />
            ))}
          </FormItem>
        )}
      />
      <Button type="button" onClick={() => append({ menu: "", price: "" })}>
        Add Menu Item
      </Button>
    </div>
  );
};

export default MenuSection;
