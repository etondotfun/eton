import React from "react";
import { FaImage } from "react-icons/fa6";

const CreateTokenForm = () => {
  return (
    <div className="flex flex-col items-center w-[50%] mt-6 bg-tonprimary p-4 rounded-2xl">
      <div className="flex flex-col gap-4 z-10 w-full text-lg text-primary">
        <label className="cursor-pointer p-3 bg-textColor rounded-xl text-center flex gap-3 justify-center items-center">
          <FaImage />
          Upload Image
          <input
            type="file"
            name="file"
            id="file"
            placeholder="Upload Image"
            style={{ display: "none" }}
          />
        </label>

        <input
          type="text"
          id="name"
          placeholder="Name"
          className="outline-none bg-tonprimary p-3 rounded-xl"
        />

        <input
          type="text"
          id="ticker"
          placeholder="Ticker"
          className="outline-none bg-tonprimary p-3 rounded-xl"
        />

        <textarea
          name="description"
          id="description"
          placeholder="Description"
          rows={3}
          className="p-3 rounded-xl bg-tonprimary resize-none outline-none"
        />

        <button type="submit" className="bg-textColor p-3 rounded-xl font-semibold">
          Create Token
        </button>
      </div>
    </div>
  );
};

export default CreateTokenForm;
