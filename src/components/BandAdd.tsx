import React from 'react';

export const BandAdd = () => {
  return (
    <>
      <h3 className="mb-5 text-xl font-bold">Agregar Banda</h3>
      <form noValidate className="w-full">
        <input
          type="text"
          className="w-full form-input rounded"
          placeholder="Nueva Banda"
        />
      </form>
    </>
  )
}
