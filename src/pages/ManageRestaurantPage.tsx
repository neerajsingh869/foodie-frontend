import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { restaurant, isLoading } = useGetMyRestaurant();
  const { createRestaurant, isPending: isCreatePending } =
    useCreateMyRestaurant();
  const { updateRestaurant, isPending: isUpdatePending } =
    useUpdateMyRestaurant();

  if (isLoading) {
    return <span>ManageRestaurantPage Loading...</span>;
  }

  let onSave = createRestaurant;
  let isPending = isCreatePending;

  if (restaurant) {
    onSave = updateRestaurant;
    isPending = isUpdatePending;
  }

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={onSave}
      isLoading={isPending}
    />
  );
};

export default ManageRestaurantPage;
