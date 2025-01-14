import { useEffect, useState } from "react";

import { Order, OrderStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyRestaurantOrderStatus } from "@/api/MyRestaurantApi";

type Props = {
  order: Order;
};

const OrderItemCard = ({ order }: Props) => {
  const { updateOrderStatus, isPending } = useUpdateMyRestaurantOrderStatus();
  const [currentStatus, setCurrentStatus] = useState<OrderStatus>(order.status);

  useEffect(() => {
    setCurrentStatus(order.status);
  }, [order.status]);

  const getTimeWithFormat = () => {
    const orderCreatedTime = new Date(order.createdAt);

    const hours = orderCreatedTime.getHours();
    const minutes = orderCreatedTime.getMinutes();

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${formattedMinutes}`;
  };

  const handleOrderStatusChange = async (newStatus: OrderStatus) => {
    setCurrentStatus(newStatus);
    await updateOrderStatus({
      orderId: order._id as string,
      status: newStatus,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="grid md:grid-cols-4 gap-4 justify-between mb-3">
          <div>
            Customer Name:
            <span className="ml-2 font-normal">
              {order.deliveryDetails.name}
            </span>
          </div>
          <div>
            Delivery Address:
            <span className="ml-2 font-normal">
              {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
            </span>
          </div>
          <div>
            Time:
            <span className="ml-2 font-normal">{getTimeWithFormat()}</span>
          </div>
          <div>
            Total Cost:
            <span className="ml-2 font-normal">{order.totalAmount}</span>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div>
          {order.cartItems.map((cartItem) => (
            <div>
              <Badge variant="outline" className="mr-2">
                {cartItem.quantity}
              </Badge>
              {cartItem.name}
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <Label htmlFor="status">What is the status of this order?</Label>
          <Select
            disabled={isPending}
            onValueChange={(value) =>
              handleOrderStatusChange(value as OrderStatus)
            }
            value={currentStatus}
          >
            <SelectTrigger id="status">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent position="popper">
              {ORDER_STATUS.map((status) => (
                <SelectItem value={status.value}>{status.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
