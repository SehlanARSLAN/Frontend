import { useEffect, useState } from "react";
import { useAlisverisSepeti } from "./context/BucketContext";
import { useProductContext } from "./context/ProductContext";
import '../styles/bucket.css'
function Bucket() {
    const { sepetUrunleri, sepetiTemizle } = useAlisverisSepeti();
    const { products } = useProductContext();
    const [uniqueProducts, setUniqueProducts] = useState([]);

    useEffect(() => {
        const uniqueProductsArray = sepetUrunleri.map((sepetUrun) => {
            const product = products.find((product) => product.id === sepetUrun.id);
            if (product) {
                return {
                    ...product,
                    id: sepetUrun.id,
                    adet: sepetUrun.adet,
                    name: product.attributes.name,
                    image: product.attributes.image.url,
                    price: product.attributes.price,
                };
            } else {
                return null;
            }
        }).filter(Boolean);

        setUniqueProducts(uniqueProductsArray);
    }, [sepetUrunleri, products]);
    
    const handleSepetiTemizle = () => {
        sepetiTemizle();
    };
    const increaseProductCount = (id) => {
        const updatedProducts = uniqueProducts.map((product) => {
            if (product.id === id) {
                return { ...product, adet: product.adet + 1 };
            }
            return product;
        });
        setUniqueProducts(updatedProducts);
    };
    const decreaseProductCount = (id) => {
        const updatedProducts = uniqueProducts.map((product) => {
            if (product.id === id && product.adet > 1) {
                return { ...product, adet: product.adet - 1 };
            }
            return product;
        });
        setUniqueProducts(updatedProducts);
    };
    const getProductPrice = (id) => {
        const product = products.find((product) => product.id === id);
        return product ? product.attributes.price : 0;
    };

    const calculateTotalPrice = () => {
        return uniqueProducts.reduce((total, product) => {
            return total + product.adet * getProductPrice(product.id);
        }, 0);
    };
  return (
    <div className="bucketContainer">
      <h2 className="bucketTitle">Alışveriş Sepeti</h2>
      <div className="bucketContainerTwo">
        <div className="bucketProductContain">
          {uniqueProducts.map((urun, index) => (
            <div key={index} className="bucketProductContainTwo">
              {urun.attributes.image.data.map((image, index) => (
                <div className="bucketImage" key={index}>
                  <img
                    src={`http://192.168.56.128:1337${image.attributes.url}`}
                    alt={urun.attributes.name}
                  />
                </div>
              ))}
              <div className="bucketButtonCountGroup">
                <button
                  className="bucketCount"
                  onClick={() => increaseProductCount(urun.id)}
                >
                  +
                </button>
                <p>Adet: {urun.adet}</p>
                <button
                  className="bucketCount"
                  onClick={() => decreaseProductCount(urun.id)}
                >
                  -
                </button>
              </div>

              <div>
                Ürün ismi : {urun.attributes.name}
                <br />
                Fiyat: {getProductPrice(urun.id)} TL
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bucketCalculateSide">
        <p>Toplam Fiyat: {calculateTotalPrice()} TL</p>
        <button className="bucketClearButton" onClick={handleSepetiTemizle}>
          Sepeti Temizle
        </button>
      </div>
    </div>
  );
}

export default Bucket;