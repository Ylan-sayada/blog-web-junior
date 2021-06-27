import React from 'react';

const UtilContext = React.createContext({});
export const UtilProvider = UtilContext.Provider;
export const UtilConsumer = UtilContext.Consumer;
export default UtilContext;