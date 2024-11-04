const Footer = function () {
    return (
      <div className="bg-gray-100"> {/* Use a specific gray color */}
        {/* Decorative Line Above Footer */}
        <div className="bg-gray-200 h-1"></div> {/* Change color and height as needed */}
        
        <footer className="bg-gray-100 text-black py-6"> {/* Use the same gray color for consistency */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-black text-lg font-semibold mb-4">About Desert Safari</h2>
              <p className="mb-4">
                Experience the thrill of the desert with our unforgettable desert safari rides. 
                Enjoy stunning landscapes, thrilling adventures, and the rich culture of the desert.
              </p>
            </div>
            <div>
              <h2 className="text-black text-lg font-semibold mb-4">Quick Links</h2>
              <ul>
                <li>
                  <a href="#" className="text-black hover:text-red-500 transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black hover:text-red-500 transition-colors duration-300">
                    Rides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black hover:text-red-500 transition-colors duration-300">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black hover:text-red-500 transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-black text-lg font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-black hover:text-red-500 transition-colors duration-300">
                  Facebook
                </a>
                <a href="#" className="text-black hover:text-red-500 transition-colors duration-300">
                  Twitter
                </a>
                <a href="#" className="text-black hover:text-red-500 transition-colors duration-300">
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-black text-lg font-semibold mb-4">Contact Us</h2>
              <p className="text-black">Dubai, United Arab Emirates</p>
              <p className="text-black">Email: info@desertsafari.com</p>
              <p className="text-black">Phone: (123) 456-7890</p>
            </div>
          </div>
          {/* Google Map Integration */}
          <div className="max-w-6xl mx-auto py-8">
            <h2 className="text-black text-lg font-semibold mb-4 text-center">Find Us Here</h2>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509724!2d144.95373531531548!3d-37.81627997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f12f1db%3A0x5045675218ceed30!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1630548277113!5m2!1sen!2sau"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          <p className="text-center text-xs pt-8 text-black">© 2024 Desert Safari. All rights reserved.</p>
        </footer>
      </div>
    );
}
  
export default Footer;
