import React, { useState, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Form = lazy(() => import('./components/Form'));
const Simple = lazy(() => import('./components/Simple'));
const ObjectComponent = lazy(() => import('./components/Object'));

function App() {
  const [simpleValue, setSimpleValue] = useState('Hello');
  const [numberValue, setNumberValue] = useState(10);
  const [objectValue, setObjectValue] = useState({ name: 'John', age: 30 });
  const [arrayValue, setArrayValue] = useState([1, 2, 3]);

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          React.lazy bilan qayta renderlashni kuzatish
        </h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={() => setSimpleValue('Hello')}>
            Oddiy qiymatni yangilash
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={() => setNumberValue(20)}>
            Son qiymatini yangilash
          </button>
        </div>
        <Suspense fallback={<div>Yuklanmoqda...</div>}>
          <Simple text={simpleValue} number={numberValue} />
          <div className="flex justify-center space-x-4 mb-4">
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={() => setObjectValue({ name: 'John', age: 30 })}>
              Obyekt qiymatini yangilash
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={() => setArrayValue([1, 2, 3])}>
              Array qiymatini yangilash
            </button>
          </div>
          <ObjectComponent object={objectValue} array={arrayValue} />
          
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
