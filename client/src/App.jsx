import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import ProductByBrand from "./pages/product-by-brand.jsx";
import ProductByCategory from "./pages/product-by-category.jsx";
import ProductByKeyword from "./pages/product-by-keyword.jsx";
import ProductDetails from "./pages/product-details.jsx";
import AboutPage from './pages/about-page.jsx';
import RefundPage from './pages/refund-page';
import PrivacyPage from './pages/privacy-page';
import TermsPage from './pages/terms-page';
import HowToBuyPage from './pages/how-to-buy-page';
import ContactPage from './pages/contact-page';
import ComplainPage from './pages/complain-page';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/by-brand/:id" element={<ProductByBrand/>}/>
                <Route path="/by-category/:id" element={<ProductByCategory/>}/>
                <Route path="/by-keyword/:keyword" element={<ProductByKeyword/>}/>
                <Route path="/details/:id" element={<ProductDetails/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/refund" element={<RefundPage/>}/>
                <Route path="/privacy" element={<PrivacyPage/>}/>
                <Route path="/terms" element={<TermsPage/>}/>
                <Route path="/how-to-buy" element={<HowToBuyPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/complain" element={<ComplainPage/>}/>


            </Routes>
        </BrowserRouter>
    );
};
export default App;