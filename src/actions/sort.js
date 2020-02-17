const onSort = (el,state) => {
    let arr = state.items;
    if (state.sort) {
        arr = arr.sort((a, b) => (+a[el] - +b[el]));
        return{
            ...state,
            items:arr,
            sort: false
        };
    } else {
        arr = arr.sort((a, b) => (+b[el] - +a[el]));
        return{
            ...state,
            items:arr,
            sort: true
        };
    }
};

export default onSort;