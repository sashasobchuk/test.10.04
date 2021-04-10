import React, {useEffect, useState} from 'react';
import clas from './addProductItem.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    addComment,
    changeAddDisplay,
    deleteComment,
    downloadFullPage
} from "../../redux/ProductPage_reducer";
import {standardFoto} from './../../redux/ProductPage_reducer'
import AddProductDIsplay from "./addProductItemDisplay";

const AddOneProduct = ({product}) => {



    const [commentItputValue, ChangecommentItputValue] = useState('')
    const dispatch = useDispatch()

    function changeCommnettHandler(e) {
        ChangecommentItputValue(e.currentTarget.value)
    }

    function deleteCommentHandler(commentId) {
        dispatch(deleteComment(product.id, commentId))
    }

    function addCommentHandler() {
        if (commentItputValue) {
            const newId = Math.random().toString(36).substring(3)
            dispatch(addComment(newId, product.id, commentItputValue, 'time'))
            ChangecommentItputValue('')
        }
    }
    useEffect(()=>{
        dispatch(downloadFullPage())
    })
    const  addDisplay = useSelector(state => state.ProductPage.addDisplay)
    const showeDisplayHandler =()=>{
        dispatch(changeAddDisplay('block'))
    }

    return (
        <div className={clas.oneItem}>
            {/*<span className={clas.bigPlus}>+</span>*/}
            <div className={clas.ProductName}>
                <h2> {product.name}</h2>
            </div>
            <input type="button" className={clas.editBotton} onClick={showeDisplayHandler} value='addItem'/>


            <a href='some_href'>
                <img src={product.imageUrl === 'foto'? standardFoto :product.imageUrl} className={clas.img} alt=""/>
            </a>
            <div className={clas.properties}>
                <div>
                                  <span>
                    count: {product.count}
                </span>
                </div>
                <div>
                 <span>
                    size.width: {product.size.width}
                </span>
                </div>

                <div>
                                    <span>
                    size.height: {product.size.height}
                </span>
                </div>
                <div>
                <span>
                    weight: {product.weight}
                </span>
                </div>

            </div>

            <div className={clas.coments}>
                {product.comments.map((coment,index) => <div key={index}><span className={clas.commentValue}>
                    {coment.description}</span> <span className={clas.commentDate}> {coment.date}</span>
                    <input className={clas.deleteComment} onClick={() => deleteCommentHandler(coment.id)} type="button"
                           value='X'/></div>)}


                <textarea value={commentItputValue} type="text" onChange={(e) => changeCommnettHandler(e)}
                          className={clas.commentInput}/>

                <input type="button" value='addComment' onClick={addCommentHandler} className={clas.btn_addComment}/>
                <div className={clas.size}><h1>{product.size[1]} </h1></div>

            </div>
            {  addDisplay !== undefined &&
            <div style={{display: addDisplay}} >
                <AddProductDIsplay product={product}  />
            </div>
            }

        </div>
    );
};

export default AddOneProduct;