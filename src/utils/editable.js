import React, { useState, useEffect } from 'react';

const Editable = ({ children, initialText, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText || '');

  useEffect(() => {
    setText(initialText || '');
  }, [initialText]);

  const enableEditing = () => {
    setIsEditing(true);
  };

  const saveChanges = () => {
    setIsEditing(false);
    if (onSave) {
      onSave(text);
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    handleChildClick();
  };

  const handleChildClick = () => {
    if (!isEditing) {
      enableEditing();
    }

    // Pass the onClick callback from the parent component if needed
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onBlur={saveChanges}
          onChange={handleChange}
        />
      ) : (
        React.cloneElement(children, {
          text: text,
          onClick: handleChildClick,
        })
      )}
    </div>
  );
};

export default Editable;
