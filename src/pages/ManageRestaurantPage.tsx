import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { restaurant, isLoading } = useGetMyRestaurant();
  const { createRestaurant, isPending } = useCreateMyRestaurant();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={createRestaurant}
      isLoading={isPending}
    />
  );
};

export default ManageRestaurantPage;
