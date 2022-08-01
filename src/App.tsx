import React from 'react';
import './App.css'
import InputForm from './components/InputForm/InputForm';

function App() {


  return (

    <div className='' style={{ background: '#d3cfcf' }}>
      <nav className="bg-dark">
        <h2 className="text-white text-center p-2 text-uppercase">Place Holder For a logo</h2>
      </nav>
      <div className='p-5'>
        <div className='bg-white p-5 rounded-2'>
          <h4 className='text-uppercase text-center shadow p-3'>Text Here</h4>
          <div>
            <InputForm />
          </div>
          <div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
