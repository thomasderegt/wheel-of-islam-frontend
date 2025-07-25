import React from 'react';
import { useNavigate } from 'react-router-dom';

const NamesOfAllah = () => {
  const navigate = useNavigate();
  const namesOfAllah = [
    { title: 'The Most Merciful', name: 'Ar-Rahman', id: 'ar-rahman' },
    { title: 'The Most Compassionate', name: 'Ar-Rahim', id: 'ar-rahim' },
    { title: 'The Ever-Living', name: 'Al-Hayy', id: 'al-hayy' },
    { title: 'The Self-Subsisting', name: 'Al-Qayyum', id: 'al-qayyum' },
    { title: 'Lord of all the Worlds', name: 'Rabb al-Alamin', id: 'rabb-al-alamin' },
    { title: 'The All-Knowing', name: 'Al-Alim', id: 'al-alim' },
    { title: 'The One and Only', name: 'Al-Ahad', id: 'al-ahad' },
    { title: 'The Self-Sufficient Master', name: 'As-Samad', id: 'as-samad' }
  ];

  return (
    <div className="p-6 text-center">

      {/* Titel van de tabel */}
      <h2 className="text-3xl mb-6 font-bold" style={{ color: '#FF007F' }}>
        The Names of The One True God
      </h2>

      {/* Namen Tabel */}
      <div className="grid grid-cols-2 gap-0">
        {namesOfAllah.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/names/${item.id}`)}
            className="p-4 h-40 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-700"
            style={{
              color: '#00f2fa',
              borderColor: '#00f2fa',
              minWidth: '150px',
              minHeight: '150px',
              borderBottom: '1px solid #00f2fa',
              borderRight: index % 2 === 0 ? '1px solid #00f2fa' : 'none'
            }}
          >
            <div className="text-xl font-bold">{item.title}</div>
            <div className="text-lg">{item.name}</div>
          </div>
        ))}
      </div>

      {/* Terug knop */}
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 border-2 border-teal-400 text-teal-400 rounded-full hover:bg-teal-700 hover:text-white"
      >
        Back to Wheel
      </button>
    </div>
  );
};

export default NamesOfAllah;
