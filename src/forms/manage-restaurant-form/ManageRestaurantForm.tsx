import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import DetailsSection from "./DetailsSection";
import CousineSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Restaurant } from "@/types";
import { useEffect } from "react";

const formSchema = z
  .object({
    restaurantName: z
      // case when the value is undefined (you can use below or
      // use defaultValue field of useForm hook in order to
      // give the default value of restaurant name as empty string)
      .string({
        required_error: "Restaurant name is required",
      })
      // in other cases, when the value is not undefined
      .min(1, "Restuarant name is required"),
    city: z
      .string({
        required_error: "City is required",
      })
      .min(1, "City is required"),
    country: z
      .string({
        required_error: "Country is required",
      })
      .min(1, "Country is required"),
    deliveryPrice: z.coerce
      .number({
        invalid_type_error: "must be a number",
      })
      .min(1, "Delivery price is required"),
    estimatedDeliveryTime: z.coerce
      .number({
        invalid_type_error: "must be a number",
      })
      .min(1, "Estimated Delivery Time is required"),
    cuisines: z.array(z.string()).min(1, "Please select at least one item"),
    menuItems: z.array(
      z.object({
        name: z
          .string({
            required_error: "Name of menu item is required",
          })
          .min(1, "Name of menu item is required"),
        price: z.coerce.number().min(1, "Price of menu item is required"),
      })
    ),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "Image is required" }).optional(),
  })
  .refine((data) => data.imageFile || data.imageUrl, {
    message: "Either image URL or image File must be provided",
    path: ["imageFile"],
  });

type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
  restaurant: Restaurant | undefined;
  onSave: (restaurnatformData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ restaurant, onSave, isLoading }: Props) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  useEffect(() => {
    if (!restaurant) return;

    form.reset(restaurant);
  }, [form, restaurant]);

  const onSubmit = (formDataValues: RestaurantFormData) => {
    const formData = new FormData();

    formData.append("restaurantName", formDataValues.restaurantName);
    formData.append("city", formDataValues.city);
    formData.append("country", formDataValues.country);
    formData.append(
      "deliveryPrice",
      formDataValues.deliveryPrice.toFixed(2).toString()
    );
    formData.append(
      "estimatedDeliveryTime",
      formDataValues.estimatedDeliveryTime.toString()
    );
    if (formDataValues.imageFile) {
      formData.append("imageFile", formDataValues.imageFile);
    }
    formDataValues.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });
    formDataValues.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(
        `menuItems[${index}][price]`,
        menuItem.price.toFixed(2).toString()
      );
    });

    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-100 dark:bg-gray-900 rounded-lg p-4 sm:p-7 md:p-10"
      >
        <DetailsSection />
        <Separator />
        <CousineSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;
