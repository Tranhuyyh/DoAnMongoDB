
import Header from '../layouts/Header/header';
import { CartProvider } from 'react-use-cart';
import Footer from '../layouts/footer/Footer';


function MasterLayout({children}) {
    return ( 
        <CartProvider>
          <Header/>
          {children}  
          <Footer/>
        </CartProvider>
     );
}

export default MasterLayout;