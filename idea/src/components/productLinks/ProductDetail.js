import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import '../../components/kampanyaLink/styles/productdetail.css';
import ProductDetailInfo from "./ProductDetailInfo";
import { useAlisverisSepeti } from "../context/BucketContext";

function ProductDetail() {
  const { id } = useParams();
  const { products, categoryName } = useProductContext();
  const { sepeteEkle } = useAlisverisSepeti();
  const [bucketCount, setBucketCount] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const saveSelectedProductToLocalStorage = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };

  useEffect(() => {
    const savedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    if (savedProduct) {
      setSelectedProduct(savedProduct);
    }

    const product = products.find(
      (product) => product.id === parseInt(id, 10)
    );
    if (product) {
      setSelectedProduct(product);
    }
  }, [id, products]);

  useEffect(() => {
    if (selectedProduct) {
      saveSelectedProductToLocalStorage(selectedProduct);
    }
  }, [selectedProduct]);

  const handleSepeteEkle = () => {
    const adet = bucketCount;
    const { id, attributes } = selectedProduct;
    const { name, price, image } = attributes;
    const kategori = categoryName;
    sepeteEkle({ id, adet, name, price, image,kategori });
  };

  const decreaseBucketCount = () => {
    if (bucketCount > 1) {
      setBucketCount(bucketCount - 1);
    }
  };

  const increaseBucketCount = () => {
    setBucketCount(bucketCount + 1);
  };

  if (!selectedProduct) {
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <div className="productDetailContainer">
      <div className="productDetail">
        <div className="productDetailImage">
          {selectedProduct.attributes.image.data.map((image, index) => (
            <div key={index} className="productDetailImg">
              <img
                src={`http://192.168.56.128:1337${image.attributes.url}`}
                alt={selectedProduct.attributes.name}
              />
            </div>
          ))}
        </div>
        <div className="productDetailInfo">
          <h2>{selectedProduct.attributes.name}</h2>
          <Rating
            name="custom-rating"
            defaultValue={0}
            icon={<StarIcon style={{ color: "gold" }} fontSize="small" />}
            emptyIcon={
              <StarBorderIcon style={{ color: "black" }} fontSize="small" />
            }
          />

          <p>{selectedProduct.attributes.price} TL</p>
          <hr />
          <div>
            <div>Stok Kodu: 0003606</div>
            <div>Kategori: {categoryName}</div>
          </div>
          <div className="productDetailCartCountContain">
            <div className="productDetailCartCount">
              <button onClick={decreaseBucketCount}>-</button>
              <p>{bucketCount}</p>
              <button onClick={increaseBucketCount}>+</button>
            </div>
            <div className="productDetailCartAdd">
              <button onClick={handleSepeteEkle}>Sepete Ekle</button>
            </div>
          </div>
          <ProductDetailInfo />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;