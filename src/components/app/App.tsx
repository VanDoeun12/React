import React from 'react';
import './index.css';
import DefaultLayout from '../layout/DefaultLayout';
import Nav from '../nav';
import Hero from '../hero';
import About from '../about';
import OurMenu from '../our-menu/inex';
import Contact from '../contact';

function App() {
  return (
    <div >
      <DefaultLayout>
        {/* Nav */}
        <Nav />
        {/* End of Nav */}

       
        <div className="content">
           {/* Hero */}
          <Hero />
          {/* End of Hero */}

         <div className="inside-content">
          {/* About */}
          <About />
          {/* End of About */}
          
          <hr />

          {/* Menu */}
          <OurMenu />
        {/* End of Menu */}

        <hr />

         {/* Contact */}
         <Contact />
        {/* End of Contact */}
          </div> 
        </div>

        

        

       

        {/* Footer */}
        {/* End of Footer */}

      </DefaultLayout>
    </div>
  );
}

export default App;
