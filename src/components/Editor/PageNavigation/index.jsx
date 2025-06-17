import React from 'react';
import PageContextMenu from '../PageContextMenu'; // Corrected path

const PageNavigation = ({
  pages,
  activePageId,
  setActivePage,
  draggedPageId,
  dragOverPageId,
  handleDragStart,
  handleDragOver,
  handleDragEnter,
  handleDragLeave,
  handleDrop,
  handleDragEnd,
  handleAddPage,
  contextMenuOpenForPageId,
  toggleContextMenu,
  handleContextMenuAction,
  contextMenuRef,
  hoveredPageIndex,
  setHoveredPageIndex
}) => {
  return (
    // Removed overflow-x-auto and scrollbar-hide to prevent clipping of context menu
    <div className="flex flex-wrap items-center bg-gray-700 rounded-full p-1.5 space-x-1">
      {pages.map((page, index) => (
        <React.Fragment key={page.id}>
          {/* Add Page Button between elements */}
          {index > 0 && (
            <div
              className="flex items-center justify-center p-1.5"
              onMouseEnter={() => setHoveredPageIndex(index)}
              onMouseLeave={() => setHoveredPageIndex(null)}
            >
              <button
                onClick={() => handleAddPage(index)}
                className={`
                  w-6 h-6 rounded-full bg-blue-500 hover:bg-blue-600 text-white
                  flex items-center justify-center text-sm font-bold transition-all duration-200 ease-in-out
                  ${hoveredPageIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                `}
                aria-label="Add new page"
              >
                +
              </button>
            </div>
          )}

          {/* Page Item */}
          <div
            className={`
              flex items-center group
              relative cursor-pointer select-none
              rounded-full px-4 py-3 sm:py-4 transition-all duration-200 ease-in-out /* Adjusted vertical padding here */
              ${activePageId === page.id ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-600 text-gray-200 hover:bg-gray-500'}
              ${draggedPageId === page.id ? 'opacity-50' : ''}
              ${dragOverPageId === page.id && draggedPageId !== page.id ? 'border-2 border-blue-400 transform scale-105' : ''}
            `}
            draggable="true"
            onDragStart={(e) => handleDragStart(e, page.id)}
            onDragOver={handleDragOver}
            onDragEnter={(e) => handleDragEnter(e, page.id)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, page.id)}
            onDragEnd={handleDragEnd}
            onClick={() => setActivePage(page.id)}
          >
            <span className="mr-2">📄</span> {/* Icon for page */}
            <span className="font-medium text-sm sm:text-base">{page.name}</span>

            {/* Three dots icon for context menu */}
            <button
              className="ml-2 p-1 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-150"
              onClick={(e) => toggleContextMenu(e, page.id)}
              aria-label="Page options"
            >
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>

            {/* Context Menu */}
            {contextMenuOpenForPageId === page.id && (
              <PageContextMenu
                ref={contextMenuRef}
                pageId={page.id}
                onAction={handleContextMenuAction}
              />
            )}
          </div>
        </React.Fragment>
      ))}

      {/* Add Page Button at the end */}
      <div className="flex items-center justify-center p-1.5 ml-1">
        <button
          onClick={() => handleAddPage(pages.length)}
          className="
            w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white
            flex items-center justify-center text-lg font-bold transition-transform duration-200 ease-in-out
            hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800
          "
          aria-label="Add new page"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PageNavigation;
