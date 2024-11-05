import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const formSchema = z.object({
  searchQuery: z
    .string({
      required_error: "Restaurant name is required",
    })
    .min(1, "Restaurant name is required"),
});

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeholder: string;
  onReset?: () => void;
};

export type SearchForm = z.infer<typeof formSchema>;

const SearchBar = ({ onSubmit, placeholder, onReset }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery: "",
    },
  });

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex justify-between items-center flex-1 gap-3 border-2 rounded-full p-3 mx-5 ${
          form.formState.errors.searchQuery && "border-red-500"
        }`}
      >
        <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-blue-500 hidden sm:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  placeholder={placeholder}
                  className="border-none shadow-none text-xl focus-visible:ring-0"
                />
              </FormControl>
            </FormItem>
          )}
        />
        {form.formState.isDirty && (
          <Button
            onClick={handleReset}
            type="button"
            variant="outline"
            className="rounded-full"
          >
            Clear
          </Button>
        )}
        <Button type="submit" className="rounded-full bg-blue-500">
          Search
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
