'use client'
import { BannerDataType, ProductType } from "@/lib/interface";
import React, { useEffect, useState } from "react";
import { ProductList } from "../LandingPage/Featured";
import Filter from "../Filter/Filter";

interface CategoryPageProps {
  products: ProductType[];
  banner: BannerDataType;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ products, banner }) => {
    const [filterOption, setFilterOption] = useState('all')
    const [filteredProducts, setFilteredProducts] = useState(products)
    useEffect(() => {
        if(filterOption == 'all'){
            setFilteredProducts(products)
        }else{
            setFilteredProducts(products.filter((product: ProductType) => product.categories.includes(filterOption)))
        }
    }, [filterOption])
  return (
    <>
      <section className="flex flex-col items-center mt-12 font-Outfit">
        <img
          src={banner.image}
          alt={banner.title}
          className="relative w-full h-[160px] md:h-[320px] object-cover"
        />
        <p className="text-[3rem] md:text-[6rem] top-[32%] font-normal absolute text-white">
          {banner.title}
        </p>
      </section>

      <div className="w-full flex flex-col items-start md:grid md:grid-cols-4">
        <Filter setFilterOption = {setFilterOption}/>
        <ProductList products = {filteredProducts}/>
      </div>
    </>
  );
};

export default CategoryPage;
