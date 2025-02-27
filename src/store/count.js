import sliceName from "./syntax"
const storeCount = configureStore({

    reducer:{
        slice:sliceName,
    }
})

export default storeCount;