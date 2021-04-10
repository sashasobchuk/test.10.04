import React, {useState} from 'react';
import clas from './addProductItem.module.css'
import {useDispatch} from "react-redux";
import {addItemItem} from "../../redux/ProductPage_reducer";

const AddProductDIsplay = ({product}) => {
    const dispatch = useDispatch()

    const [imageUrl, changeimageUrl] = useState(product.imageUrl)
    const changeimageUrlHandler = (e) => {changeimageUrl(e.currentTarget.value)}


    const [name, changenameValue] = useState(product.name)
    const changechaNgenameValueHandler = (e) => {changenameValue(e.currentTarget.value)}


    const [count, changecount] = useState(product.count)
    const changeCountHandler = (e) => {changecount(e.currentTarget.value)}


    const [width, changewidth] = useState(product.size.width)
    const changeWidthHandler = (e) => {changewidth(e.currentTarget.value)}



    const [height, changeheight] = useState(product.size.height)
    const changeHeightHandler = (e) => {changeheight(e.currentTarget.value)}



    const [weight, changeWeight] = useState(product.weight)
    const changeWeightHandler = (e) => {changeWeight(e.currentTarget.value)}

    const makeChangeHandler =() =>{
        let id =Math.floor(Math.random() * 1221120)
        let size = {width,height}
        let coments = [{
            id:id,
            productId:id,
            description: "",
            date: 'new data'
        }]
        let payload={id, imageUrl,name,count,size,weight ,coments}
        dispatch(addItemItem(payload))

    }


    return (
        <div className={clas.addDisplay}>
addDisplay

            <div>
                <h5>imageUrl:</h5> <textarea rows="4" cols="50" type="text" value={imageUrl}
                                             onChange={event => changeimageUrlHandler(event)}/>
            </div>
            <div>
                <h5>name:</h5> <textarea rows="4" cols="50" type="text" value={name}
                                         onChange={event => changechaNgenameValueHandler(event)}/>
            </div>
            <div>
                <h5>count:</h5> <textarea rows="4" cols="50" type="text" value={count}
                                          onChange={event => changeCountHandler(event)}/>
            </div>
            <div>
                <h5>size.width:</h5> <textarea rows="4" cols="50" type="text" value={width}
                                               onChange={event => changeWidthHandler(event)}/>
            </div>
            <div>
                <h5>size.height:</h5> <textarea rows="4" cols="50" type="text" value={height}
                                                onChange={event => changeHeightHandler(event)}/>
            </div>
            <div>
                <h5>weight:</h5> <textarea rows="4" cols="50" type="text" value={weight}
                                           onChange={event => changeWeightHandler(event)}/>
            </div>
            <div>
                <button onClick={makeChangeHandler} className='btn_makeChange' > make change</button>
            </div>
        </div>
    );
};

export default AddProductDIsplay;