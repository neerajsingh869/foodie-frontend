import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
  const { control, register } = useFormContext();

  const fileRef = register("file");

  return (
    <>
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
        render={() => (
          <FormItem className="w-[100%] md:w-80">
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input 
                type="file" 
                className="bg-white"
                {...fileRef} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default ImageSection;
