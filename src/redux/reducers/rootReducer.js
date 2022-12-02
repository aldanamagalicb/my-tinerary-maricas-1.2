import citiesReducer from './citiesReducer';
import hotelsReducer from './hotelsReducer';
import userReducer from './userReducer';
import reactionReducer from './reactionReducer';
import commentsReducers from './commentsReducers';

const rootReducer = {
    citiesReducer,
    hotelsReducer,
    userReducer,
    reactionReducer,
    commentsReducers
};

export default rootReducer;