import React from 'react';

export const BandList = () => {
  const crearRows = () => {
    return (
      <tr>
        <td className="px-6 py-4">
          <button className="rounded btn btn-blue">+1</button>
        </td>
        <td className="px-6 py-4">
          <input type="text" className="w-full form-input rounded" />
        </td>
        <td className="px-6 py-4">
          <h3 className="text-xl font-bold text-center"> 0 </h3>
        </td>
        <td className="text-center px-6 py-4">
          <button className="rounded btn btn-red">
            Borrar
          </button>
        </td>
      </tr>
    );
  };
  return (
   <>
      <h3 className="mb-5 text-xl font-bold">Bandas Actuales</h3>
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
