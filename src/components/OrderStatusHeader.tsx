import { Order } from "@/types";
import { Progress } from "./ui/progress";

type Props = {
  order: Order;
}

const OrderStatusHeader = ({order}: Props) => {
  const getExpectedDeliveryTime = () => {
    const orderCreatedTime = new Date(order.createdAt);

    orderCreatedTime.setMinutes(orderCreatedTime.getMinutes() + order.restaurant.estimatedDeliveryTime);

    const hours = orderCreatedTime.getHours();
    const minutes = orderCreatedTime.getMinutes();

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${formattedMinutes}`;
  }

  return (
    <>
      <h1 className="flex flex-col md:flex-row md:justify-between text-3xl font-bold gap-5">
        <div>Order Status: {order.status}</div>
        <div>Expected by: {getExpectedDeliveryTime()}</div>
      </h1>
      <Progress className="animate-pulse" value={50} />
    </>
  )
}

export default OrderStatusHeader;