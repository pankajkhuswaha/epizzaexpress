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
      img: "/img/menu/mix-1.webp",
    },
    {
      name: "1 Sandwich + 1 Burger + Cold Drink",
      description: "A hearty combo of a sandwich, burger, and drink.",
      price: "150/-",
      img: "/img/menu/mix-2.jpeg",
    },
    {
      name: "1 Pizza + Finger + Cold Drink",
      description: "Delicious pizza served with a side and drink.",
      price: "150/-",
      img: "/img/menu/mix-3.jpeg",
    },
    {
      name: "Spring Rolls + Momos + Cold Drink",
      description: "Crispy rolls, savory momos, and a refreshing drink.",
      price: "150/-",
      img: "/img/menu/mix-4.jpeg",
    },
    {
      name: "1 Burger + Sandwich + Wrap + Cold Drink",
      description: "A varied combo of burger, sandwich, wrap, and drink.",
      price: "150/-",
      img: "/img/menu/mix-5.jpeg",
    },
  ],
  special: [
    {
      name: "Special Kurkure Momos",
      description: "Crispy and spicy momos with a unique Kurkure twist.",
      price: "100/-",
      img: "/img/menu/kurkure-momos-main.jpg",
    },
    {
      name: "Special Kurkure Roll",
      description: "A delicious roll packed with flavors and crunch.",
      price: "100/-",
      img: "/img/menu/kurkure-rolls.jpg",
    },
    {
      name: "Special Macc Puff",
      description: "Flaky puff pastry filled with a savory mixture.",
      price: "60/-",
      img: "/img/menu/maxresdefault.jpg",
    },
  ],
  wrap: [
    {
      name: "Veg. Wrap",
      description:
        "Fresh veggies wrapped in a soft tortilla for a healthy snack.",
      price: "50/-",
      img: "/img/menu/veg-wrap.webp",
    },
    {
      name: "Veg. Paneer Wrap",
      description: "Soft paneer and veggies wrapped in a flavorful tortilla.",
      price: "70/-",
      img: "/img/menu/veg-p.jpeg",
    },
    {
      name: "Veg. Cheese Wrap",
      description: "Cheesy goodness wrapped with fresh vegetables.",
      price: "80/-",
      img: "/img/menu/image.png",
    },
  ],
  sandwich: [
    {
      name: "Veg. Grilled Sandwich",
      description:
        "Grilled to perfection with fresh veggies and delicious spread.",
      price: "50/-",
      img: "/img/menu/grilled-sandwich-4.jpg",
    },
    {
      name: "Veg. Grilled Paneer Sandwich",
      description: "Grilled sandwich with paneer and mixed veggies.",
      price: "70/-",
      img: "/img/menu/paneer-sandwich.jpg",
    },
    {
      name: "Veg. Cheese Sandwich",
      description: "Cheesy and delicious sandwich with fresh veggies.",
      price: "80/-",
      img: "/img/menu/grilled-sandwich-4.jpg",
    },
  ],
  burger: [
    {
      name: "Aloo Tikki Burger",
      description: "Crispy aloo tikki patty in a soft burger bun.",
      price: "50/-",
      img: "/img/menu/Aloo-Tikki-Burger.jpg",
    },
    {
      name: "Veg. Burger",
      description: "Classic veggie burger with fresh lettuce and tomato.",
      price: "50/-",
      img: "/img/menu/veg-wrap.webp",
    },
    {
      name: "Veg. Paneer Burger",
      description: "Paneer patty burger with a mix of veggies.",
      price: "70/-",
      img: "/img/menu/delicious-paneer-burger-generated-by-ai_957803-2343.jpg",
    },
    {
      name: "Cheese Paneer Burger",
      description: "Paneer burger with an extra layer of cheese.",
      price: "80/-",
      img: "/img/menu/Firangi-Makhani-vegg-burger.png",
    },
  ],
  momos: [
    {
      name: "Veg. Momos",
      description: "Steamed dumplings filled with seasoned vegetables.",
      price: "50/-",
      img: "/img/menu/Fried-veg-momos-1200x900.jpg",
    },
    {
      name: "Spl. Creamy Momos",
      description: "Creamy, delicious momos with a unique twist.",
      price: "70/-",
      img: "/img/menu/creamy-momos.jpg",
    },
    {
      name: "Spring Roll",
      description: "Crispy spring rolls with a savory vegetable filling.",
      price: "50/-",
      img: "/img/menu/spring-rolls.jpg",
    },
  ],
  fastFood: [
    {
      name: "Manchurian",
      description: "Spicy and tangy Manchurian balls in a savory sauce.",
      price: "80/-",
      img: "/img/menu/manchurian.jpg",
    },
    {
      name: "Chilli Potato",
      description: "Crispy potatoes tossed in a spicy chili sauce.",
      price: "80/-",
      img: "/img/menu/Air-fried-french-fries.jpg",
    },
    {
      name: "Chilli Paneer",
      description: "Paneer cubes stir-fried in a spicy chili sauce.",
      price: "100/-",
      img: "/img/menu/ChilliPaneer5.jpg",
    },
    {
      name: "French Fries",
      description: "Classic, crispy French fries served hot.",
      price: "50/-",
      img: "/img/menu/french-fries.jpg",
    },
  ],
  chowmein: [
    {
      name: "Veg. Chowmein",
      description: "Stir-fried noodles with mixed vegetables and soy sauce.",
      price: "70/-",
      img: "/img/menu/veg-chow.jpg",
    },
    {
      name: "Hakka Noodles",
      description: "Spicy and flavorful Hakka noodles with veggies.",
      price: "80/-",
      img: "/img/menu/hakka-noodles-recipe.jpg",
    },
    {
      name: "Paneer Chowmein",
      description: "Noodles stir-fried with paneer and vegetables.",
      price: "80/-",
      img: "/img/menu/panner-chow.webp",
    },
    {
      name: "Singapuri Chowmein",
      description: "Spicy Singapuri style noodles with mixed vegetables.",
      price: "80/-",
      img: "/img/menu/veg12.jpg",
    },
  ],
};

export default menuData;
