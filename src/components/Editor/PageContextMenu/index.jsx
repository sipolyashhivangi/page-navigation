import React from 'react';

const PageContextMenu = React.forwardRef(({ pageId, onAction }, ref) => {
  return (
    <div
      ref={ref}
      // Figma: white/light background, subtle border, distinct shadow
      // Changed width back to fixed (w-48) and adjusted positioning to align better.
      // Removed max-w-xs as w-48 is already a fixed small width.
      className="absolute z-10 top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden
                 flex flex-col border border-gray-200 py-1"
      onClick={(e) => e.stopPropagation()} // Prevent parent click from closing
    >
      <button
        className="px-3 py-2 text-left text-sm text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-150 rounded-md mx-1 my-0.5"
        onClick={() => onAction('Set as first page', pageId)}
      >
        Set as first page
      </button>
      <button
        className="px-3 py-2 text-left text-sm text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-150 rounded-md mx-1 my-0.5"
        onClick={() => onAction('Rename', pageId)}
      >
        Rename
      </button>
      <button
        className="px-3 py-2 text-left text-sm text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-150 rounded-md mx-1 my-0.5"
        onClick={() => onAction('Copy', pageId)}
      >
        Copy
      </button>
      <button
        // Updated styling for Duplicate to match Figma's orange
        className="px-3 py-2 text-left text-sm text-orange-500 hover:bg-orange-100 hover:text-orange-700 transition-colors duration-150 rounded-md mx-1 my-0.5"
        onClick={() => onAction('Duplicate', pageId)}
      >
        Duplicate
      </button>
      <button
        className="px-3 py-2 text-left text-sm text-red-600 hover:bg-red-100 hover:text-red-800 transition-colors duration-150 rounded-md mx-1 my-0.5"
        onClick={() => onAction('Delete', pageId)}
      >
        Delete
      </button>
      <div className="border-t border-gray-200 my-1"></div> {/* Lighter divider */}
      <button
        className="px-3 py-2 text-left text-sm text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-150 rounded-md mx-1 my-0.5"
        onClick={() => onAction('Other', pageId)}
      >
        Other
      </button>
    </div>
  );
});

export default PageContextMenu;
