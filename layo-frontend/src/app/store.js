import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer }  from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import signupReducer from '../features/signupSlice';
import signinReducer from '../features/signinSlice';
import productsWishlistReducer from '../features/productsWishlistSlice';
import fabricsWishlistReducer from '../features/fabricsWishlistSlice';
import productsReducer from '../features/productsSlice';
import fabricsReducer from '../features/fabricsSlice';


const productsWishlistPersistConfig = {
    key: 'productsWishlist',
    storage,
};

const fabricsWishlistPersistConfig = {
    key: 'fabricsWishlist',
    storage,
};

const productsPersistConfig = {
    key: 'products',
    storage,
};

const productsWishlistPersistedReducer = persistReducer(productsWishlistPersistConfig, productsWishlistReducer);
const fabricsWishlistPersistedReducer = persistReducer(fabricsWishlistPersistConfig, fabricsWishlistReducer);
const productsPersistedReducer = persistReducer(productsPersistConfig, productsReducer);

export const store = configureStore({
    reducer: {
        signup: signupReducer,
        signin: signinReducer,
        productsWishlist: productsWishlistPersistedReducer,
        fabricsWishlist: fabricsWishlistPersistedReducer,
        products: productsPersistedReducer,
        fabrics: fabricsReducer,
    },
});

export const persistor = persistStore(store);