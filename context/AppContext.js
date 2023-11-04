import React, { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);


  return (
    <AppContext.Provider value={{ searchText, setSearchText, data, setData, selectedItems, setSelectedItems }}>
      {children}
    </AppContext.Provider>
  );
};
