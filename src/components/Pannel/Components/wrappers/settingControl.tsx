"use client"
import React, { useState, useEffect } from 'react';

const SettingsControl = ({ id, initialClasses, initialText, onDelete, onUpdate }:any) => {
  const [classes, setClasses] = useState(initialClasses);
  const [text, setText] = useState(initialText);
  const [newClass, setNewClass] = useState('');

  useEffect(() => {
    onUpdate(id, { classes, text });
  }, [classes, text]);

  const handleAddClass = () => {
    if (newClass && !classes.includes(newClass)) {
      setClasses([...classes, newClass]);
      setNewClass('');
    }
  };

  const handleRemoveClass = (classToRemove:any) => {
    setClasses(classes.filter((c:any) => c !== classToRemove));
  };

  return (
    <div className="p-4">
      {onDelete && (
        <button
          className="bg-red-500 text-white px-4 py-2 mb-4 w-full"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      )}
      
      {typeof text === 'string' && (
        <input
          type="text"
          value={text}
          className="border p-2 mb-4 w-full"
          onChange={(e) => setText(e.target.value.replace(/<\/?[^>]+(>|$)/g, ''))}
        />
      )}
      
      <div className="mb-4">
        <input
          type="text"
          value={newClass}
          className="border p-2 mr-2"
          onChange={(e) => setNewClass(e.target.value)}
          placeholder="Add new class"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={handleAddClass}
        >
          Add Class
        </button>
      </div>
      
      <div>
        {classes.map((cls:any) => (
          <span key={cls} className="bg-gray-200 px-2 py-1 mr-2 mb-2 inline-block">
            {cls}
            <button
              className="ml-2 text-red-500"
              onClick={() => handleRemoveClass(cls)}
            >
              x
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SettingsControl;