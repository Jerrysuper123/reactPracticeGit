import React from 'react';

// context is globally available, or you can specifiy this
const authContext = React.createContext({
  authenticated: false,
  // log in method here
  login: () => {}
});

export default authContext;
