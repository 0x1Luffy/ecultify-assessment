// Reusable Button component
const Button = ({ label, onClick, isPrimary = true, className = '', size = 'medium' }) => {
  // Base styles
  const baseStyles = 'rounded transition';

  // Styles for different button types
  const primaryStyles = 'bg-gray-600 text-white hover:bg-gray-700';
  const secondaryStyles = 'bg-transparent text-black border border-gray-600 hover:bg-gray-200';

  // Styles for different sizes
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base', // Default
    large: 'px-14 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${isPrimary ? primaryStyles : secondaryStyles} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
