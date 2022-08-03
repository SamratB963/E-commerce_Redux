//For Adding Item to Cart

export const addCart = (product) =>{
    return {
        type : "ADD_ITEM",
        payload : product
    }
}

//For Deleting Item from Cart
export const delCart = (product) =>{
    return {
        type : "DeLETE_ITEM",
        payload : "product"
    }
}