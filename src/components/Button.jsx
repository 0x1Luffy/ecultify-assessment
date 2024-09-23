// Reusable Button component
const Button = ({ label, onClick, isPrimary = true, className = '' }) => {
  // Determine the styles based on isPrimary
  const baseStyles = 'px-4 py-2 rounded transition';
  const primaryStyles = 'bg-gray-600 text-white hover:bg-gray-700';
  const secondaryStyles = 'bg-transparent text-black border border-gray-600 hover:bg-gray-200';

  return (
    <button
      className={`${baseStyles} ${isPrimary ? primaryStyles : secondaryStyles} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
