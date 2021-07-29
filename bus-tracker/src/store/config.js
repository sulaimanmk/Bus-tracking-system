import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createMigrate, persistReducer, persistStore} from 'redux-persist'
import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import {initialState as initialGlobalReducer, reducer as globalReducer} from './global-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const migrations = {
    // Migration Version in production: 0, increase by 1 when publishing a modified store!!!
    3: (state) => {
        return {
            ...state,
            globalReducer: initialGlobalReducer,
        }
    },
};

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: null,
    version: 3,
    debug: false,
    migrate: createMigrate(migrations, { debug: false }),
};

const rootReducer = combineReducers({
    globalReducer: globalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
const  persistor = persistStore(store);

export { store, persistor };
