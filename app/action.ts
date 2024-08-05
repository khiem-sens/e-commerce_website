"use server";
import { ProductType } from "@/lib/interface";
import { defineOneEntry } from "oneentry";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
const {
  Admins,
  AttributesSets,
  AuthProvider,
  Blocks,
  Events,
  Forms,
  FormData,
  FileUploading,
  GeneralTypes,
  Locales,
  Menus,
  Orders,
  Pages,
  Products,
  ProductStatuses,
  System,
  Templates,
  TemplatePreviews,
  Users,
} = defineOneEntry("https://dev-ec-khiem.oneentry.cloud", {
  token: process.env.ONEENTRY_TOKEN,
  langCode: "en",
});

//Get all data from a page by URL
export async function getPageData(url: string) {
  const value = await Pages.getPageByUrl(url, "en_US");
  const dataBanner = {
    title: value.attributeValues?.maintitle.value,
    image: value.attributeValues?.mainimage.value[0].downloadLink,
  };

  if (
    value.attributeValues?.hasOwnProperty("categoriestitle") &&
    value.attributeValues?.categoriestitle.value != ""
  ) {
    const categoriesData = {
      titles: value.attributeValues?.categoriestitle.value.split(","),
      images: value.attributeValues?.categoriesimage.value.map(
        (item: any) => item.downloadLink
      ),
      links: value.attributeValues.categorieslink.value.split(",")
    };

    const categoriesObject = categoriesData.titles.map((title: string, index: any) => ({
      id: "cate" + title,
      title: title.toLocaleUpperCase(),
      imgSrc: categoriesData.images[index],
      url: categoriesData.links[index]
    }))
    return {dataBanner, categoriesObject}
  }
  return { dataBanner };
}

//Helper function to parse product
const parseProductObject = (value: any) => {
  const products: ProductType[] = value.map((product: IProductsEntity) => ({
    id: product.id,
    src: product.attributeValues.images.value[0].downloadLink,
    title: product.attributeValues.title.value,
    price: product.attributeValues.price.value,
    quatity: product.attributeValues.quantity.value,
    description: product.attributeValues.description.value,
    images: product.attributeValues.images.value.map(
      (image: any) => image.downloadLink
    ),
    categories: product.attributeValues.categories.value,
  }));
  return products;
};

export async function getProductsByCategory(url: string) {
  const body = [
    {
      attributeMarker: "price",
      conditionMarker: "mth",
      conditionValue: 1,
    },
  ];
  const value = await Products.getProductsByPageUrl(url, body, "en_US");
  const products = parseProductObject(value);
  return products;
}

export async function getProductByID(id: number) {
  const value = await Products.getProductById(id, "en_US");
  const product = parseProductObject([value]);
  return product;
}
