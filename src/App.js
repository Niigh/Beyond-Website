import React from 'react';

import { Header, Footer } from './containers';
import { Navbar } from './components';


const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <Footer />
        </div>
    )
}

export default App