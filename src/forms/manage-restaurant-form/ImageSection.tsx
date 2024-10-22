import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ImageSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="font-bold text-2xl">Image</h2>
        <p className="text-sm">
          Add an image that will be displayed on your restaurant listing in the
          search results. Adding a new image will overwrite the existing one.
        </p>
      </div>
      <FormField
        control={control}
        name="imageFile"
        render={({ field }) => (
          <FormItem className="w-[100%] md:w-80">
            <FormControl>
              <Input
                type="file"
                className="bg-white"
                accept=".jpg, .jpeg, .png"
                onChange={(event) =>
                  field.onChange(
                    event.target.files ? event.target.files[0] : null
                  )
                }
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ImageSection;
