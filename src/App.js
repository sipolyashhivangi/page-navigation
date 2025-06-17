import React, { useState, useRef, useEffect, useCallback } from 'react';
import PageHeader from './components/PageHeader';
import EditorLayout from './components/Editor/EditorLayout';

const App = () => {
  // State to hold the list of pages
  const [pages, setPages] = useState([
    { id: '1', name: 'Info' },
    { id: '2', name: 'Details' },
    { id: '3', name: 'Other' },
    { id: '4', name: 'Ending' },
  ]);

  // State to hold the ID of the currently active page.
  // Changed initial state to null so no page content is shown by default.
  const [activePageId, setActivePageId] = useState(null);

  // State to hold the ID of the page being dragged
  const [draggedPageId, setDraggedPageId] = useState(null);

  // State to hold the ID of the page that the dragged item is currently hovering over
  const [dragOverPageId, setDragOverPageId] = useState(null);

  // State to control which page's context menu is open
  const [contextMenuOpenForPageId, setContextMenuOpenForPageId] = useState(null);

  // Ref to close context menu when clicking outside
  const contextMenuRef = useRef(null);

  // State to control visibility of the "add page" button between elements
  const [hoveredPageIndex, setHoveredPageIndex] = useState(null);

  // Function to handle setting the active page
  const handleSetActivePage = useCallback((id) => {
    setActivePageId(id);
    setContextMenuOpenForPageId(null); // Close context menu when selecting a new page
  }, []);

  // Handle drag start event
  const handleDragStart = useCallback((e, id) => {
    setDraggedPageId(id);
    e.dataTransfer.effectAllowed = 'move';
    const img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='; // Transparent 1x1 GIF
    e.dataTransfer.setDragImage(img, 0, 0);
  }, []);

  // Handle drag over event (important for drop to work)
  const handleDragOver = useCallback((e) => {
    e.preventDefault(); // Necessary to allow dropping
    e.dataTransfer.dropEffect = 'move';
  }, []);

  // Handle drag enter event
  const handleDragEnter = useCallback((e, id) => {
    e.preventDefault();
    setDragOverPageId(id);
  }, []);

  // Handle drag leave event
  const handleDragLeave = useCallback(() => {
    setDragOverPageId(null);
  }, []);

  // Handle drop event
  const handleDrop = useCallback((e, targetId) => {
    e.preventDefault();
    if (!draggedPageId || draggedPageId === targetId) {
      return;
    }

    // Find the indices of the dragged and target pages
    const draggedIndex = pages.findIndex(p => p.id === draggedPageId);
    const targetIndex = pages.findIndex(p => p.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) {
      return;
    }

    const newPages = [...pages];
    const [removed] = newPages.splice(draggedIndex, 1); // Remove dragged item
    newPages.splice(targetIndex, 0, removed); // Insert at target position

    setPages(newPages);
    setDraggedPageId(null);
    setDragOverPageId(null);
  }, [pages, draggedPageId]);

  // Handle drag end event (cleanup)
  const handleDragEnd = useCallback(() => {
    setDraggedPageId(null);
    setDragOverPageId(null);
  }, []);

  // Function to add a new page
  const handleAddPage = useCallback((index) => {
    const newId = Date.now().toString(); // Simple unique ID
    const newName = `New Page ${pages.length + 1}`;
    const newPage = { id: newId, name: newName };

    const newPages = [...pages];
    newPages.splice(index, 0, newPage); // Insert at specified index
    setPages(newPages);
    setActivePageId(newId); // Make the newly added page active
    setHoveredPageIndex(null); // Reset hover state
  }, [pages]);

  // Handle context menu toggle
  const toggleContextMenu = useCallback((e, id) => {
    e.stopPropagation(); // Prevent page click from firing
    setContextMenuOpenForPageId(prevId => (prevId === id ? null : id));
  }, []);

  // Handle click outside context menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
        setContextMenuOpenForPageId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Full implementation for context menu actions
  const handleContextMenuAction = useCallback((action, pageId) => {
    let updatedPages = [...pages];
    const pageIndex = updatedPages.findIndex(p => p.id === pageId);
    const currentPage = updatedPages[pageIndex];

    if (!currentPage) {
      console.error(`Page with ID ${pageId} not found.`);
      setContextMenuOpenForPageId(null);
      return;
    }

    switch (action) {
      case 'Set as first page':
        if (pageIndex !== 0) {
          const [removed] = updatedPages.splice(pageIndex, 1);
          updatedPages.unshift(removed); // Move to the beginning
          setPages(updatedPages);
          setActivePageId(pageId); // Keep active after reorder
        }
        break;
      case 'Rename':
        // NOTE: In a real app, use a proper modal for input, not prompt()
        const newName = prompt(`Enter new name for "${currentPage.name}":`, currentPage.name);
        if (newName && newName.trim() !== '' && newName !== currentPage.name) {
          updatedPages[pageIndex] = { ...currentPage, name: newName.trim() };
          setPages(updatedPages);
          setActivePageId(pageId); // Keep active after rename
        } else if (newName === null) {
          // User cancelled the prompt, do nothing
          console.log("Rename cancelled.");
        }
        break;
      case 'Copy':
        const copiedPage = {
          id: Date.now().toString(), // New unique ID
          name: `${currentPage.name} (Copy)`
        };
        updatedPages.splice(pageIndex + 1, 0, copiedPage); // Insert after original
        setPages(updatedPages);
        setActivePageId(copiedPage.id); // Make copied page active
        break;
      case 'Duplicate': // Same as copy, but often implies more complex deep copying
        const duplicatedPage = {
          id: Date.now().toString(), // New unique ID
          name: `${currentPage.name} (Duplicate)`
        };
        updatedPages.splice(pageIndex + 1, 0, duplicatedPage); // Insert after original
        setPages(updatedPages);
        setActivePageId(duplicatedPage.id); // Make duplicated page active
        break;
      case 'Delete':
        updatedPages = pages.filter(page => page.id !== pageId);
        setPages(updatedPages);
        if (activePageId === pageId && updatedPages.length > 0) {
          // Find the next available page to make active, prioritize 'Info' if available
          const nextActivePage = updatedPages.find(p => p.id === '1') || updatedPages[0];
          setActivePageId(nextActivePage ? nextActivePage.id : null);
        } else if (updatedPages.length === 0) {
          setActivePageId(null); // No pages left
        }
        break;
      case 'Other':
        console.log(`'Other' action triggered for page: ${pageId}`);
        // Add any custom logic for 'Other' here
        alert(`'Other' action would perform a custom function for ${currentPage.name}`);
        break;
      default:
        console.warn(`Unknown action: ${action}`);
    }
    setContextMenuOpenForPageId(null); // Close menu after action
  }, [pages, activePageId]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-start justify-center p-4 sm:p-6 lg:p-8">
      {/* Removed max-w-screen-xl to allow the container to take full width */}
      <div className="w-full bg-gray-800 rounded-xl shadow-lg p-6">
        <PageHeader title="Form Page Navigator" />
        <EditorLayout
          pages={pages}
          activePageId={activePageId}
          setActivePage={handleSetActivePage}
          draggedPageId={draggedPageId}
          dragOverPageId={dragOverPageId}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDragEnter={handleDragEnter}
          handleDragLeave={handleDragLeave}
          handleDrop={handleDrop}
          handleDragEnd={handleDragEnd}
          handleAddPage={handleAddPage}
          contextMenuOpenForPageId={contextMenuOpenForPageId}
          toggleContextMenu={toggleContextMenu}
          handleContextMenuAction={handleContextMenuAction}
          contextMenuRef={contextMenuRef}
          hoveredPageIndex={hoveredPageIndex}
          setHoveredPageIndex={setHoveredPageIndex}
        />
      </div>
    </div>
  );
};

export default App;
