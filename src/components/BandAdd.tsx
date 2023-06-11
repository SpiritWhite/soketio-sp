import React, { useState } from 'react';

interface Props {
  onSubmitBand: (_event: React.FormEvent<HTMLFormElement>, bandName: string) => void
}

export const BandAdd = ({ onSubmitBand }: Props) => {
  const [bandName, setBandName] = useState('')
  return (
    <>
      <h3 className="mb-5 text-xl font-bold">Agregar Banda</h3>
      <form noValidate className="w-full" onSubmit={(_event) => onSubmitBand(_event, bandName)}>
        <input
          type="text"
          className="w-full form-input rounded"
          placeholder="Nueva Banda"
          onChange={(_event) => setBandName(_event.target.value)}
        />
      </form>
    </>
  )
}
