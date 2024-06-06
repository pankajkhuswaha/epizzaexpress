export type MenuTypes =
  | "special"
  | "wrap"
  | "sandwich"
  | "burger"
  | "momos"
  | "fastFood"
  | "chowmein"
  | "combo";

const menuData = {
  combo: [
    {
      name: "1 Burger + Finger + Cold Drink",
      description: "A complete meal with a burger, side, and drink.",
      price: "150/-",
      img: "https://via.placeholder.com/150?text=Combo+1",
    },
    {
      name: "1 Sandwich + 1 Burger + Cold Drink",
      description: "A hearty combo of a sandwich, burger, and drink.",
      price: "150/-",
      img: "https://via.placeholder.com/150?text=Combo+2",
    },
    {
      name: "1 Pizza + Finger + Cold Drink",
      description: "Delicious pizza served with a side and drink.",
      price: "150/-",
      img: "https://via.placeholder.com/150?text=Combo+3",
    },
    {
      name: "Spring Rolls + Momos + Cold Drink",
      description: "Crispy rolls, savory momos, and a refreshing drink.",
      price: "150/-",
      img: "https://via.placeholder.com/150?text=Combo+4",
    },
    {
      name: "1 Burger + Sandwich + Wrap + Cold Drink",
      description: "A varied combo of burger, sandwich, wrap, and drink.",
      price: "150/-",
      img: "https://via.placeholder.com/150?text=Combo+5",
    },
  ],
  special: [
    {
      name: "Special Kurkure Momos",
      description: "Crispy and spicy momos with a unique Kurkure twist.",
      price: "100/-",
      img: "https://via.placeholder.com/150?text=Special+Kurkure+Momos",
    },
    {
      name: "Special Kurkure Roll",
      description: "A delicious roll packed with flavors and crunch.",
      price: "100/-",
      img: "https://via.placeholder.com/150?text=Special+Kurkure+Roll",
    },
    {
      name: "Special Macc Puff",
      description: "Flaky puff pastry filled with a savory mixture.",
      price: "60/-",
      img: "https://via.placeholder.com/150?text=Special+Macc+Puff",
    },
  ],
  wrap: [
    {
      name: "Veg. Wrap",
      description:
        "Fresh veggies wrapped in a soft tortilla for a healthy snack.",
      price: "50/-",
      img: "https://via.placeholder.com/150?text=Veg+Wrap",
    },
    {
      name: "Veg. Paneer Wrap",
      description: "Soft paneer and veggies wrapped in a flavorful tortilla.",
      price: "70/-",
      img: "https://via.placeholder.com/150?text=Veg+Paneer+Wrap",
    },
    {
      name: "Veg. Cheese Wrap",
      description: "Cheesy goodness wrapped with fresh vegetables.",
      price: "80/-",
      img: "https://via.placeholder.com/150?text=Veg+Cheese+Wrap",
    },
  ],
  sandwich: [
    {
      name: "Veg. Grilled Sandwich",
      description:
        "Grilled to perfection with fresh veggies and delicious spread.",
      price: "50/-",
      img: "https://via.placeholder.com/150?text=Veg+Grilled+Sandwich",
    },
    {
      name: "Veg. Grilled Paneer Sandwich",
      description: "Grilled sandwich with paneer and mixed veggies.",
      price: "70/-",
      img: "https://via.placeholder.com/150?text=Veg+Grilled+Paneer+Sandwich",
    },
    {
      name: "Veg. Cheese Sandwich",
      description: "Cheesy and delicious sandwich with fresh veggies.",
      price: "80/-",
      img: "https://via.placeholder.com/150?text=Veg+Cheese+Sandwich",
    },
  ],
  burger: [
    {
      name: "Aloo Tikki Burger",
      description: "Crispy aloo tikki patty in a soft burger bun.",
      price: "50/-",
      img: "https://via.placeholder.com/150?text=Aloo+Tikki+Burger",
    },
    {
      name: "Veg. Burger",
      description: "Classic veggie burger with fresh lettuce and tomato.",
      price: "50/-",
      img: "https://via.placeholder.com/150?text=Veg+Burger",
    },
    {
      name: "Veg. Paneer Burger",
      description: "Paneer patty burger with a mix of veggies.",
      price: "70/-",
      img: "https://via.placeholder.com/150?text=Veg+Paneer+Burger",
    },
    {
      name: "Cheese Paneer Burger",
      description: "Paneer burger with an extra layer of cheese.",
      price: "80/-",
      img: "https://via.placeholder.com/150?text=Cheese+Paneer+Burger",
    },
  ],
  momos: [
    {
      name: "Veg. Momos",
      description: "Steamed dumplings filled with seasoned vegetables.",
      price: "50/-",
      img: "https://via.placeholder.com/150?text=Veg+Momos",
    },
    {
      name: "Spl. Creamy Momos",
      description: "Creamy, delicious momos with a unique twist.",
      price: "70/-",
      img: "https://via.placeholder.com/150?text=Spl+Creamy+Momos",
    },
    {
      name: "Spring Roll",
      description: "Crispy spring rolls with a savory vegetable filling.",
      price: "50/-",
      img: "https://via.placeholder.com/150?text=Spring+Roll",
    },
  ],
  fastFood: [
    {
      name: "Manchurian",
      description: "Spicy and tangy Manchurian balls in a savory sauce.",
      price: "80/-",
      img: "https://via.placeholder.com/150?text=Manchurian",
    },
    {
      name: "Chilli Potato",
      description: "Crispy potatoes tossed in a spicy chili sauce.",
      price: "80/-",
      img: "https://via.placeholder.com/150?text=Chilli+Potato",
    },
    {
      name: "Chilli Paneer",
      description: "Paneer cubes stir-fried in a spicy chili sauce.",
      price: "100/-",
      img: "https://via.placeholder.com/150?text=Chilli+Paneer",
    },
    {
      name: "French Fries",
      description: "Classic, crispy French fries served hot.",
      price: "50/-",
      img: "https://via.placeholder.com/150?text=French+Fries",
    },
  ],
  chowmein: [
    {
      name: "Veg. Chowmein",
      description: "Stir-fried noodles with mixed vegetables and soy sauce.",
      price: "70/-",
      img: "https://via.placeholder.com/150?text=Veg+Chowmein",
    },
    {
      name: "Hakka Noodles",
      description: "Spicy and flavorful Hakka noodles with veggies.",
      price: "80/-",
      img: "https://via.placeholder.com/150?text=Hakka+Noodles",
    },
    {
      name: "Paneer Chowmein",
      description: "Noodles stir-fried with paneer and vegetables.",
      price: "80/-",
      img: "https://via.placeholder.com/150?text=Paneer+Chowmein",
    },
    {
      name: "Singapuri Chowmein",
      description: "Spicy Singapuri style noodles with mixed vegetables.",
      price: "80/-",
      img: "https://via.placeholder.com/150?text=Singapuri+Chowmein",
    },
  ],
};

export default menuData;
