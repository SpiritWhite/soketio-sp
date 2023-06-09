import React, { useEffect, useState } from 'react';

interface BandsListProps {
  bands: Array<Bands>
}

interface Bands {
  id: string,
  name: string,
  votes: number
}

export const BandList = ({ bands }: BandsListProps) => {
  const [bandsList, setBandsList] = useState<Bands[]>(bands);

  useEffect(() => {
    setBandsList(bands);
  }, [bands]);

  const changeName = (newValue: string, id: string) => {
    setBandsList(prevData => prevData.map(band => {
      if (band.id === id) {
        band.name = newValue;
      }
      return band;
    }));
  };

  const focusLost = (band: string, id: string) => {

  };

  const crearRows = () => {
    return (
        bandsList.map(band => (
          <tr key={band.id} className="border-b-2 border-b-slate-400">
            <td className="px-6 py-4">
              <button className="rounded btn btn-blue">+1</button>
            </td>
            <td className="px-6 py-4">
              <input
                type="text"
                className="w-full form-input rounded"
                value={band.name}
                onChange={(_event) => changeName(_event.target.value, band.id)}
                onBlur={() => focusLost(band.name, band.id)}
              />
            </td>
            <td className="px-6 py-4">
              <h3 className="text-xl font-bold text-center"> {band.votes} </h3>
            </td>
            <td className="text-center px-6 py-4">
              <button className="rounded btn btn-red">
                Borrar
              </button>
            </td>
          </tr>
        ))
    );
  };
  return (
    <>
      {/* <h3 className="mb-5 text-xl font-bold">Bandas Actuales</h3> */}
      <table className="w-full table text-sm text-lef">
        <thead className="text-xs text-black uppercase border-b-2 border-b-black">
          <tr>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3">Nombre</th>
            <th scope="col" className="px-6 py-3">Votos</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {crearRows()}
        </tbody>
      </table>
    </>
  )
}
