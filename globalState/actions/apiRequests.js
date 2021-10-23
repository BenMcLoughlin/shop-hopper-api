import * as products from '../../xhr/products';
// import * as types from './types/products'; todo

export const searchProducts = (store, query) => {
    store.actions.products.setLoading(true);
    console.log('searchProducts query:', query);
    store.actions.products.setQuery(query);

    return products.searchTwoParams(query)
        .then((data) => {
            // store.actions.products.setData(data.result); todo
            console.log('SEARCH PRODUCTS:', data.result?.length);

            store.actions.products.setLoading(false);

            return data.result;
        })
        .catch((error) => {
            store.actions.products.setLoading(false);
            console.log('error:', error);
        });
};

export const nextPage = (store) => {
    store.actions.products.setLoading(true);

    const body = {
        column: store.state.products.query.column,
        metric: store.state.products.query.metric,
        cursor: store.state.products.cursor + store.state.products.amount,
        amount: store.state.products.amount
    }; 
    console.log('nextPage body:', body);

    return products.searchProducts(body)
        .then((data) => {
            store.actions.products.setData(data.result);
            store.actions.products.setCursor(body.cursor);
            store.actions.products.setLoading(false);

            return data.result;
        })
        .catch((error) => {
            store.actions.products.setLoading(false);
            console.log('error:', error);
        });
};

export const prevPage = (store) => {
    store.actions.products.setLoading(true);

    const body = {
        column: store.state.products.query.column,
        metric: store.state.products.query.metric,
        cursor: store.state.products.cursor - store.state.products.amount,
        amount: store.state.products.amount
    }; 
    console.log('prevPage body:', body);

    return products.searchProducts(body)
        .then((data) => {
            store.actions.products.setData(data.result);
            store.actions.products.setCursor(body.cursor);
            store.actions.products.setLoading(false);

            return data.result;
        })
        .catch((error) => {
            store.actions.products.setLoading(false);
            console.log('error:', error);
        });
};

export const getHotItems = (store, amount = 12) => {
    store.actions.products.setLoading(true);

    const body = {
        amount: amount
    }; 
    console.log('getHotItems body:', body);

    return products.getHotItems(body)
        .then((data) => {
            store.actions.products.setHotItems(data.result);
            store.actions.products.setLoading(false);

            return data.result;
        })
        .catch((error) => {
            store.actions.products.setLoading(false);
            console.log('error:', error);
        });
};

export const getColumn = (store, body) => {
    store.actions.products.setLoading(true);
    console.log('getColumn body:', body);

    return products.getColumn(body)
        .then((data) => {
            store.actions.products.setLoading(false);

            return data;
        })
        .catch((error) => {
            store.actions.products.setLoading(false);
            console.log('error:', error);
        });
};