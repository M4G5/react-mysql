import React from "react";
import { Form, Formik } from "formik";
import { createTarea } from "../api/maderasApi.js";

function MaderasForm() {
  return (
    <div>
      <Formik
        initialValues={{
          sala: "",
          pieza: "",
          medida: "",
          cantidad: "",
        }}
        onSubmit={async (values) => {
          try {
            const resp = await createTarea(values);
            console.log(values);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>SALA:</label>
            <input type="text" name="sala" onChange={handleChange} />
            <br />
            <label>PIEZA:</label>
            <input type="text" name="pieza" onChange={handleChange} />
            <br />
            <label>MEDIDA:</label>
            <input type="text" name="medida" onChange={handleChange} />
            <br />
            <label>CANTIDAD:</label>
            <input type="text" name="cantidad" onChange={handleChange} />
            <br />
            <button type="submit">GUARDAR</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MaderasForm;
