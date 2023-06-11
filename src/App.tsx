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

  const onVote = (id: string) => {
    socket.emit('votar-banda', id );
  };

  const onDelete = (id: string) => {
    socket.emit('delete-banda', id );
  };

  const onChangeName = (id: string, newName: string) => {
    socket.emit('change-banda', { id, newName } );
  };

  const onSubmitBand = (_event: React.FormEvent<HTMLFormElement>, bandName: string) => {
    _event.preventDefault();
    if (bandName.trim().length > 0 ) {
      socket.emit('new-banda', bandName );
    }
  };

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
      setBand(bands);
    });
  }, [socket]);

  return (
    <div className="container md:px-52 sm:px-36 py-10">
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
        <div className="md:col-span-8 sm:col-span-12">
          <BandList bands={band} onVote={onVote} onDelete={onDelete} onChangeName={onChangeName} />
        </div>
        <div className="md:col-span-4 sm:col-span-12 md:order-last sm:order-first">
          <BandAdd onSubmitBand={onSubmitBand} />
        </div>
      </div>
    </div>
  );
}

export default App;
