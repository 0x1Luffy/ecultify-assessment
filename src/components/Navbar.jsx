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
              <img src="https://i.ibb.co/6gKnBsR/Block.png" alt="Logo" />
            </span>
          </div>

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

          <div className="space-x-4">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
