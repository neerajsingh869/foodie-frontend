import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem } from "./ui/form";
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
  searchQuery: string;
};

export type SearchForm = z.infer<typeof formSchema>;

const SearchBar = ({ onSubmit, placeholder, onReset, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({
      searchQuery,
    });
  }, [form, searchQuery]);

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
        className={`flex justify-between items-center gap-3 border-2 rounded-full p-3 ${
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
        <Button
          onClick={handleReset}
          type="button"
          variant="outline"
          className="rounded-full"
        >
          Reset
        </Button>
        <Button type="submit" className="rounded-full bg-blue-500">
          Search
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
