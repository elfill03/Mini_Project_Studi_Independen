import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "./Config/redux/store";
import RootRouter from "./RootRouter";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststore}>
        <RootRouter />
      </PersistGate>
    </Provider>
  );
};

export default App;
