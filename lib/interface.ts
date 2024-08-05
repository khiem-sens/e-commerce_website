export interface BannerDataType{
    title: string,
    image: string
}

export interface MenuItemType{
    id: string,
    title: string,
    url: string
}

export interface ProductType{
    id: string,
    src: string,
    title: string,
    price: string,
    quantity: number,
    description?: string,
    images?: string[] | any,
    categories: string[],
}