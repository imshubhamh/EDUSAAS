import React, { memo, useState, useEffect, useRef, useMemo } from 'react';
import { Loader2, Check, Users, Plus } from 'lucide-react';
import { debounce } from 'lodash';
import { getInitials } from '../../utils/globalMixin';
// import { getInitials } from '../../global/globalMixin';

const Select = memo(({
  id,
  name,
  options = [],
  placeholder = '',
  value,
  onChange,
  className = '',
  label = '',
  error = '',
  required = false,
  isLoading = false,
  isDisabled = false,
  showAvatar = false,
  multiple = false,
  multiplePlaceHolder = 'Options',
  showCreateOption = false,
  onCreateNew,
  createLabel = 'Create new option',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownDirection, setDropdownDirection] = useState('down');
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);
  const selectRef = useRef(null);
  const inputRef = useRef(null);

  // Compute filtered options with useMemo
  const filteredOptions = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();
    return options.filter((option) =>
      option?.label?.toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm, options]);

  // Check if we should show create option
  const shouldShowCreateOption = useMemo(() => {
    if (!showCreateOption || !searchTerm.trim()) return false;
    
    // Don't show create option if exact match exists
    const exactMatch = options.some(option => 
      option?.label?.toLowerCase() === searchTerm.toLowerCase()
    );
    
    return !exactMatch;
  }, [showCreateOption, searchTerm, options]);

  // Calculate total options for keyboard navigation (filtered + create option if shown)
  const totalOptions = filteredOptions.length + (shouldShowCreateOption ? 1 : 0);

  // Reset focusedOptionIndex when searchTerm or options change
  useEffect(() => {
    setFocusedOptionIndex(-1);
  }, [searchTerm, options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Determine dropdown direction
  useEffect(() => {
    if (isOpen && selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const dropdownHeight = Math.min(totalOptions * 40, 240);

      const newDirection = spaceBelow < dropdownHeight && spaceAbove > spaceBelow ? 'up' : 'down';
      setDropdownDirection((prev) => (prev !== newDirection ? newDirection : prev));
    }
  }, [isOpen, totalOptions]);

  // Handle selection
  const handleSelect = (option) => {
    if (multiple) {
      const isSelected = selectedValues.includes(option.value);
      const newValues = isSelected
        ? selectedValues.filter((val) => val !== option.value)
        : [...selectedValues, option.value];
      onChange(newValues);
    } else {
      onChange(option);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  // Handle create new option
  const handleCreateNew = async () => {
    if (!searchTerm.trim() || !onCreateNew) return;
    
    try {
      await onCreateNew(searchTerm.trim());
      setSearchTerm('');
      setIsOpen(false);
    } catch (error) {
      console.error('Error creating new option:', error);
    }
  };

  // Handle input click
  const handleInputClick = () => {
    if (!isDisabled && !isLoading) {
      setIsOpen(true);
      if (!multiple && !value) {
        setSearchTerm('');
      }
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (isDisabled || isLoading) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        setFocusedOptionIndex((prev) =>
          prev < totalOptions - 1 ? prev + 1 : prev
        );
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        setFocusedOptionIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }
    } else if (e.key === 'Enter' && isOpen && focusedOptionIndex >= 0) {
      e.preventDefault();
      
      // Check if focused on create option
      if (shouldShowCreateOption && focusedOptionIndex === filteredOptions.length) {
        handleCreateNew();
      } else if (focusedOptionIndex < filteredOptions.length) {
        handleSelect(filteredOptions[focusedOptionIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm('');
      inputRef.current?.blur();
    }
  };

  // Helper function to check if we should show avatar
  const shouldShowAvatar = (option) => {
    return showAvatar || (option && (option.avatar || option.image_url));
  };

  // Helper function to render avatar
  const renderAvatar = (option, isInDropdown = false) => {
    if (!shouldShowAvatar(option)) return null;

    const hasValidImage = option && (option.avatar || option.image_url) && 
                         (option.avatar !== null && option.image_url !== null);

    if (isInDropdown) {
      return (
        <div className="flex-shrink-0">
          {hasValidImage ? (
            <>
              <img 
                src={option.image_url || option.avatar} 
                alt={option.label}
                className="w-5 h-5 rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-medium hidden"
              >
                {getInitials(option.label)}
              </div>
            </>
          ) : (
            <div 
              className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-medium"
            >
              {getInitials(option.label)}
            </div>
          )}
        </div>
      );
    }

    return hasValidImage ? (
      <>
        <img 
          src={option.image_url || option.avatar} 
          alt={option.label}
          className="w-5 h-5 rounded-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div 
          className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-medium hidden"
        >
          {getInitials(option.label)}
        </div>
      </>
    ) : (
      <div 
        className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-medium"
      >
        {getInitials(option.label)}
      </div>
    );
  };

  // Handle both single and multiple selection values
  const selectedValues = multiple 
    ? (Array.isArray(value) ? value : (value ? [value] : []))
    : (value ? [value] : []);
  
  const selectedOptions = multiple
    ? options?.filter(option => selectedValues.includes(option.value)) || []
    : (options?.find(option => option.value === value) ? [options.find(option => option.value === value)] : []);

  // Get display value for input field
  const getDisplayValue = () => {
    if (isOpen) return searchTerm;
    
    if (multiple) {
      if (selectedOptions.length === 0) return '';
      return `${selectedOptions.length} ${multiplePlaceHolder} Selected`;
    }
    
    return selectedOptions[0]?.label || '';
  };

  // Check if an option is selected
  const isOptionSelected = (optionValue) => {
    return selectedValues.includes(optionValue);
  };

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      {label && (
        <label
          htmlFor={id}
          className={`absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium z-10 ${
            error ? 'text-red-500' : 'text-gray-700'
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          name={name}
          type="text"
          ref={inputRef}
          value={getDisplayValue()}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onClick={handleInputClick}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`block w-full min-h-[2.25rem] box-border border rounded-md pl-3 pr-8 py-1.5 text-sm text-gray-700 placeholder:text-gray-400 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
            error ? 'border-red-500' : 'border-gray-300'
          } ${isDisabled || isLoading ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} ${
            (!multiple && selectedOptions[0] && shouldShowAvatar(selectedOptions[0])) || 
            (multiple && selectedOptions.length > 0) ? 'pl-9' : 'pl-3'
          }`}
          readOnly={isLoading || isDisabled}
        />
        
        {/* Display selected avatar for single selection */}
        {!multiple && selectedOptions[0] && shouldShowAvatar(selectedOptions[0]) && (
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
            {renderAvatar(selectedOptions[0])}
          </div>
        )}
        
        {/* Multiple selection display - show Users icon with count */}
        {multiple && selectedOptions.length > 0 && !isOpen && (
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 flex items-center gap-1.5">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                {selectedOptions.length}
              </span>
            </div>
          </div>
        )}
        
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
          ) : (
            <svg
              className="h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      {isOpen && !isDisabled && (
        <div
          className={`absolute z-20 w-full bg-white shadow-lg rounded-md py-1 text-sm ring-1 ring-black ring-opacity-5 overflow-auto ${
            dropdownDirection === 'up'
              ? 'bottom-full mb-1 max-h-[240px]'
              : 'top-full mt-1 max-h-[240px]'
          }`}
          style={{ maxHeight: `${Math.min(totalOptions * 40, 240)}px` }}
        >
          {isLoading ? (
            <div className="py-2 px-3 text-gray-500 flex items-center justify-center">
              <Loader2 className="h-4 w-4 animate-spin text-gray-400 mr-2" />
              <span>Loading...</span>
            </div>
          ) : (
            <>
              {/* Regular filtered options */}
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => {
                  const isSelected = isOptionSelected(option.value);
                  return (
                    <div
                      key={option.value}
                      onClick={() => handleSelect(option)}
                      className={`cursor-pointer select-none py-2 px-3 hover:bg-gray-100 ${
                        isSelected ? 'bg-blue-50 font-medium' : 'text-gray-700'
                      } ${index === focusedOptionIndex ? 'bg-gray-200' : ''} flex items-center justify-between gap-2`}
                    >
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        {shouldShowAvatar(option) && renderAvatar(option, true)}
                        <span className="truncate">{option.label}</span>
                      </div>
                      
                      {/* Show checkmark for selected options in multiple mode */}
                      {multiple && isSelected && (
                        <Check className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      )}
                    </div>
                  );
                })
              ) : (
                !shouldShowCreateOption && (
                  <div className="py-2 px-3 text-gray-500">
                    {searchTerm.trim() ? 'No matching value found' : 'No options found'}
                  </div>
                )
              )}
              
              {/* Create new option */}
              {shouldShowCreateOption && (
                <>
                  {filteredOptions.length > 0 && (
                    <div className="border-t border-gray-200 "></div>
                  )}
                  <div
                    onClick={handleCreateNew}
                    className={`cursor-pointer select-none py-2 px-3 hover:bg-blue-50 text-blue-500 ${
                      focusedOptionIndex === filteredOptions.length ? 'bg-blue-100' : ''
                    } flex items-center gap-2`}
                  >
                    <Plus className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">
                      {createLabel}: "{searchTerm.trim()}"
                    </span>
                  </div>
                </>
              )}
              
              {/* Clear all button for multiple selection */}
              {multiple && selectedOptions.length > 0 && (
                <div className="border-t border-gray-200 mt-1 pt-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onChange([]);
                      setSearchTerm('');
                    }}
                    className="w-full text-left py-2 px-3 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
                  >
                    Clear all selections
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
      {error && (
        <p className="text-xs mt-0.5 text-red-500">{error}</p>
      )}
    </div>
  );
});

export default Select;