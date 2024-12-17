import './styling/App.css';
import logo from './assets/swipeLogo.png';
import CustomersTable from './components/CustomersTable';
import InvoiceTable from './components/InvoiceTable';
import ProductTable from './components/ProductTable';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FileUpload from './components/FileUpload';

function App() {
  const [selectedTab, setSelectedTab] = useState('Home');

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'Customers':
        return <CustomersTable />;
      case 'Invoices':
        return <InvoiceTable />;
      case 'Products':
        return <ProductTable />;
      case 'Home':
      default:
        return <FileUpload/>;
    }
  };

  return (
    <Router>
      <div className="App">
        <header className='header'>
          {/* Logo Image */}
          <img className='header-image' src={logo} alt='Logo' />

          {/* Buttons */}
          <div className='header-buttons'>
            <a
              href="#Home"
              className={`header-button ${selectedTab === 'Home' ? 'active' : ''}`}
              onClick={() => setSelectedTab('Home')}
            >
              Home
            </a>
            <a
              href="#invoices"
              className={`header-button ${selectedTab === 'Invoices' ? 'active' : ''}`}
              onClick={() => setSelectedTab('Invoices')}
            >
              Invoices
            </a>
            <a
              href="#products"
              className={`header-button ${selectedTab === 'Products' ? 'active' : ''}`}
              onClick={() => setSelectedTab('Products')}
            >
              Products
            </a>
            <a
              href="#customers"
              className={`header-button ${selectedTab === 'Customers' ? 'active' : ''}`}
              onClick={() => setSelectedTab('Customers')}
            >
              Customers
            </a>
          </div>
        </header>
        
        <div className="content">
          {renderTabContent()}
        </div>
      </div>
    </Router>
  );
}

export default App;
