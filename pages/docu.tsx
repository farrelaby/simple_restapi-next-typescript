import { Form } from "../components/form";
import React from "react";
import styles from "../styles/Home.module.css";

type Props = {};

function docu({}: Props) {
  return (
    <div className={styles.container}>
      <main>
        <div className="flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl font-bold mt-16 mb-4 text-center">
            Kuy absen dulu gaes
          </h1>
          <Form />
        </div>
      </main>
    </div>
  );
}

export default docu;
