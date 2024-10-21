import { useFormContext } from "react-hook-form";

import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-options-config";
import CousineCheckbox from "./CuisineCheckbox";

const CousineSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="font-bold text-2xl">Cuisines</h2>
        <p className="text-sm">
          Create a menu and give each item a name and a price
        </p>
      </div>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1">
              {cuisineList.map((cuisine, index) => (
                <CousineCheckbox key={index} cuisine={cuisine} field={field} />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CousineSection;
