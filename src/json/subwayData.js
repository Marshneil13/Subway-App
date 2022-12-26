import image1 from "../assets/WEggCheese.png";
import image2 from "../assets/CHEggCheese.png";
import image3 from "../assets/VegDelite.png";
import image4 from "../assets/mexican-patty.png";
import image5 from "../assets/CornPeas.png";
import image6 from "../assets/ChickenTeriyaki.png";
import veg from "../assets/icons8-vegetarian-food-symbol-48.png";
import nonveg from "../assets/icons8-non-vegetarian-food-symbol-48.png";

const subways = [
  {
    name: "WESTERN EGG & CHEESE",
    icon: nonveg,
    varients: ["six inch", "foot-long"],
    prices: [
      {
        "six inch": 130,
        "foot-long": 230,
      },
    ],
    category: "nonveg",
    image: image1,
    description:
      "Western omelet filled with ham, onions, and green bell peppers.",
  },

  {
    name: "CHICKEN HAM, EGG & CHEESE",
    icon: nonveg,
    varients: ["six inch", "foot-long"],
    prices: [
      {
        "six inch": 150,
        "foot-long": 250,
      },
    ],
    category: "nonveg",
    image: image2,
    description: "Pepper Barbecue Chicken I Cheese",
  },

  {
    name: "VEGGIE DELITE",
    icon: veg,
    varients: ["six inch", "foot-long"],
    prices: [
      {
        "six inch": 140,
        "foot-long": 240,
      },
    ],
    category: "veg",
    image: image3,
    description:
      "The Veggie Delite Signature Wrap has a double portion of the fresh veggies you love. All wrapped in a flavorful spinach wrap with lettuce, tomatoes, spinach, green peppers, cucumbers, and red onions. It’s one bold, crunchy flavor combo.",
  },

  {
    name: "MEXICAN PATTY",
    icon: veg,
    varients: ["six inch", "foot-long"],
    prices: [
      {
        "six inch": 140,
        "foot-long": 240,
      },
    ],
    category: "veg",
    image: image4,
    description: "Pepper Barbecue Chicken I Cheese",
  },

  {
    name: "CORN & PEAS",
    icon: veg,
    varients: ["six inch", "foot-long"],
    prices: [
      {
        "six inch": 160,
        "foot-long": 280,
      },
    ],
    category: "veg",
    image: image5,
    description: "Pepper Barbecue Chicken I Cheese",
  },

  {
    name: "CHICKEN TERIYAKI",
    icon: nonveg,
    varients: ["six inch", "foot-long"],
    prices: [
      {
        "six inch": 180,
        "foot-long": 310,
      },
    ],
    category: "nonveg",
    image: image6,
    description: "Pepper Barbecue Chicken I Cheese",
  },
];

export default subways;
