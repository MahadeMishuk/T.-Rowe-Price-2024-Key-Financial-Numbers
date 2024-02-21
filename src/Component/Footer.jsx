import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-gray-800 text-white p-8">
        <p className='tracking-widest font-sans ml-24 mt-5'>INVEST WITH CONFIDENCE®</p><br/><br/>
        <p className='ml-24 mt-5 mr-24 border-b-2 border-gray-600 border-solid mb-2'></p>
    
    <div className="flex flex-col md:flex-row justify-between items-top p-24 bg-gray-800 text-white text-sm">
      <div>
        <h3 className="text-sm font-bold mb-2">Our Mission Is Simple.</h3>
        <p>Help clients around the world <br/>achieve their long-term investment <br/>goals.</p>
      </div>
      <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 text-sm">
        <h3 className="text-sm font-bold mb-2">Connect with Us:</h3>
        <div className="flex space-x-4">
        <ul>
        <li><a href="https://www.facebook.com/troweprice" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-2 gap-3'><FaFacebook/> Facebook</a></li>
        <li><a href="https://twitter.com/troweprice" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-2 gap-3'><FaTwitter/> Twitter</a></li>
        <li> <a href="https://www.youtube.com/trowepricegroup" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-2 gap-3'><FaYoutube/> YouTube</a></li>
        <li> <a href="https://www.linkedin.com/company/t--rowe-price/" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-2 gap-3'><FaLinkedin/> LinkedIn</a></li>
          </ul></div>
      </div>
      <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 text-sm">
        <ul className="flex flex-col space-y-2">
            <li><a href="https://www.troweprice.com/corporate/us/en/what-we-do.html">Company Overview</a></li>
          <li><a href="https://www.troweprice.com/corporate/us/en/what-sets-us-apart/corporate-responsibility.html">Responsibility</a></li>
          <li><a href="https://www.troweprice.com/corporate/us/en/careers.html">Careers</a></li>
          <li><a href="https://troweprice.gcs-web.com/">Investor Relations</a></li>
          <li><a href="https://www.troweprice.com/corporate/us/en/press.html">Newsroom</a></li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 text-sm">
        <ul className="flex flex-col space-y-2">
          <li><a href="https://www.troweprice.com/personal-investing/sitemap.html">Site Map</a></li>
          <li><a href="https://www.troweprice.com/enterprise/legal/us/en/privacy-notices.html">U.S. & Canada Privacy Notice</a></li>
          <li><a href="https://www.troweprice.com/personal-investing/help/policies-and-security/terms-of-use.html">Terms of Use</a></li>
          <li><a href="https://www.troweprice.com/personal-investing/help/policies-and-security/security.html">Security Measures</a></li>
          <li><a href="https://www.troweprice.com/personal-investing/help/policies-and-security/legal.html">Legal Information</a></li>
          <li><a href="https://www.troweprice.com/personal-investing/help/policies-and-security/customer-agreement.html">Customer Agreement</a></li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 text-sm">
        <ul className="flex flex-col space-y-2">
          <li><a href="https://www.troweprice.com/personal-investing/about/form-crs.html">Form CRS</a></li>
          <li><a href="https://www.troweprice.com/corporate/us/en/mobile-solutions.html">Mobile Solution</a></li>
          <li><a href="https://www.troweprice.com/personal-investing/help/contact/index.html">Contact Us</a></li>
        </ul>
      </div>

      
    </div>
    </div>
  );
}

export default Footer;
