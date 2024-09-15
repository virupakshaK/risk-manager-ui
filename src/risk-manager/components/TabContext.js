import React, { createContext, useContext, useState } from 'react';

// Create Context
const TabContext = createContext();

// Provider Component
export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

// Custom Hook for using the context
export const useTabContext = () => {
  const context = useContext(TabContext);
  
  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider');
  }
  
  return context;
};
