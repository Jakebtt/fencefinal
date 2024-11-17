import React from 'react';

const TextureButton = ({ textureUrl, colorName, onClick, isSelected }) => {
  return (
    <button
      onClick={onClick}
      style={{
        border: isSelected ? '3px solid white' : 'none', // Highlight selected button
        background: 'transparent',
        cursor: 'pointer',
        margin: '10px',
        borderRadius: '5px', // Optional for rounded corners
        padding: '5px', // Add some padding for aesthetics
        outline: 'none', // Prevent focus outline
      }}
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundImage: `url(${textureUrl})`,
          backgroundSize: 'cover',
          borderRadius: '3px', // Match the button corners
          boxShadow: 'none', // Remove any box-shadow
        }}
      ></div>
      <div
        className="color-name-container"
        style={{
          textAlign: 'center',
          marginTop: '5px',
          color: '#000', // Ensure text color is visible
        }}
      >
        <div className="color-name">{colorName}</div>
      </div>
    </button>
  );
};

export default TextureButton;


