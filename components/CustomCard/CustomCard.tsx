import { ProductType } from "@/lib/interface";
import Link from "next/link";
import React from "react";
import AddToCartBtn from "../Button/AddToCartBtn";

interface ProductProps {
  product: ProductType;
  custom?: string;
}
export const ProductCard: React.FC<ProductProps> = ({ product, custom }) => {
  return (
    <div
      key={product?.id}
      className="flex flex-col cursor-pointer items-center text-center"
    >
      <Link href={`/product/${product.id}`}>
        <img
          src={product?.src}
          alt={product?.title}
          className="w-48 h-[320px] md:h-[480px] object-contain md:w-full relative rounded-xl"
        />
        <p className="mt-6 font-medium text-[1.25rem] md:text-[1.75rem]">
          {product?.title}
        </p>
        <p className="text-[1.25rem]">${product?.price}</p>
      </Link>
      <AddToCartBtn />
    </div>
  );
};
