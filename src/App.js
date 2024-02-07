import "./App.css";
import Grid from "@mui/material/Grid";
import MyTable from "./components/MyTable";
import MyForm from "./components/MyForm";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4} lg={6}>
              <MyForm />
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <MyTable />
            </Grid>
          </Grid>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
