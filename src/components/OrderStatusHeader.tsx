import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

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

  const getOrderStatusInfo = () => {
    return ORDER_STATUS.find(ord => ord.value === order.status) || ORDER_STATUS[0];
  }

  return (
    <>
      <h1 className="flex flex-col md:flex-row md:justify-between text-3xl font-bold gap-5">
        <div>Order Status: {getOrderStatusInfo().label}</div>
        <div>Expected by: {getExpectedDeliveryTime()}</div>
      </h1>
      <Progress className="animate-pulse" value={getOrderStatusInfo().progressValue} />
    </>
  )
}

export default OrderStatusHeader;