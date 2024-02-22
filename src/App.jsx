import "./App.css";
import Form from "./components/Form/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />

      <p>
        Il seguente form ha come obiettivo di eseguire i controlli tramite regex
        ed essere performante al tempo stesso, tuttavia non viene effettuato mai
        il re-rendering dell'intero form, ma solo dei singoli input
        riutilizzabili.
      </p>
      <p>
        Per eseguire il controllo, premere il bottone submit con i campi vuoti o
        con campi non validi. "i dati inseriti non saranno inviati a nessun
        server"
      </p>
      <br />
      <Form />
    </>
  );
}

export default App;
