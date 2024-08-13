// src/context/DocumentReducer.js

export const documentReducer = (state, action) => {
    switch (action.type) {
      case 'UPLOAD_DOCUMENTS':
        return {
          ...state,
          documents: action.payload,
        };
      case 'SET_LOADING':
        return {
          ...state,
          loading: action.payload,
        };
      case 'UPDATE_DOCUMENT_PRIVACY':
        return {
          ...state,
          documents: action.payload,
        };
      case 'SEARCH_DOCUMENTS':
        return {
          ...state,
          documents: action.payload,
        };
      default:
        return state;
    }
  };
  