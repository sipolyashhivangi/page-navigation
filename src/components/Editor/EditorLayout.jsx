import React from 'react';
import PageNavigation from './PageNavigation';
// No longer need to import specific forms if we're not displaying content
// import InfoForm from './FormEditor/InfoForm';
// import DetailsForm from './FormEditor/DetailsForm';
// import OtherForm from './FormEditor/OtherForm';
// import EndingForm from './FormEditor/EndingForm';
// import SettingsMenu from './SettingsMenu'; // Commented out to resolve unused warning
// import StatusPanel from './StatusPanel';   // Commented out to resolve unused warning

const EditorLayout = ({
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
  // We no longer need formComponents or ActiveForm as we're removing the content area
  /*
  const formComponents = {
    '1': InfoForm,
    '2': DetailsForm,
    '3': OtherForm,
    '4': EndingForm,
    // Add more form components here as new page types are introduced
  };
  const ActiveForm = activePageId ? formComponents[activePageId] : null;
  */

  return (
    <div>
      <PageNavigation
        pages={pages}
        activePageId={activePageId}
        setActivePage={setActivePage}
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

      {/* Removed the content area for the active page */}
      {/*
      <div className="mt-8 p-6 bg-gray-700 rounded-lg min-h-[300px] flex items-center justify-center border border-gray-600">
        {activePageId && ActiveForm ? (
          <ActiveForm pageName={pages.find(p => p.id === activePageId)?.name || 'selected page'} />
        ) : (
          <p className="text-xl text-gray-400">Select a page from above to view its content.</p>
        )}
      </div>
      */}

      {/* Placeholders for other editor-related components */}
      {/* <SettingsMenu /> */}
      {/* <StatusPanel /> */}
    </div>
  );
};

export default EditorLayout;
