import React from "react";
import "../styles/products.css";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useProductContext } from "./ProductContext";
import { NavLink } from "react-router-dom";

function Products({sortDirection, minPrice, maxPrice,updateFilteredProductCount }) {
  const { images } = useProductContext();
  const sortProducts = (direction, min, max) => {
    // Ürünleri sırala ve fiyat filtresini uygula
    let sortedProducts = images.slice();

    if (direction === 'A to Z') {
      sortedProducts = sortedProducts.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name));
    } else if (direction === 'Z to A') {
      sortedProducts = sortedProducts.sort((a, b) => b.attributes.name.localeCompare(a.attributes.name));
    } else if (direction === 'Low To High') {
      sortedProducts = sortedProducts.sort((a, b) => a.attributes.price - b.attributes.price);
    } else if (direction === 'High To Low') {
      sortedProducts = sortedProducts.sort((a, b) => b.attributes.price - a.attributes.price);
    }

    // Fiyat filtresini uygula
    if (min !== '' || max !== '') {
      const filteredProducts = sortedProducts.filter((item) => {
        const price = item?.attributes?.price || 0;

        // Eğer sadece minPrice girilmişse ve maxPrice boş veya 0 ise
        if (min !== '' && (max === '' || max === '0')) {
          return price >= parseFloat(min);
        }

        // Eğer sadece maxPrice girilmişse ve minPrice boş veya 0 ise
        if ((min === '' || min === '0') && max !== '') {
          return price <= parseFloat(max);
        }

        // Eğer hem minPrice hem de maxPrice girilmişse
        return price >= parseFloat(min) && price <= parseFloat(max);
      });

      // Check if there are filtered products, if not, return the original unfiltered array
      sortedProducts = filteredProducts.length > 0 ? filteredProducts : sortedProducts;
    }

    return sortedProducts;
  };

  const sortedProducts = sortProducts(sortDirection, minPrice, maxPrice);
  updateFilteredProductCount(sortedProducts);
  // const [images, setImages] = useState([]);
  // const getImages = async () => {
  //   try {
  //     const response = await api.get("products?populate=*");
  //     setImages(response.data.data);
  //     console.log(response.data.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getImages();
  //   return () => {};
  // }, []);
  

  return (
    <div className="containProduct">
      {sortedProducts.map((item, index) => {
        return (
          <div className="imageFlex" key={index}>
            <div className="imageFlexOne">
              <NavLink to={`/product/${item.id}`}>
                <img
                  className="imageShop"
                  src={
                    "http://192.168.56.128:1337" +
                    item?.attributes?.image?.data?.attributes?.url
                  }
                  alt="i"
                />
                <h3>{item?.attributes?.name}</h3>
                <p>Fiyat {item?.attributes?.price}$</p>
              </NavLink>
              <Rating
                name="custom-rating"
                defaultValue={0}
                icon={<StarIcon style={{ color: "gold" }} />}
                emptyIcon={<StarBorderIcon style={{ color: "white" }} />}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
