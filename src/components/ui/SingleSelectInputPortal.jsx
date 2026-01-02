// import {
//   Listbox,
//   ListboxButton,
//   ListboxOption,
//   ListboxOptions,
// } from "@headlessui/react";
// import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
// import { CheckIcon } from "@heroicons/react/20/solid";
// import { createPortal } from "react-dom";
// import { useState, useRef, useEffect } from "react";

// export default function SingleSelectInputPortal({
//   label,
//   options = [],
//   value,
//   onChange,
//   placeholder,
//   inputCustomClass = "",
//   autoFocus = false,
//   onBlur,
// }) {
//   const [open, setOpen] = useState(false);
//   const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
//   const buttonRef = useRef(null);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const updatePosition = () => {
//       if (open && buttonRef.current) {
//         const rect = buttonRef.current.getBoundingClientRect();
//         const dropdownHeight = 160; // max-h-40 = 160px
        
//         const spaceBelow = window.innerHeight - rect.bottom - 10;
//         const spaceAbove = rect.top - 10;
        
//         let top, left;
        
//         // Vertical positioning
//         if (spaceBelow >= dropdownHeight) {
//           top = rect.bottom + window.scrollY + 2;
//         } else if (spaceAbove >= dropdownHeight) {
//           top = rect.top + window.scrollY - dropdownHeight - 2;
//         } else {
//           top = rect.bottom + window.scrollY + 2;
//         }
        
//         // Horizontal positioning
//         left = rect.left + window.scrollX;
        
//         // Ensure dropdown stays within viewport
//         const rightEdge = left + rect.width;
//         if (rightEdge > window.innerWidth - 20) {
//           left = window.innerWidth - rect.width - 20;
//         }
//         left = Math.max(10, left);
        
//         setPosition({ 
//           top, 
//           left, 
//           width: rect.width 
//         });
//       }
//     };

//     const handleClickOutside = (e) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target) &&
//         buttonRef.current &&
//         !buttonRef.current.contains(e.target)
//       ) {
//         setOpen(false);
//         if (onBlur) onBlur();
//       }
//     };

//     const handleEscape = (e) => {
//       if (e.key === "Escape") {
//         setOpen(false);
//         if (onBlur) onBlur();
//       }
//     };

//     if (open) {
//       setTimeout(updatePosition, 0);
//       document.addEventListener("mousedown", handleClickOutside);
//       document.addEventListener("keydown", handleEscape);
//       window.addEventListener("scroll", updatePosition, true);
//       window.addEventListener("resize", updatePosition);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleEscape);
//       window.removeEventListener("scroll", updatePosition, true);
//       window.removeEventListener("resize", updatePosition);
//     };
//   }, [open, onBlur]);

//   const handleSelect = (option) => {
//     onChange(option);
//     setOpen(false);
//     if (onBlur) onBlur();
//   };

//   return (
//     <div className={`relative w-full ${inputCustomClass}`}>
//       {label && (
//         <label
//           htmlFor="dropdown"
//           className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-default z-10"
//         >
//           {label}
//         </label>
//       )}
      
//       <button
//         ref={buttonRef}
//         type="button"
//         onClick={() => setOpen(!open)}
//         autoFocus={autoFocus}
//         className="block w-full input-border cursor-default bg-white py-1.5 pl-3 pr-10 text-left text-base text-default placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm/6"
//       >
//         <span
//           className={`block truncate ${
//             value ? "text-default" : "text-gray-400"
//           }`}
//         >
//           {value?.label ||
//             value?.templateName ||
//             value?.value ||
//             placeholder}
//         </span>
//         <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
//           <ChevronUpDownIcon
//             className="h-5 w-5 text-gray-400"
//             aria-hidden="true"
//           />
//         </span>
//       </button>

//       {open && createPortal(
//         <div
//           ref={dropdownRef}
//           className="fixed z-[9999] max-h-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
//           style={{
//             top: `${position.top}px`,
//             left: `${position.left}px`,
//             width: `${position.width}px`,
//           }}
//         >
//           {options.length > 0 ? (
//             options.map((option, index) => (
//               <button
//                 key={`${option.label || option.value}-${index}`}
//                 type="button"
//                 onClick={() => handleSelect(option)}
//                 className={`relative w-full cursor-default select-none py-2 pl-3 pr-9 text-left hover:bg-gray-100 ${
//                   value?.value === option.value ? "bg-gray-50" : ""
//                 }`}
//               >
//                 <span
//                   className={`block truncate ${
//                     value?.value === option.value ? "font-medium" : "font-normal"
//                   }`}
//                 >
//                   {option.label || option.templateName || option.value}
//                 </span>
//                 {value?.value === option.value && (
//                   <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
//                     <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                   </span>
//                 )}
//               </button>
//             ))
//           ) : (
//             <div className="text-gray-500 py-2 pl-3">
//               No options available
//             </div>
//           )}
//         </div>,
//         document.body
//       )}
//     </div>
//   );
// }



import { usePopper } from 'react-popper';
import { createPortal } from 'react-dom';
import { useState, useRef, useEffect } from 'react';
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function SingleSelectInputPortal({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  inputCustomClass = "",
  autoFocus = false,
  onBlur,
}) {
  const [open, setOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const dropdownRef = useRef(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'flip',
        enabled: true,
      },
      {
        name: 'preventOverflow',
        enabled: true,
      },
      {
        name: 'offset',
        options: {
          offset: [0, 2], // 2px gap between button and dropdown
        },
      },
      
    ],
  });
  console.log(styles,"hi this is styles");
  console.log(attributes,"hi this is attributes");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        referenceElement &&
        !referenceElement.contains(e.target)
      ) {
        setOpen(false);
        if (onBlur) onBlur();
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        if (onBlur) onBlur();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onBlur, referenceElement]);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
    if (onBlur) onBlur();
  };

  return (
    <div className={`relative w-full ${inputCustomClass}`}>
      {/* Your original label styling */}
      {label && (
        <label
          htmlFor="dropdown"
          className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-default z-10"
        >
          {label}
        </label>
      )}
      
      {/* Your original button styling */}
      <button
        ref={setReferenceElement}
        type="button"
        onClick={() => setOpen(!open)}
        autoFocus={autoFocus}
        className="block w-full input-border cursor-default bg-white py-1.5 pl-3 pr-10 text-left text-base text-default placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm/6"
      >
        <span
          className={`block truncate ${
            value ? "text-default" : "text-gray-400"
          }`}
        >
          {value?.label ||
            value?.templateName ||
            value?.value ||
            placeholder}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </button>

      {/* Popper.js dropdown with your original styling */}
      {open && createPortal(
        <div
          ref={(node) => {
            setPopperElement(node);
            dropdownRef.current = node;
          }}
          style={styles.popper}
          {...attributes.popper}
          className="fixed z-[9999] max-h-40 max-w-36 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
        >
           {options.length > 0 ? (
            options.map((option, index) => (
              <button
                key={`${option.label || option.value}-${index}`}
                type="button"
                onClick={() => handleSelect(option)}
                className={`relative w-full cursor-default select-none py-2 pl-3 pr-9 text-left hover:bg-gray-100 ${
                  value?.value === option.value ? "bg-gray-50" : ""
                }`}
              >
                <span
                  className={`block truncate ${
                    value?.value === option.value ? "font-medium" : "font-normal"
                  }`}
                >
                  {option.label || option.templateName || option.value}
                </span>
                {value?.value === option.value && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                )}
              </button>
            ))
          ) : (
            <div className="text-gray-500 py-2 pl-3">
              No options available
            </div>
          )}
        </div>,
        document.body
      )}
    </div>
  );
}
