

const Badge = ({ color, label }) => {
  const colorClasses = {
    red: 'fill-red-500',
    yellow: 'fill-yellow-500',
    green: 'fill-green-500',
    blue: 'fill-blue-500',
    indigo: 'fill-indigo-500',
    purple: 'fill-purple-500',
    pink: 'fill-pink-500',
  };

  return (
    <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-gray-200 ring-inset">
      <svg viewBox="0 0 6 6" aria-hidden="true" className={`size-1.5 ${colorClasses[color]}`}>
        <circle r={3} cx={3} cy={3} />
      </svg>
      {label}
    </span>
  );
};


export default Badge;




export const SingleBadge = ({ text = 'Badge', variant = 'blue',className,onClick }) => {
  const styles = {
    blue: 'bg-blue-50 text-blue-700 ring-blue-700/10',
    gray: 'bg-gray-50 text-gray-600 ring-gray-500/10',
    red: 'bg-red-50 text-red-700 ring-red-600/10',
    yellow: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
    green: 'bg-green-50 text-green-700 ring-green-600/20',
    indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
    purple: 'bg-purple-50 text-purple-700 ring-purple-700/10',
    pink: 'bg-pink-50 text-pink-700 ring-pink-700/10',
  };

  return (
    <span onClick={onClick} className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${styles[variant]} ${className}`}>
      {text}
    </span>
  );
};