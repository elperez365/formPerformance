import React from "react";
import Input from "../Input/Input";
import { toast } from "react-toastify";
import { createFieldsByInputs, searchErrors } from "./formFunctions";

export default function Form() {
  const formRef = React.useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const inputs = formRef.current.querySelectorAll("input");
    const fields = createFieldsByInputs(Array.from(inputs));

    const { error, errors, emptyValue, empties } = searchErrors(fields);

    if (error) {
      errors.forEach((error) => {
        toast.error(`${error} non è valido`);
      });
    }

    if (emptyValue) {
      empties.forEach((error) => {
        toast.warning(`${error} è vuoto`);
      });
    }
    if (!error && !emptyValue) {
      toast.success("form valido");
    }
  };

  return (
    <form ref={formRef}>
      <Input label={"codice fiscale"} action="FISCAL_CODE" />
      <Input label={"email"} action="EMAIL" />
      <Input label={"telefono"} action="PHONE" />
      <br />
      <button onClick={onSubmit}>submit</button>
    </form>
  );
}
