import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import OrderItems from "@/components/OrderItems";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Retaurant</TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 bg-gray-50 dark:bg-gray-900 rounded-lg p-4 md:p-7 lg:p-10"
      >
        <OrderItems />
      </TabsContent>
      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm
          restaurant={restaurant}
          onSave={onSave}
          isLoading={isPending}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ManageRestaurantPage;
