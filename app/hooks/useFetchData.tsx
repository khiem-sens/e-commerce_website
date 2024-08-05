import React, { useCallback, useEffect, useState } from 'react'
import { getPageData, getProductsByCategory } from '../action'
import { BannerDataType, ProductType } from '@/lib/interface'

const useFetchData = ({url = "", categoryUrl = "", fetchBanner = false}) => {
    const [products, setProducts] = useState<ProductType[]>([])
    const [banner, setBanner] = useState<BannerDataType>({title: "", image: ""})
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
  return {isLoading, banner, products}
}

export default useFetchData