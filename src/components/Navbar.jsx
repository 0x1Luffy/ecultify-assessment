import Button from './Button';

const Navbar = () => {
  const navItems = [
    { name: 'Products', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="block">
              <img src="https://i.ibb.co/6gKnBsR/Block.png" alt="Logo" className="h-8" />
            </span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg ${item.name === 'Products' ? 'bg-gray-100 px-1' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Button Group */}
          <div className="hidden md:flex space-x-4">
            <Button
              label="Sign In"
              isPrimary={false}
              className="text-gray-700 border-gray-300"
            />
            <Button
              label="Register"
              isPrimary={true}
              className="bg-gray-900 text-white"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 focus:outline-none">
              {/* Icon for mobile menu (you can replace it with an SVG or Font Awesome icon) */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 4h16M2 10h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
