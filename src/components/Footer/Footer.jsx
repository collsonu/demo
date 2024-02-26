import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto p/-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0 mx-3">
            <h2 className="text-2xl font-bold">Your Company</h2>
            <p className="text-sm mt-2">Building awesome products since 20XX</p>
          </div>

          <div className="flex flex-wrap mx-4">
            <div className="mb-4 md:mb-0 md:mr-6">
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <ul className="list-none p-0">
                <li className="mb-1">
                  <Link to="/" className="hover:text-gray-400 transition duration-300">
                    Home
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-gray-400 transition duration-300">
                    About Us
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-gray-400 transition duration-300">
                    Services
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-gray-400 transition duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-4 md:mb-0 md:mr-6">
              <h3 className="text-xl font-bold mb-2">Products</h3>
              <ul className="list-none p-0">
                <li className="mb-1">
                  <Link to="/" className="hover:text-gray-400 transition duration-300">
                    Product 1
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-gray-400 transition duration-300">
                    Product 2
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-gray-400 transition duration-300">
                    Product 3
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Social Media</h3>
              <ul className="list-none p-0">
                <li className="mb-1">
                  <Link to="/" className="hover:text-gray-400 transition duration-300">
                    Facebook
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-gray-400 transition duration-300">
                    Twitter
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-gray-400 transition duration-300">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
