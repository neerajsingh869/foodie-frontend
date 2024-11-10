import { CartItem } from "@/pages/DetailPage";
import CheckoutButton from "./CheckoutButton";
import OrderSummary from "./OrderSummary";
import { Card } from "./ui/card";
import { Restaurant } from "@/types";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderInfo = ({ restaurant, cartItems, removeFromCart }: Props) => {
  return (
    <Card>
      <OrderSummary
        restaurant={restaurant}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      />
      <CheckoutButton />
    </Card>
  );
};

export default OrderInfo;
