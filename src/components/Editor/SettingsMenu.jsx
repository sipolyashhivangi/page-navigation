import React from 'react';

const SettingsMenu = () => {
  return (
    <div className="mt-4 p-4 bg-gray-700 rounded-lg border border-gray-600">
      <h2 className="text-xl font-semibold text-gray-200 mb-2">Global Settings</h2>
      <p className="text-gray-400">
        This area could contain application-wide settings (e.g., theme, user preferences).
      </p>
      {/* Add settings controls here */}
    </div>
  );
};

export default SettingsMenu;
