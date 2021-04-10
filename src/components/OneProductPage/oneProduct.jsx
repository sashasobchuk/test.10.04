import React, {useEffect, useState} from 'react';
import './oneProduct.css'
import {useDispatch, useSelector} from "react-redux";
import {addComment, changeDisplay, deleteComment, downloadFullPage} from "../../redux/ProductPage_reducer";
import EditDisplay from "../editDisplay/editDisplay";
import {standardFoto} from './../../redux/ProductPage_reducer'

const OneProduct = ({product}) => {



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
    const  editDisplay = useSelector(state => state.ProductPage.editDisplay)
    const showeDisplayHandler =()=>{
        dispatch(changeDisplay(product.id))
    }

    return (
        <div className='oneItem'>
            <div className='ProductName'>
                <h2> {product.name}</h2>
            </div>
            <input type="button" className="editBotton" onClick={showeDisplayHandler} value='change'/>


            <a href='some_href'>
                <img src={product.imageUrl === 'foto'? standardFoto :product.imageUrl} className='img' alt=""/>
            </a>
            <div className='properties'>
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

            <div className='coments'>
                {product.comments.map((coment,index) => <div key={index}><span className='commentValue'>
                    {coment.description}</span> <span className='commentDate'> {coment.date}</span>
                    <input className='deleteComment' onClick={() => deleteCommentHandler(coment.id)} type="button"
                           value='X'/></div>)}


                <textarea value={commentItputValue} type="text" onChange={(e) => changeCommnettHandler(e)}
                          className='commentInput'/>

                <input type="button" value='addComment' onClick={addCommentHandler} className='btn_addComment'/>
                <div className='size'><h1>{product.size[1]} </h1></div>

            </div>
            {  editDisplay === product.id &&
            <div style={{display: editDisplay}} >
                <EditDisplay product={product}  />
            </div>
            }

        </div>
    );
};

export default OneProduct;