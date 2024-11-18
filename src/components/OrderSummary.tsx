import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { CartItem } from "@/pages/DetailPage";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";
import { Badge } from "./ui/badge";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    const totalWithDeliveryPrice = totalPrice + restaurant.deliveryPrice;

    return totalWithDeliveryPrice;
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="flex justify-between font-bold text-xl">
          <span>Your Order</span>
          <span>₹{getTotalPrice()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((cartItem) => (
          <div className="flex justify-between" key={cartItem._id}>
            <span>
              <Badge className="mr-2 font-semibold" variant="outline">
                {cartItem.quantity}
              </Badge>
              {cartItem.name}
            </span>
            <span className="flex items-center gap-2">
              <Trash
                className="cursor-pointer"
                color="red"
                size={17}
                onClick={() => removeFromCart(cartItem)}
              />
              ₹{cartItem.price * cartItem.quantity}
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>{restaurant.deliveryPrice}</span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
