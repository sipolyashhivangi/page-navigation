import React from 'react';

const InfoForm = ({ pageName }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-blue-300 mb-4">
        Welcome to the {pageName} Form!
      </h2>
      <p className="text-gray-300 text-lg">
        This is where you would place all the input fields and elements for your "Info" page.
      </p>
      {/* Add your form elements here */}
      <div className="mt-6 p-4 border border-gray-500 rounded-lg bg-gray-600 inline-block">
        <label htmlFor="infoInput" className="block text-gray-200 text-sm font-bold mb-2">
          Your Name:
        </label>
        <input
          type="text"
          id="infoInput"
          placeholder="Enter your name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
        />
      </div>
    </div>
  );
};

export default InfoForm;
