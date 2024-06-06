import BreadCrumb from "@/components/BreadCrumb";
import { Metadata } from "next";
import Menus from "./Menus";

export const metadata: Metadata = {
  title:
    "E Pizza Express - Our menu | Chowein , Momos , Pizza , Burger ,Fast Food and Wrap | Explore Our Delicious Pizza and Sides in Faridabad",
  description:
    "Dive into the mouth-watering menu at E Pizza Express in Faridabad. Explore a variety of delicious, freshly made pizzas, sides, beverages, and desserts. Whether you prefer classic flavors or gourmet toppings, our menu has something for everyone. Visit us for dine-in or order for takeaway today!",
  keywords:
    "E Pizza Express menu, Pizza menu Faridabad, Best pizza menu, Dine-in menu Faridabad, Takeaway menu Faridabad, Pizza restaurant menu, Gourmet pizza menu, Pizza specials menu, Italian pizza menu, Homemade pizza menu, Pizza place menu Faridabad",
};

const Menu = () => {
  return (
    <section id="mneu">
      <BreadCrumb name="Our Menu" path="menu" />
      <Menus />
    </section>
  );
};

export default Menu;
