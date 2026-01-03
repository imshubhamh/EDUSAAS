import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import { SingleBadge } from "./Badge";

export default function MultiSelectInput({
  label,
  options = [],
  value = [], // Now expects an array
  onChange,
  placeholder,
  required,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectionChange = (clickedOption) => {
    const isCurrentlySelected = isSelected(clickedOption);

    if (isCurrentlySelected) {
      // Remove the item if it's already selected
      const updatedValue = value.filter(
        (item) =>
          (item.value || item.label || item.templateName) !==
          (clickedOption.value ||
            clickedOption.label ||
            clickedOption.templateName)
      );
      onChange(updatedValue);
    } else {
      // Add the item if it's not selected
      onChange([...value, clickedOption]);
    }
    // Keep dropdown open after selection
  };

  const removeItem = (itemToRemove) => {
    const updatedValue = value.filter(
      (item) =>
        (item.value || item.label || item.templateName) !==
        (itemToRemove.value || itemToRemove.label || itemToRemove.templateName)
    );
    onChange(updatedValue);
  };

  const getDisplayText = (item) => {
    return item.label || item.templateName || item.value;
  };

  const isSelected = (option) => {
    return value.some(
      (item) =>
        (item.value || item.label || item.templateName) ===
        (option.value || option.label || option.templateName)
    );
  };

  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor="dropdown"
          className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-default z-10"
        >
          {label}

          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <Listbox value={value} onChange={handleSelectionChange}>
        {({ open }) => {
          // Update our state when Headless UI's open state changes
          if (open !== isOpen) {
            setIsOpen(open);
          }

          return (
            <div className="relative">
              <ListboxButton
                id="dropdown"
                className="block w-full input-border cursor-default bg-white py-1.5 pl-3 pr-10 text-left text-base text-default placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm/6 min-h-[38px]"
              >
                <div className="flex flex-wrap gap-1">
                  {value.length > 0 ? (
                    value.map((item, index) => (
                      <SingleBadge
                        key={`${getDisplayText(item)}-${index}`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          removeItem(item);
                        }}
                        text={getDisplayText(item)}
                        variant="blue"
                        className={`hover:opacity-70 hover:after:content-[''] hover:after:absolute hover:after:top-1/2 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-white hover:after:transform hover:after:-translate-y-1/2 relative transition-opacity`}
                      ></SingleBadge>
                    ))
                  ) : (
                    <span className="text-gray-400">{placeholder}</span>
                  )}
                </div>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </ListboxButton>

              <ListboxOptions className="absolute z-50 w-full max-h-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {options.length > 0 ? (
                  options.map((option, index) => (
                    <ListboxOption
                      key={`${getDisplayText(option)}-${index}`}
                      value={option}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 ${
                          active ? "bg-gray-100 text-gray-500" : "text-gray-500"
                        }`
                      }
                    >
                      {() => {
                        const selected = isSelected(option);
                        return (
                          <div
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleSelectionChange(option);
                            }}
                          >
                            <span className="block truncate font-normal">
                              {getDisplayText(option)}
                            </span>
                            {selected && (
                              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                          </div>
                        );
                      }}
                    </ListboxOption>
                  ))
                ) : (
                  <div className="text-gray-500 py-2 pl-3">
                    No options available
                  </div>
                )}
              </ListboxOptions>
            </div>
          );
        }}
      </Listbox>
    </div>
  );
}
