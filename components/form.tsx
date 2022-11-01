import React, { useState } from "react";

type FormProps = {
  nama: string;
  niu: number;
};

export function Form() {
  const [nama, setNama] = useState("");
  const changeNama = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNama(event.target.value);
  };

  const [niu, setNiu] = useState(0);
  const changeNiu = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNiu(Number(event.target.value));
  };

  const niuLength = niu.toString().length;

  const postAbsen = async (e: any) => {
    e.preventDefault();
    if (niuLength === 6) {
      try {
        const res = await fetch("../api/postMsg", {
          method: "POST",
          body: {
            nama: nama,
            niu: niu,
          },
        });
        if (res.status === 200) {
          console.log("POST aman");
          alert("Mantap sudah absen 👍");
        } else {
          console.log("belom aman");
          alert("Coba dicek lagi formnya 🙏");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("⚠ NIU belom 6 digit ⚠");
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form
        // onReset={}
        className="container py-8 flex flex-col gap-8 items-center border-solid border-1 border-sky-500 bg-slate-100 text-slate-900 shadow-md shadow-blue-300 rounded"
      >
        <div className="flex flex-row gap-4">
          <label htmlFor="nama">Nama</label>
          <input
            className="text-white pl-2 rounded shadow-md"
            type="text"
            onChange={changeNama}
            id="nama"
          />
        </div>
        <div className="flex flex-row gap-4">
          <label htmlFor="niu" className="pr-4">
            NIU
          </label>
          <input
            className="pl-2 text-white rounded shadow-md"
            type="number"
            onChange={changeNiu}
            id="niu"
          />
        </div>
        <button
          className="bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded shadow-md"
          onClick={postAbsen}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
