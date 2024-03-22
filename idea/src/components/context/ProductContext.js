import { createContext, useContext, useEffect, useState } from "react";
import Api from '../../api/Api';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categoryName, setCategoryName] = useState("");

    
    const getProduct = async (categoryId) => {
        try {
            const response = await Api.get(`categories/${categoryId}?populate=category.image`);

            // eslint-disable-next-line no-lone-blocks
            {/*console.log(response.data.data.attributes.category.data);*/}
            setProducts (response.data.data.attributes.category.data);
            setCategoryName(response.data.data.attributes.name);
        }
        catch (error) {
            console.log("Ürünleri Çekerken Bir Hata Oluştu.",error);

        }
        
    }


    useEffect(() => {
        const defaultCategoryId = 1;
        getProduct(defaultCategoryId);

    },[])

    const productContextValue = {
        products,
        categoryName,
        getProduct,
      };
    return( 
        <ProductContext.Provider value={productContextValue}>
        {children}
        </ProductContext.Provider>
    )
    
}
export const useProductContext = () => {
  return useContext(ProductContext);
};