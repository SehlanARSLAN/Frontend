import '../styles/productdetail.css'
import { useParams, useNavigate } from "react-router-dom"; // useNavigate eklenmiş
import { useProductContext } from "./ProductContext";
import { useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ProductInfo from './ProductInfo';
import ProductSlider from './ProductSlider';
import { useShoppingCartContext } from './ShoppingCartContext';

function ProductDetail() {
    const { id } = useParams();
    const { images } = useProductContext();
    const { addToCart } = useShoppingCartContext();
    const [product, setProduct] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate(); // useNavigate eklenmiş
    const {updateCartItemQuantity } = useShoppingCartContext();

    useEffect(() => {
      const selectedProduct = images.find(item => item.id === parseInt(id));
      const currentIndex = images.findIndex(item => item.id === parseInt(id));
      setProduct(selectedProduct);
      setCurrentIndex(currentIndex);
    }, [id, images, quantity]); // quantity değiştiğinde de useEffect'in çalışmasını sağla
    
    
    const handlePrevNextClick = (direction) => {
        let newIndex;
        if (direction === 'prev') {
            newIndex = currentIndex - 1;
            if (newIndex < 0) {
                newIndex = images.length - 1;
            }
        } else {
            newIndex = currentIndex + 1;
            if (newIndex >= images.length) {
                newIndex = 0;
            }
        }

        // Yeni ürünü set et
        const newProduct = images[newIndex];
        setProduct(newProduct);

        // Yeni index'i güncelle
        setCurrentIndex(newIndex);

        // Yeni ID'yi güncelle ve sayfayı yönlendir
        const newId = newProduct.id;
        navigate(`/product/${newId}`);
    };
    

    const handleAddToCart = () => {
      console.log('Adding to cart:', product, 'Quantity:', quantity);
      if (product && product.id) { // Ürün ID'si varsa devam et
        // İlgili bilgileri addToCart fonksiyonuna gönder
        addToCart({
          id: product.id,
          name: product.attributes.name,
          price: product.attributes.price,
          imageUrl: `http://192.168.56.128:1337${product?.attributes?.image?.data?.attributes?.url}`,
          quantity: quantity
        });
        // Miktarı güncelleme fonksiyonunu çağır
        updateCartItemQuantity(product.id, quantity);
      }
    };

    if (!product) {
        return <p>Ürün bulunamadı.</p>;
    }

    return (
      <div className="productDetailContain">
        <div className="productDetail">
          <div className="buttonDetail">
            <div className="buttonPrevNext">
              <button
                className="prevNext"
                onClick={() => handlePrevNextClick("prev")}
              >
                <ArrowBackIosNewIcon />
                Prev
              </button>
              <button
                className="prevNext"
                onClick={() => handlePrevNextClick("next")}
              >
                Next
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
          <div className="detailContent">
            <div className="detailLeftSide">
              <img
                src={`http://192.168.56.128:1337${product?.attributes?.image?.data?.attributes?.url}`}
                alt={product.attributes.name}
              />
              <div className="description">
                I'm a product description. This is a great place to "sell" your
                product and grab buyers' attention. Describe your product
                clearly and concisely. Use unique keywords. Write your own
                description instead of using manufacturers' copy.
              </div>
            </div>
            <div className="detailRightSide">
              <h1>{product.attributes.name}</h1>
              <Rating
                name="custom-rating"
                defaultValue={0}
                icon={<StarIcon style={{ color: "gold" }} />}
                emptyIcon={<StarBorderIcon style={{ color: "white" }} />}
              />
              <p>Fiyat: {product.attributes.price}$</p>
              <label>Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
              />
              <div className="productCart">
                <button onClick={() => handleAddToCart()}>Add To Cart</button>
                <button>Buy Now</button>
              </div>
              <div className="infoProduct">
                <ProductInfo />
              </div>
            </div>
          </div>
          <div className="sliderContain">
            <ProductSlider />
          </div>
        </div>
      </div>
    );
}

export default ProductDetail;
