export interface besrSelingCardtype {
    discountBtn: boolean;
    discountPrice: number;
    trashIcon: boolean;
    heartIcon: boolean;
    eyeIcon: boolean;
    src: string;
    Heading: string;
    price: number;
    oldPrice?: any
    star: number;
    reviews: number;
  }

export const besrSelingCard:besrSelingCardtype[] =[
   
        {
          discountBtn: false,
          discountPrice: 100,
          trashIcon: false,
          heartIcon: true,
          eyeIcon: true,
          src: "/shirt.png",
          Heading: "The north coat",
          price: 260,
          oldPrice: 360,
          star: 5,
          reviews: 65,
        },
        {
          discountBtn: false,
          discountPrice: 200,
          trashIcon: false,
          heartIcon: true,
          eyeIcon: true,
          src: "/parse.png",
          Heading: "Gucci duffle bag",
          price: 960,
          oldPrice: 1160,
          star: 5,
          reviews: 65,
        },
        {
          discountBtn: false,
          discountPrice: 10,
          trashIcon: false,
          heartIcon: true,
          eyeIcon: true,
          src: "/table.png",
          Heading: "RGB liquid CPU Cooler",
          price: 160,
          oldPrice: 170,
          star: 5,
          reviews: 65,
        },
        {
          discountBtn: false,
          discountPrice: 40,
          trashIcon: false,
          heartIcon: true,
          eyeIcon: true,
          src: "/tap.png",
          Heading: "Small BookShelf",
          price: 360,
          star: 5,
          reviews: 65,
        },
      ];
      
