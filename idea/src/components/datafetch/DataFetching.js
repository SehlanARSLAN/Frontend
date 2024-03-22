import { useProductContext } from "../context/ProductContext";
import '../../styles/datafetching.css'
import SkeletonComp from "../../components/datafetch/SkeletonComp";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function DataFetching({ categoryId, minPrice, maxPrice  }) {
    const { products, getProduct, categoryName } = useProductContext();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!dataFetched) {
                  setLoading(true);
                  await new Promise((resolve) => setTimeout(resolve, 100));
                  await getProduct(categoryId);
                  setDataFetched(true);       
                }
                let filtered = products.slice();

            // Eğer minimum fiyat belirtilmişse filtreleme işlemlerini gerçekleştir
            if (minPrice !== "") {
                filtered = filtered.filter((product) => {
                    const price = product?.attributes?.price || 0;

                    // Minimum fiyat kontrolü
                    const isMinPriceValid = price >= parseFloat(minPrice);

                    return isMinPriceValid;
                });
            }

            // Eğer maksimum fiyat belirtilmişse filtreleme işlemlerini gerçekleştir
            if (maxPrice !== "") {
              filtered = filtered.filter((product) => {
                const price = product?.attributes?.price || 0;

                // Maksimum fiyat kontrolü
                const isMaxPriceValid = price <= parseFloat(maxPrice);

                return isMaxPriceValid;
              });
            }

            // Eğer filtrelenmiş ürün yoksa, tüm ürünleri göster
            setFilteredProducts(filtered.length > 0 ? filtered : products);
            } catch (error) {
                console.error("Ürünleri çekerken bir hata oluştu.", error);
                setError("Ürünleri çekerken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [getProduct, categoryId, dataFetched, minPrice, maxPrice, products, categoryName]);


    if (error) {
        return <div className="dataError">{error}</div>;
    }

    if (loading) {
        return <SkeletonComp />;
    }
    const isLessThanFourProducts = products.length < 4;
    return (
      <div
        className={`dataFetchContainer ${
          isLessThanFourProducts ? "lessDataProduct" : ""
        }`}
      >
        <div className="dataFetch">
          <div className="dataProduct">
            {filteredProducts.map((item, index) => (
              <NavLink to={`/${categoryName}/detail/${item.id}`} key={index}>
                <div className="dataItem" >
                  {item?.attributes?.image &&
                    item?.attributes?.image?.data?.length > 0 && (
                      <div className="dataImage">
                        <img
                          src={
                            "http://192.168.56.128:1337" +
                            item?.attributes?.image?.data[0].attributes?.url
                          }
                          alt={item?.attributes?.name}
                        />
                      </div>
                    )}
                  <div className="dataInfo">
                    <p>{item?.attributes?.name}</p>
                    <p>Price: {item?.attributes?.price}</p>
                    <button >Sepete Ekle</button>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
}

export default DataFetching;
