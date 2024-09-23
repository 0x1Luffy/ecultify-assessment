const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold"> {/* Placeholder for Logo */}
            <span className="block">
                <img src="https://i.ibb.co/6gKnBsR/Block.png" alt="Logo" />
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 bg-gray-100 rounded-lg px-1 hover:text-gray-900">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Solutions</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
          <div className="space-x-4">
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">Sign In</button>
            <button className="px-4 py-2 text-white bg-gray-900 rounded-md hover:bg-gray-700">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
