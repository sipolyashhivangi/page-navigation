import React from 'react';
// import './styles.js'; // In a real project, you might import styled-components definitions here

const PageHeader = ({ title }) => {
  return (
    <h1 className="text-2xl font-bold mb-6 text-center text-blue-400">
      {title}
    </h1>
  );
};

export default PageHeader;
