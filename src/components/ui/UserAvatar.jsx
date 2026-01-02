import React from 'react';
export const UserAvatar = ({ user, size = 'md', className = '' }) => {
  // Get the first letter of the user's name
  const getInitial = () => {
    if (!user || !user.name) return '?';
    return user.name.charAt(0).toUpperCase();
  };
  // Generate a consistent background color based on the user's name
  const getBackgroundColor = () => {
    if (!user || !user.name) return 'bg-gray-400';
    // Simple hash function to generate a consistent color for a given name
    const hash = user.name.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    // List of background colors to choose from
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500',
      'bg-indigo-500', 'bg-purple-500', 'bg-pink-500', 'bg-teal-500'
    ];
    // Use the hash to pick a color
    const colorIndex = Math.abs(hash) % colors.length;
    return colors[colorIndex];
  };
  // Define size classes
  const sizeClasses = {
    sm: 'size-6',
    md: 'size-8',
    lg: 'size-12',
    xl: 'size-16'
  };
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  // If user has an image, display it
  if (user?.image_url) {
    return (
      <img
        src={user.image_url}
        alt={user.name || 'User'}
        className={`${sizeClass} rounded-full object-cover ${className}`}
      />
    );
  }
  // Otherwise, display the initial letter
  return (
    <div
      className={`${sizeClass} ${getBackgroundColor()} rounded-full flex items-center justify-center text-white font-medium ${className}`}
    >
      {getInitial()}
    </div>
  );
};



















