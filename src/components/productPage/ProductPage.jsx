import React from 'react';
import './ProductPage.css'
import {useSelector} from "react-redux";
import OneProduct from "../OneProductPage/oneProduct";
import AddOneProduct from "../addProductItem/addProductItem";

const ProductPage = () => {
     const products  = useSelector(state=>state.ProductPage.products)

    return (
        <div className='fotoPage' >
            {products.map((product,index) =>
                    <OneProduct  product={product} key={index}/>
                    )}
                    <AddOneProduct product={products[0]}/>

        </div>

    );
};

export default ProductPage;