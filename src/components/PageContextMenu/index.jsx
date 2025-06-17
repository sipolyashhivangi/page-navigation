import React from 'react';

const PageContextMenu = React.forwardRef(({ pageId, onAction }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-10 top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-gray-700 rounded-lg shadow-xl overflow-hidden
                 flex flex-col border border-gray-600 py-1"
      onClick={(e) => e.stopPropagation()} // Prevent parent click from closing
    >
      <button
        className="px-4 py-2 text-left text-sm text-gray-200 hover:bg-blue-500 hover:text-white transition-colors duration-150 rounded-md mx-1 my-0.5"
        onClick={() => onAction('Set as first page', pageId)}
      >
        Set as first page
      </button>
      <button
        className="px-4 py-2 text-left text-sm text-gray-200 hover:bg-blue-500 hover:text-white transition-colors duration-150 rounded-md mx-1 my-0.5"
        onClick={() => onAction('Rename', pageId)}
      >
        Rename
      </button>
      <button
        className="px-4 py-2 text-left text-sm text-gray-200 hover:bg-blue-500 hover:text-white transition-colors duration-150 rounded-md mx-1 my-0.5"
        onClick={() => onAction('Copy', pageId)}
      >
        Copy
      </button>
      <button
        className="px-4 py-2 text-left text-sm text-gray-200 hover:bg-blue-500 hover:text-white transition-colors duration-150 rounded-md mx-1 my-0.5"
        onClick={() => onAction('Duplicate', pageId)}
      >
        Duplicate
      </button>
      <button
        className="px-4 py-2 text-left text-sm text-red-400 hover:bg-red-500 hover:text-white transition-colors duration-150 rounded-md mx-1 my-0.5"
        onClick={() => onAction('Delete', pageId)}
      >
        Delete
      </button>
      <div className="border-t border-gray-600 my-1"></div>
      <button
        className="px-4 py-2 text-left text-sm text-gray-200 hover:bg-blue-500 hover:text-white transition-colors duration-150 rounded-md mx-1 my-0.5"
        onClick={() => onAction('Other', pageId)}
      >
        Other
      </button>
    </div>
  );
});

export default PageContextMenu;
