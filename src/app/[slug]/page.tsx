import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Root, Root2 } from "@/Types/ImageTypes";


const getStaticProps = async (slug: string) => {
  const response = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=recipe`, { cache: 'no-store' });
  const data = await response.json();


  const recipeDetails = data.items?.find((recipes: Root2) => recipes.fields.slug === slug)

  const bannerRecipeImage = data.includes.Asset?.find((img: Root2) => img.sys.id == recipeDetails.fields.featuredImage.sys.id)

  let recipe = {
    recipeDec: recipeDetails.fields,
    picture: bannerRecipeImage.fields,
  }

  return recipe;
};



const DetailedPage = async ({ params}: { params: { slug: string } }) => {

  const Recipe = await getStaticProps(params.slug);





  return (

    <div className=" object-fill space-y-5 mb-20 mx-10 md:mx-20">
      
      <div className="flex flex-col items-center">

        <Image
          src={`https:${Recipe.picture.file.url}`}
          alt={Recipe.picture.title}
          width={Recipe.picture.file.details.image.width}
          height={Recipe.picture.file.details.image.height}
          className="h-60 w-[35rem]"
        />
        <div className='self-end mt-2'>
          <h2  className='text-gray-700'>Content Writer:<span className='font-bold text-xl'></span></h2>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">{Recipe.recipeDec.title}</h2>
        <p className="text-gray-800">
          Take About {Recipe.recipeDec.cookingTime} mins to cook.
        </p>
        <div className="space-y-3">
          <h2 className="font-bold text-xl">
            Ingredients:
          </h2>
          <div className="grid md:grid-cols-2">

            {Recipe.recipeDec.ingredients?.map((item: string, indx: number) => (
              <div key={indx}>{item}</div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Cooking Method:</h2>
          <div>
            {documentToReactComponents(Recipe.recipeDec.method)}
          </div>
        </div>
        
      </div>
    

    </div>
  );
};

export default DetailedPage;
