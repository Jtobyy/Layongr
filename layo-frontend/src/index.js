import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Header, Footer } from './bases';
import Home from './pages/home';
import './styles/index.css';

import { store, persistor } from './app/store';
import { Provider } from 'react-redux';
import WomenCat from './pages/womenCat';
import MenCat from './pages/menCat';
import KidsCat from './pages/kidsCat';
import Fabrics from './pages/fabrics';
import { NotFound } from './components/notFound';
import ProductDetail from './pages/productDetail';
import FabricDetail from './pages/fabricDetail';
import CheckoutMeasurement from './pages/checkoutMeasurement';
import ReviewOrder from './pages/orderReview';
import Profile from './pages/profile/profile';

// import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  render() {
    return (
      <Router>  
        <div>
          <Header />  
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Women' element={<WomenCat />} />
            <Route path='/Men' element={<MenCat />} />
            <Route path='/Kids' element={<KidsCat />} />
            <Route path='/Fabrics' element={<Fabrics />} />
            <Route path='/ProductDetail' element={<ProductDetail />} />
            <Route path='/FabricDetail' element={<FabricDetail />} />
            <Route path='/CheckoutMeasurement' element={<CheckoutMeasurement />} />
            <Route path='/ReviewOrder' element={<ReviewOrder />} />
            <Route path='/Profile' element={<Profile />} />

            {/* <Route path='/Men' element={<Home />} /> */}

            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>  
    ) 
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
