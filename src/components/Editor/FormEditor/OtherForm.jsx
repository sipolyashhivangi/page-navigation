import React from 'react';

const OtherForm = ({ pageName }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-blue-300 mb-4">
        {pageName} Page Content
      </h2>
      <p className="text-gray-300 text-lg">
        Here you can add any miscellaneous information or options.
      </p>
      {/* Add your form elements here */}
      <div className="mt-6 p-4 border border-gray-500 rounded-lg bg-gray-600 inline-block">
        <label htmlFor="otherTextarea" className="block text-gray-200 text-sm font-bold mb-2">
          Comments:
        </label>
        <textarea
          id="otherTextarea"
          rows="4"
          placeholder="Enter your comments here..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
        ></textarea>
      </div>
    </div>
  );
};

export default OtherForm;
