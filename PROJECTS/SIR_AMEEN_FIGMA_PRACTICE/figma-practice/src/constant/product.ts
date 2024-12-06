// Data type for OurProductdata
export interface OurProductDataType {
    id: number; // Unique identifier for each product
    src: string; // Path for the product image
    Heading: string; // Product title
    price: number; // Current price of the product
    oldPrice: number; // Original price of the product
    star: number; // Star rating for the product
    reviews: number; // Number of reviews
    heartIcon: boolean; // Whether the heart icon is displayed
    eyeIcon: boolean; // Whether the eye icon is displayed
    discountPrice?: string; // Optional discount or label (e.g., "New")
    colorDiv:boolean,
    color1?:string}
  
  // Example data array with the type
  export const OurProductdata: OurProductDataType[] = [
    {
      id: 1,
      src: "/dog.png",
      Heading: "Breed Dry Dog Food",
      price: 100,
      oldPrice: 120,
      star: 3,
      reviews: 38,
      heartIcon: true,
      eyeIcon: true,
    colorDiv:false,
   
},
    {
      id: 2,
      src: "/camra.png",
      Heading: "CANON EOS DSLR Camera",
      price: 360,
      oldPrice: 400,
      star: 4,
      reviews: 95,
      heartIcon: true,
      eyeIcon: true,
    colorDiv:false},
    {
      id: 3,
      src: "/laptop.png",
      Heading: "ASUS FHD Gaming Laptop",
      price: 700,
      oldPrice: 800,
      star: 5,
      reviews: 325,
      heartIcon: true,
      eyeIcon: true,
    colorDiv:false},
    {
      id: 4,
      src:"/shampo.jpg",
      Heading: "Curology Product Set",
      price: 500,
      oldPrice: 550,
      star: 5,
      reviews: 145,
      heartIcon: true,
      eyeIcon: true,
    colorDiv:false,
    },
    {
      id: 5,
      src: "/car.png",
      Heading: "Kids Electric Car",
      price: 950,
      oldPrice: 1150,
      star: 5,
      reviews: 65,
      heartIcon: true,
      eyeIcon: true,
      discountPrice: "New",
      colorDiv:true,
      color1:"bg-red-400",},
    {
      id: 6,
      src: "/shoes.png",
      Heading: "Jr. Zoom Soccer Cleats",
      price: 1160,
      oldPrice: 1200,
      star: 5,
      reviews: 60,
      heartIcon: true,
      eyeIcon: true,
      colorDiv:true,
      color1:"bg-red-300"},
    {
      id: 7,
      src: "/game2.png",
      Heading: "GP11 Shooter USB Gamepad",
      price: 660,
      oldPrice: 690,
      star: 5,
      reviews: 85,
      heartIcon: true,
      eyeIcon: true,
      discountPrice: "New",
      colorDiv:true,
      color1:"bg-black"},
    {
      id: 8,
      src: "/shirt2.png",
      Heading: "Quilted Satin Jacket",
      price: 650,
      oldPrice: 700,
      star: 5,
      reviews: 55,
      heartIcon: true,
      eyeIcon: true,
      colorDiv:true,
      color1:"bg-black"},
  ];
  