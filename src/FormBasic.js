// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Basic = () => {
  const p1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise value 1");
    }, 30000);
  });

  const p2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise value 2");
    }, 20000);
  });

  async function handlePromise() {
    console.log("Hello world");

    const val = await p1;
    console.log("Namaste javascript");
    console.log(val);

    const val1 = await p2;
    console.log("Namaste javascript");
    console.log(val1);
  }
  console.log("first 1");

  handlePromise();
  console.log("first");
  return (
    <div>
      <h1>Any place in your app!</h1>
    </div>
  );
};

export default Basic;
