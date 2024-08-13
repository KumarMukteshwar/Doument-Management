// src/context/DocumentContext.js

import React, { createContext, useReducer } from 'react';
import { documentReducer } from './DocumentReducer';

const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
  const initialState = {
    documents: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(documentReducer, initialState);

  return (
    <DocumentContext.Provider value={{ state, dispatch }}>
      {children}
    </DocumentContext.Provider>
  );
};

export default DocumentContext;
