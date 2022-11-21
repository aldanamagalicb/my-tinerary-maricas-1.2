import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({reducer:rootReducer})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>   
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);