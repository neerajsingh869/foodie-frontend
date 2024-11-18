import { CartItem } from "@/pages/DetailPage";
import CheckoutButton from "./CheckoutButton";
import OrderSummary from "./OrderSummary";
import { Card } from "./ui/card";
import { Restaurant } from "@/types";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
  disabled: boolean;
  onCheckout: (userFormData: UserFormData) => void;
};

const OrderInfo = ({ restaurant, cartItems, removeFromCart, disabled, onCheckout }: Props) => {
  return (
    <Card>
      <OrderSummary
        restaurant={restaurant}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      />
      <CheckoutButton disabled={disabled} onCheckout={onCheckout} />
    </Card>
  );
};

export default OrderInfo;
