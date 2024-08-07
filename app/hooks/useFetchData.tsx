'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { getPageData, getProductsByCategory } from '../action'
import { BannerDataType, CategoriesBannerDataType, ProductType } from '@/lib/interface'

const useFetchData = ({url = "", categoryUrl = "", fetchBanner = false, fetchCategories = false}) => {
    const [products, setProducts] = useState<ProductType[]>([])
    const [banner, setBanner] = useState<BannerDataType>({title: "", image: ""})
    const [categories, setCategories] = useState<CategoriesBannerDataType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const getData = useCallback(async () => {
        setIsLoading(true)
        try {
            const data = await getPageData(url)
            if(categoryUrl != ''){
                const products = await getProductsByCategory(categoryUrl)
                setProducts(products)
            }
            if(fetchBanner) {
                setBanner(data.dataBanner)
            }
            if(fetchCategories){
                setCategories(data.categoriesObject)
            }
            
        } catch (error) {
            console.log('Error: ', error)
        }
        finally{
            setIsLoading(false)
        }
    }, [url, fetchBanner])
    useEffect(()=>{
        getData();
    },[getData])
  return {isLoading, banner, products, categories}
}

export default useFetchData