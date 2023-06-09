import React, { useState, useEffect } from 'react';
import { BandAdd } from './components/BandAdd';
import { BandList } from './components/BandList';
import * as io from 'socket.io-client';

const connectSocketServer = () => {
  const socket = io.connect('http://localhost:8080', { transports: ['websocket'] });
  return socket;
}

const App = () => {
  const [socket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false);
  const [band, setBand] = useState([])

  useEffect(() => {
    console.log(socket, 'Estado del socket');
    setOnline(socket.connected);
  }, [socket]);

  useEffect(()=> {
    socket.on('connect', () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(()=> {
    socket.on('disconnect', () => {
      setOnline(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('current-bands', (bands) => {
      console.log(bands);
      setBand(bands);
    });
  }, [socket]);

  return (
    <div className="container px-52 py-10">
      <div className="px-10 py-10">
        <p className="font-bold">
          Service status:
          {
            online
              ? (<span className="text-green-500"> Online</span>)
              : (<span className="text-red-500"> Offline</span>)
          }
        </p>
      </div>

      <h1 className="text-4xl mb-5 font-bold">BandNames</h1>
      <hr />

      <div className="grid grid-rows-1 grid-cols-12 gap-3 py-5">
        <div className="col-span-8">
          <BandList bands={band}/>
        </div>
        <div className="col-span-4">
          <BandAdd />
        </div>
      </div>
    </div>
  );
}

export default App;
