export const getTotalBasketCount = state => {
    if(state.basket.basketIds.length === 0)
        return 0;
     else
        return state.basket.basketIds.length;
}

export const getTotalBasketPrice = state =>{
    const addedProducts = state.basket.basketIds.map(
        productId => {
            const foundProduct = state.products.products.find(product =>
                product._id === productId.id
            )

            return foundProduct;
        }
    )
    console.log(addedProducts);
    const basketPrices = addedProducts.map(
        product => product.full_day_rent * product.quantity
    )
    const totalBasketPrice = basketPrices.reduce((a, b) => a + b, 0);

    return totalBasketPrice

}

export const getProducts = (state, ownProps) => {
    let currentList = [];
    let newList = [];
    if (state.product.search !== "") {
        currentList = state.products.products;
        newList = currentList.filter(item => {
            const lc = item.product_name.toLowerCase();
            const filter = state.product.search.toLowerCase();
            return lc.includes(filter);
        });
        return newList;
    } else if(Object.entries(ownProps.match.params).length === 0) {
        newList = state.products.products;
        return newList;
    }
      else if (Object.entries(ownProps.match.params).length > 0) {
        let i, j;
        for(i = 0; i < state.categories.categories.length; i++){
            for(j = 0; j < state.products.products.length; j++){
                if(state.products.products[j].category === state.categories.categories[i].name){
                    if(state.categories.categories[i]._id === Number(ownProps.match.params.id)){
                        newList.push(state.products.products[j]);
                    }
                }
            }
        }
        return newList
        }

}

export const getActiveCategoryId = ownProps => ownProps.match.params;

export const getBasketProductsWithCount = state => {
    let BasketArray = [];
    state.products.products.forEach(product =>
        {
            for(let item of state.basket.basketIds){
                if(Number(item.id) === Number(product._id)){
                    const productWithDaysToRent = Object.assign(product, {days_to_rent: item['days_to_rent']});
                    return BasketArray.push(productWithDaysToRent)
                }
            }
        }
    )

    return BasketArray
}



