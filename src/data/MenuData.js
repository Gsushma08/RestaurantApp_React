import images from "./images";

const menuData = [
  {
    category: "Veg Starters",
    items: [
      { name: "Gobi Chilly", price: 205, image: images.Chilly_Gobi },
      { name: "Gobi 65", price: 205, image: images.gobi_65 },
      { name: "Paneer 65", price: 230, image: images.Paneer_65 },
      { name: "Paneer Manchuria", price: 230, image: images.paneer_manchuria },
      { name: "Chilly Paneer", price: 220, image: images.Chilli_paneer },
      { name: "Kaju Pakoda", price: 210, image: images.Kaju_Pakoda },
      { name: "Babycorn Manchuria", price: 230, image: images.babycorn_Manchuria },
      { name: "Babycorn Chilly", price: 230, image: images.babycorn_chilly },
      { name: "Cripsy Corn", price: 200, image: images.crispy_corn },
    ],
  },

  {
    category: "Non-Veg Starters",
    items: [
      { name: "Chicken Drumsticks", price: 235, image:images.chickendrumstick },
      { name: "Chicken 65", price: 235, image:images.chicken65 },
      { name: "Chicken Lollipop", price: 235, image:images.chickenlollipop },
      { name: "Chicken Manchuria", price: 235, image:images.chickenmanchuria },
      { name: "Mutton Keema Balls", price: 275, image:images.muttonkeema },
      { name: "Ginger Mutton", price: 260, image:images.muttonginger },
      { name: "Apollo Fish", price: 260, image:images.apollofish },
      { name: "Prawns 65", price: 260, image:images.prawns65 },
      { name: "Garlic Fish Fry", price: 260, image:images.garlicfish },
    ],
  },
  {
    category: "Veg Curries",
    items: [
      { name: "Veg Malai Kofta", price: 200, image:images.vegkofta },
      { name: "Veg Paneer Kofta", price: 230, image:images.paneerkofta },
      { name: "Paneer Butter Masala", price: 230, image:images.paneerbutter },
      { name: "Mushroom Curry", price: 235, image:images.mushroomcurry },
      { name: "kaju Curry", price: 180, image:images.kajucurry },
      { name: "Kadai Veg", price: 180, image:images.kadaiveg },
      { name: "Masala vankaya", price: 210, image:images.vankayamasala },
    ],
  },
  {
    category: "Non-Veg Curries",
    items: [
      { name: "Egg Masala", price: 180, image:images.eggmasala },
      { name: "Chicken Butter Masala", price: 250, image:images.chickenbutter },
      { name: "Natu Kodi Pulusu", price: 270, image:images.naatukodi },
      { name: "Mutton Curry", price: 275, image:images.muttoncurry },
      { name: "Fish Pulusu", price: 210, image:images.fishcurry },
      { name: "Gongura Mutton", price: 280, image:images.muttongongura },
    ],
  },
  {
    category: "Biryani & Rice Items",
    items: [
      { name: "Veg Biryani", price: 200, image:images.vegbiryani },
      { name: "Paneer Biryani", price: 240, image:images.paneerbiryani },
      { name: "Mushroom Biryani", price: 250, image:images.mushroombiryani},
      { name: "Egg Biryani", price: 200, image:images.eggbiryani },
      { name: "Chicken Biryani", price: 260, image:images.chickenbiryani },
      { name: "Special Chicken Biryani", price: 270, image:images.chickenbiryanispl },
      { name: "Nalli Gosh Biryani", price: 350, image:images.nalligosh },
      { name: "Mutton Biryani", price: 310, image:images.muttonbiryani },
      { name: "Curd Rice", price: 100, image:images.curdrice },
      { name: "Plain Rice", price: 50, image:images.plainrice },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Oreo Thick Shake", price: 200, image:images.oreo },
      { name: "Kitkat", price: 180, image:images.kitkat },
      { name: "Lemonade", price: 60, image:images.lemonade },
      { name: "Orange Juice", price: 70, image:images.orange },
      { name: "Mango Shake", price: 120, image:images.mango },
      { name: "Pepsi", price: 30, image:images.pepsi },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Gulab Jamun", price: 100, image:images.gulabjamun },
      { name: "Rasgulla", price: 100, image:images.rasgulla },
      { name: "Ice Cream", price: 110, image:images.icecream },
      { name: "Brownie", price: 120, image:images.brownie },
      { name: "Cheesecake", price: 90, image:images.cheesecake },
    ],
  },
];

export default menuData;
