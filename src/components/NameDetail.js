import React from 'react';

const NameDetail = ({ name, onBack, onMore }) => {
  if (!name) return null;

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Blauwe ronde cirkel met de naam van Allah */}
      <div
        className="bg-black text-teal-400 border-4 rounded-full flex flex-col items-center justify-center"
        style={{
          color: '#00f2fa',
          borderColor: '#00f2fa',
          width: '350px',       // Grotere cirkel
          height: '350px',
          padding: '20px',      // Meer ruimte tussen tekst en rand
          marginBottom: '30px',
          fontSize: '2.5rem',
          fontWeight: 'bold',
        }}
      >
        <div style={{ marginBottom: '8px' }}>{name.name}</div>
        <div className="text-lg">{name.phonetic}</div>
      </div>

      {/* Beschrijving van de naam */}
      <p className="text-lg text-teal-200 mb-6 text-center">{name.description}</p>
      
      {/* Knoppen */}
      <div className="flex flex-col gap-4">
        <button
          onClick={onBack}
          className="px-8 py-3 text-lg font-bold rounded-lg border-2 hover:bg-gray-800 transition-colors whitespace-nowrap"
          style={{
            color: '#00f2fa',
            borderColor: '#00f2fa',
            backgroundColor: 'transparent',
            width: '200px',
          }}
        >
          Back to Names
        </button>

        <button
          onClick={onMore}
          className="px-8 py-3 text-lg font-bold rounded-lg border-2 hover:bg-gray-800 transition-colors"
          style={{
            color: '#00f2fa',
            borderColor: '#00f2fa',
            backgroundColor: 'transparent',
            width: '200px',
          }}
        >
          More
        </button>
      </div>
    </div>
  );
};

export default NameDetail;
