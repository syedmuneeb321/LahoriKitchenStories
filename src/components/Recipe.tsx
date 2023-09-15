import { Root2 } from "@/Types/ImageTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const getStaticProps = async () => {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=recipe`, { cache: "no-store" }
  );
  const data = await response.json();
  return data;
};

const Recipe = async () => {
  const Recipe = await getStaticProps();


  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-10 justify-items-center">

      {
        Recipe.items.map((res:Root2) => {
          let thumbnailImage = Recipe.includes.Asset.filter((thumb:Root2) => thumb.sys.id == res.fields.thumbnail.sys.id)


          return (
            <div key={res.sys.id} className="">
              <div className="">
                {
                  thumbnailImage.map((img:Root2) => {

                    return (
                      <div key={img.sys.id}>
                        <Image src={`https:${img.fields.file.url}`} alt={img.fields.title} width={img.fields.file.details.image.width} height={img.fields.file.details.image.height} className="h-64 w-96" />
                      </div>
                    )
                  }
                  )
                }
              </div>
              <div className="flex flex-col gap-y-1 bg-white max-w-[380px] mx-[2px]">
                <div className="space-y-1 mt-2">
                  <h2 className="font-bold text-xl ml-4">{res.fields.title}</h2>
                  <p className="text-gray-600 ml-4">Takes aprox {res.fields.cookingTime} mins to make</p>

                </div>

                <div className="bg-red-800 text-white w-fit p-2 self-end m-1">
                  <Link href={`/${res.fields.slug}`}>
                    Cook This
                  </Link>
                </div>
              </div>

            </div>
          )
        })
      }

    </div>

  );
};

export default Recipe;
