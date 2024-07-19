import { useState } from "react";
import "./index.css";
import Form from "./components/Form";
import SuccesMsj from "./components/SuccesMsj";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [shouldReset, setShouldReset] = useState(false);

  function handleSuccess() {
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
    setTimeout(() => setShouldReset(true), 10000);
  }

  function resetForm() {
    setShouldReset(false);
  }

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <Form onSuccess={handleSuccess} shouldReset={shouldReset} />
      {isSuccess && <SuccesMsj />}
    </div>
  );
}

export default App;
