import { useGetMyRestaurantOrders } from "@/api/MyRestaurantApi";
import OrderItemCard from "./OrderItemCard";
import OrderItemCardSkeleton from "./skeletons/OrderItemCardSkeleton";
import { Skeleton } from "./ui/skeleton";

const OrderItems = () => {
  const { orders, isLoading } = useGetMyRestaurantOrders();

  if (isLoading) {
    return (
      <>
        <Skeleton className="h-9 w-48" />
        {new Array(5).fill(0).map((_, index) => (
          <OrderItemCardSkeleton key={index} />
        ))}
      </>
    );
  }

  return (
    <>
      <h2 className="font-bold text-2xl">
        {orders?.length || 0} {(orders?.length || 0) > 1 ? "orders" : "order"}
      </h2>
      {orders?.map((order) => (
        <OrderItemCard order={order} />
      ))}
    </>
  );
};

export default OrderItems;
