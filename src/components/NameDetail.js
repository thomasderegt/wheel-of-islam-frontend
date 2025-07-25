import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const namesOfAllah = [
  { id: 'ar-rahman', name: 'Ar-Rahman', title: 'The Most Merciful', description: '' },
  { id: 'ar-rahim', name: 'Ar-Rahim', title: 'The Most Compassionate', description: '' },
  { id: 'al-hayy', name: 'Al-Hayy', title: 'The Ever-Living', description: '' },
  { id: 'al-qayyum', name: 'Al-Qayyum', title: 'The Self-Subsisting', description: '' },
  { id: 'rabb-al-alamin', name: 'Rabb al-Alamin', title: 'Lord of all the Worlds', description: '' },
  { id: 'al-alim', name: 'Al-Alim', title: 'The All-Knowing', description: '' },
  { id: 'al-ahad', name: 'Al-Ahad', title: 'The One and Only', description: '' },
  { id: 'as-samad', name: 'As-Samad', title: 'The Self-Sufficient Master', description: '' }
];

const NameDetail = () => {
  const { nameId } = useParams();
  const navigate = useNavigate();
  const name = namesOfAllah.find(n => n.id === nameId);

  if (!name) return <div>Name not found</div>;

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div
        className="bg-black text-teal-400 border-4 rounded-full flex flex-col items-center justify-center"
        style={{
          color: '#00f2fa',
          borderColor: '#00f2fa',
          width: '350px',
          height: '350px',
          padding: '20px',
          marginBottom: '30px',
          fontSize: '2.5rem',
          fontWeight: 'bold',
        }}
      >
        <div style={{ marginBottom: '8px' }}>{name.name}</div>
        <div className="text-lg">{name.title}</div>
      </div>
      <p className="text-lg text-teal-200 mb-6 text-center">{name.description}</p>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate(-1)}
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
      </div>
    </div>
  );
};

export default NameDetail;
