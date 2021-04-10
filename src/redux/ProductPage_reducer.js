import {loadFullPageAPI} from "../api/api";

export const standardFoto = `https://i.pinimg.com/originals/0a/fc/9d/0afc9d628cf8fe5cf89d815799f672b7.jpg`


const DELETE_COMMENT = 'DELETE_COMMENT'
const ADD_COMMENT = 'ADD_COMMENT'
const CHANGEITEM = 'CHANGEITEM'
const ADD_ITEM = 'ADD_ITEM'
const CHANGE_DISPLAY = 'CHANGE_DISPLAY'
const ADD_ITEM_DISPLAY = 'ADD_ITEM_DISPLAY'
const PUT_FULL_PAGE = 'PUT_FULL_PAGE'

const defaultStatus = {
    /* в залежності від id editDisplay */
    editDisplay:undefined,
    addDisplay:undefined,
    products: [
        {
            id: 1,
            imageUrl: standardFoto,
            name: 'Product name',
            count: 4,
            size: {
                width: 200,
                height: 200
            },
            weight: '200g',
            comments: [{
                id: 16,
                productId: 1,
                description: 'some text hext',
                date: '14:00 22.08.2021'
            },
                {
                    id: 3,
                    productId: 1,
                    description: 'some text here',
                    date: '14:00 22.08.2021'
                }]
        },
    ]
}
const ProductPageReducer = (state = defaultStatus, action) => {
    switch (action.type) {
        case PUT_FULL_PAGE:return {...state ,products: [...action.FullPage]}
        case DELETE_COMMENT:

             return {...state, products: [...state.products.map(item=>( item.id !== action.itemId
                         ? item
                         : {  id: item.id,
                             imageUrl: item.imageUrl,
                             name: item.name,
                             count: item.count,
                             size: item.size,
                             weight: item.weight,
                             comments: [...item.comments.filter(comment =>comment.id !==action.commentId)]}
                 ))]}
                 case ADD_COMMENT:
             return {...state, products: [...state.products.map(item=>( item.id !== action.itemId
                         ? item
                         : {  id: item.id,
                             imageUrl: item.imageUrl,
                             name: item.name,
                             count: item.count,
                             size: item.size,
                             weight: item.weight,
                             comments: [...item.comments,{
                                 id: action.newId,
                                 productId: item.id,
                                 description: action.commentValue,
                                 date: action.date
                             }]}
                 ))]}
        case CHANGEITEM:
            return {...state ,editDisplay:undefined,products: [...state.products.map(item=>( item.id !== action.itemId
                        ? item
                        : {  id: item.id,
                            imageUrl: action.imageUrl,
                            name: action.nameValue,
                            count: action.count,
                            size: {...item.size, width: action.width,height:action.height},
                            weight: action.weight,
                            comments: [...item.comments,{
                                id: action.newId,
                                productId: item.id,
                                description: action.commentValue,
                                date: action.date
                            }]}
                ))]


            }
        case ADD_ITEM:
            return {...state ,
                addDisplay:undefined,
                products:[ ...state.products,
                    {id: action.payload.id,
                         imageUrl: action.payload.imageUrl,
                         name: action.payload.name,
                        count: action.payload.count,
                        size: action.payload.size,
                        weight: action.payload.weight,
                              comments: [...action.payload.coments]}]
                // comments:[...action.]
            }
            case CHANGE_DISPLAY:return {...state ,editDisplay:action.change}
            case ADD_ITEM_DISPLAY:return {...state ,addDisplay:action.changeAddDisplay}
        default:
            return state
    }
}
export const deleteComment = (itemId,commentId) => ({type: DELETE_COMMENT, itemId,commentId})
export const addComment = (newId,itemId,commentValue,date) => ({type: ADD_COMMENT,newId, itemId,commentValue,date})
export const changeItem = (itemId,imageUrl,nameValue,count,width,height,weight) => ({type: CHANGEITEM, itemId,imageUrl,nameValue,count,width,height,weight})
export const addItemItem = (payload) => ({type: ADD_ITEM, payload})

export const changeDisplay = (change) => ({type: CHANGE_DISPLAY,change })
export const changeAddDisplay = (changeAddDisplay) => ({type: ADD_ITEM_DISPLAY,changeAddDisplay })


 export const putFullPage = (FullPage) => ({type: PUT_FULL_PAGE,FullPage })

export const downloadFullPage = () => async (dispatch) => {
    try {
            let response = await loadFullPageAPI()
            if (response.status === 200) {
                dispatch(putFullPage(response.data.products))
        } else {
            console.log('trouble in get back downloadFullPage ')
            return undefined
        }
    } catch (e) {
        console.log('trouble in get back uploaded downloadFullPage', e)
    }

}

export default ProductPageReducer




