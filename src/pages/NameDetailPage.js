import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DetailPage from '../organisms/DetailPage';

const NameDetailPage = () => {
  const { nameId } = useParams();
  const navigate = useNavigate();

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

  const name = namesOfAllah.find(n => n.id === nameId);

  if (!name) return <div>Name not found</div>;

  const navigationButtons = [
    {
      id: 'more',
      label: 'More',
      color: '#00f2fa',
      onClick: () => alert('Coming soon!')
    },
    {
      id: 'quiz',
      label: 'Quiz',
      color: '#00f2fa',
      onClick: () => alert('Coming soon!')
    },
    {
      id: 'back',
      label: 'Back to Names',
      color: '#FF007F',
      onClick: () => navigate('/names')
    }
  ];

  const progressBar = {
    currentStep: 4,
    totalSteps: 4,
    steps: ['Topic', 'Introduction', 'Overview', 'Detail']
  };

  return (
    <DetailPage
      title={name.name}
      subtitle={name.title}
      description={name.description}
      navigationButtons={navigationButtons}
      progressBar={progressBar}
    />
  );
};

export default NameDetailPage; 