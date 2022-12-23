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
    varients: ["six inch", "footlong"],
    prices: [
      {
        "six inch": 200,
        footlong: 400,
      },
    ],
    category: "nonveg",
    image: image1,
    description: "Pepper Barbecue Chicken I Cheese",
  },

  {
    name: "CHICKEN HAM, EGG & CHEESE",
    icon: nonveg,
    varients: ["six inch", "footlong"],
    prices: [
      {
        "six inch": 200,
        footlong: 400,
      },
    ],
    category: "nonveg",
    image: image2,
    description: "Pepper Barbecue Chicken I Cheese",
  },

  {
    name: "VEGGIE DELITE",
    icon: veg,
    varients: ["six inch", "footlong"],
    prices: [
      {
        "six inch": 200,
        footlong: 400,
      },
    ],
    category: "veg",
    image: image3,
    description: "Pepper Barbecue Chicken I Cheese",
  },

  {
    name: "MEXICAN PATTY",
    icon: veg,
    varients: ["six inch", "footlong"],
    prices: [
      {
        "six inch": 200,
        footlong: 400,
      },
    ],
    category: "veg",
    image: image4,
    description: "Pepper Barbecue Chicken I Cheese",
  },

  {
    name: "CORN & PEAS",
    icon: veg,
    varients: ["six inch", "footlong"],
    prices: [
      {
        "six inch": 200,
        footlong: 400,
      },
    ],
    category: "veg",
    image: image5,
    description: "Pepper Barbecue Chicken I Cheese",
  },

  {
    name: "CHICKEN TERIYAKI",
    icon: nonveg,
    varients: ["six inch", "footlong"],
    prices: [
      {
        "six inch": 200,
        footlong: 400,
      },
    ],
    category: "nonveg",
    image: image6,
    description: "Pepper Barbecue Chicken I Cheese",
  },
];

export default subways;
