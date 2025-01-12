"use server"

import { client } from "@/sanity/lib/client";

const uploadImageToSanity =async (imageUrl:string) => {
    const response =await fetch(imageUrl)
    const blob =await response.blob()
    // jesy hm jeson me change krty hen wesy hm url sy convert krty hen blob ko
    const asset = await client.assets.upload('image', blob);
    // image ki jga hmny blob jo convert kiya tha iosko rakh diya image wo name he jisy schema bna howa he
    return asset;
}
export const fetchData =async () => {
  try{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    for (const product of data) {
        const imageAsset = await uploadImageToSanity(product.image);
        // yha hmny function ko chalaya he or osko ak argument diya he jismy hmari url wali image jari he
      
        const productElement = {
            _id: `product-${product.id}`,
            _type: "product",
            // JB HM ID DETY HEN TO HM TYPE bhi dety hen isy ye wo wali id get kryga jo sanity hmy bna kr deta he
            title: product.title,
            discountPercentage: product.discountPercentage || 0,
            price: product.price,
            description: product.description,
            tags: product.category ?[product.category] : [],
            rating: product.rating?.rate || 0,
            ratingCount: product.rating?.count || 0,
            // hmny kha ke khali bhi a skta he or agr khali ay to ye krdena


            // image ko is trha sy change krengy hm https me
            image: {
                _type: 'image',
                // phly hm wo type degny jo shema me hoti he taky wo wha tk phonch sky
                asset: {
                  _type: 'reference',
                //   hmny yha bhi btana hota he jo type me diya he osko reference lo
                  _ref: imageAsset._id,
                },
              },
        }

        // ab hm bhejengy isko sanity me
        await client.createOrReplace(productElement);
        
    }
  }catch(error){
    console.error('Error uploading products:', error);
  }
    
}

