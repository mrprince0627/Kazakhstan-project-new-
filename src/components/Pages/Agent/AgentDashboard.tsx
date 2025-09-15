import  { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import StudentsTable from './StudentsTable';
import AddLead from './AddLead';
import Commission from './Commission';
import VisaStatus from './VisaStatus';

function AgentDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
      case 'applications':
        return <StudentsTable />;
      case 'leads':
        return <AddLead />;
      case 'commission':
        return <Commission />;
      case 'visa':
        return <VisaStatus />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default AgentDashboard;