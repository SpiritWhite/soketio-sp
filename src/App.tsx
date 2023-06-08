import React from 'react';
import { BandAdd } from './components/BandAdd';
import { BandList } from './components/BandList';

const App = () => {
  return (
    <div className="container px-52 py-10">
      <div className="px-10 py-10">
        <p className="font-bold">
          Service status:
          <span className="text-green-500"> Online</span>
          <span className="text-red-500"> Offline</span>
        </p>
      </div>

      <h1 className="text-4xl mb-5 font-bold">BandNames</h1>
      <hr />

      <div className="grid grid-rows-1 grid-cols-12 gap-3 py-5">
        <div className="col-span-8">
          <BandList />
        </div>
        <div className="col-span-4">
          <BandAdd />
        </div>
      </div>
    </div>
  );
}

export default App;
