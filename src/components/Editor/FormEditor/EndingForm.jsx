import React from 'react';

const EndingForm = ({ pageName }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-blue-300 mb-4">
        {pageName} Page Content
      </h2>
      <p className="text-gray-300 text-lg">
        This marks the end of the form series. Thank you!
      </p>
      {/* Add your form elements here */}
      <div className="mt-6 p-4 border border-gray-500 rounded-lg bg-gray-600 inline-block">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => console.log('Form Submitted!')}
        >
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default EndingForm;
