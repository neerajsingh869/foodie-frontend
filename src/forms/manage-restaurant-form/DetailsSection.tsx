import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const DetailsSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="font-bold text-2xl">Details</h2>
        <p className="text-sm">Enter the details about your restaurant</p>
      </div>
      <FormField
        control={control}
        name="restaurantName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} className="bg-background" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex flex-col md:flex-row gap-4">
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input {...field} className="bg-background" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input {...field} className="bg-background" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={control}
        name="deliveryPrice"
        render={({ field }) => (
          <FormItem className="w-[100%] md:w-80">
            <FormLabel>Delivery Price (₹)</FormLabel>
            <FormControl>
              <Input {...field} className="bg-background" placeholder="2.50" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="estimatedDeliveryTime"
        render={({ field }) => (
          <FormItem className="w-[100%] md:w-80">
            <FormLabel>Estimated Delivery Time (in minutes)</FormLabel>
            <FormControl>
              <Input {...field} className="bg-background" placeholder="30" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default DetailsSection;
