import { ChildrenProps } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up for E Pizza Express | Get 10% Off on Every Meal in Faridabad",
  description:
    "Join the E Pizza Express community and enjoy 10% off on every meal! Sign up now to receive exclusive offers, updates, and discounts. Savor the best pizzas in Faridabad at a special price. Don't miss out on this delicious deal!",
  keywords:
    "E Pizza Express signup, 10% off pizza Faridabad, Pizza discounts, Sign up for offers, E Pizza Express deals, Join E Pizza Express, Exclusive pizza discounts, Pizza restaurant sign up, Special offers Faridabad, Pizza meal discount",
};

const AuthLayout = ({ children }: ChildrenProps) => {
  return <>{children}</>;
};

export default AuthLayout;
