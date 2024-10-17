import React, { useState, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const Form = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '' });
  const [localStorageValues, setLocalStorageValues] = useLocalStorage('formData', {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setLocalStorageValues(formValues);
    console.log('Form maʼlumotlari saqlandi:', formValues);
  }, [formValues, setLocalStorageValues]);

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Forma</h2>
      <div className="mb-4">
        <label className="block mb-1">Ism:</label>
        <input type="text" name="name" value={formValues.name} onChange={handleChange} className="border p-2 w-full" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email:</label>
        <input type="email" name="email" value={formValues.email} onChange={handleChange} className="border p-2 w-full" required />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Jo'natish
      </button>
    </form>
  );
};

export default Form;
