import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useGetRestaurant } from "@/api/RestaurantApi";
import MenuItem from "@/components/MenuItem";
import OrderInfo from "@/components/OrderInfo";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { MenuItem as MenuItemType } from "@/types";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

const DetailPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems =  sessionStorage.getItem(
      `cartItems-${restaurantId}`
    );

    setCartItems(storedCartItems ? JSON.parse(storedCartItems) : []);
  }, [restaurantId]);

  const addToCart = (menuItem: MenuItemType) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (cartItem) => cartItem._id === menuItem._id
      );

      let updatedCartItems;
      if (existingCartItem) {
        updatedCartItems = prevCartItems.map((cartItem) => {
          return cartItem._id === menuItem._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        });
      } else {
        updatedCartItems = [
          ...prevCartItems,
          {
            _id: menuItem._id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
          },
        ];
      }

      sessionStorage.setItem(
        `cartItems-${restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const removeFromCart = (cartItem: CartItem) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (item) => item._id !== cartItem._id
      );

      sessionStorage.setItem(
        `cartItems-${restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const onCheckout = (userFormData: UserFormData) => {
    console.log("user form data: ", userFormData);
  }

  if (isLoading || !restaurant) {
    return <div>Detail page loading...</div>;
  }

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 5}>
        <img
          className="object-cover rounded-md w-full h-full"
          src={restaurant.imageUrl}
          alt={`${restaurant.restaurantName} Image`}
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 lg:px-28">
        <div className="flex flex-col gap-4">
          <RestaurantInfo restaurant={restaurant} />
          <span className="font-bold text-2xl">Menu</span>
          {restaurant.menuItems.map((menuItem) => (
            <MenuItem
              key={menuItem._id}
              menuItem={menuItem}
              addToCart={() => addToCart(menuItem)}
            />
          ))}
        </div>
        <div>
          <OrderInfo
            restaurant={restaurant}
            removeFromCart={removeFromCart}
            cartItems={cartItems}
            disabled={cartItems?.length === 0}
            onCheckout={onCheckout}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
