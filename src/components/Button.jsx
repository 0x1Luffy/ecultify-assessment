// Reusable Button component
const Button = ({ label, onClick, isPrimary = true, className = '', size = 'medium' }) => {
  // Base styles
  const baseStyles = 'rounded transition';

  // Styles for different button types
  const primaryStyles = 'bg-gray-600 text-white hover:bg-gray-700';
  const secondaryStyles = 'bg-transparent text-black border border-gray-600 hover:bg-gray-200';

  // Styles for different sizes with responsive adjustments
  const sizeStyles = {
    small: 'px-2 py-1 text-sm md:px-3 md:py-2 md:text-base',
    medium: 'px-4 py-2 text-base md:px-6 md:py-3 md:text-lg', // Default
    large: 'px-14 py-3 text-lg md:px-16 md:py-4 md:text-xl',
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
