import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <div className="font-bold">Delivering to:</div>
        <div>{order.deliveryDetails.name}</div>
        <div>
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold">Your Order</div>
        <ul>
          {order.cartItems.map((cartItem) => (
            <li key={cartItem.menuItemId}>
              {cartItem.name} x {cartItem.quantity}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col">
        <div className="font-bold">Total</div>
        <div>₹{order.totalAmount}</div>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
