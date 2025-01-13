import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { restaurant, isLoading } = useGetMyRestaurant();
  const { createRestaurant, isPending: isCreatePending } =
    useCreateMyRestaurant();
  const { updateRestaurant, isPending: isUpdatePending } =
    useUpdateMyRestaurant();
  const { orders } = useGetMyRestaurantOrders();

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
        <h2 className="font-bold text-2xl">
          {orders?.length || 0} {(orders?.length || 0) > 1 ? "orders" : "order"}
        </h2>
        {orders?.map((order) => (
          <OrderItemCard order={order} />
        ))}
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
