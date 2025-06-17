import React from 'react';

const StatusPanel = () => {
  return (
    <div className="mt-4 p-4 bg-gray-700 rounded-lg border border-gray-600">
      <h2 className="text-xl font-semibold text-gray-200 mb-2">Status Panel</h2>
      <p className="text-gray-400">
        Messages, notifications, or current application status would appear here.
      </p>
      {/* Add status messages here */}
    </div>
  );
};

export default StatusPanel;
