import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [confPassword, setConsfPassword] = useState("");
  const navigate = useNavigate();

  let isError = false;
  let message = "";
  const Regis = async () => {
    try {
        if(confPassword === Password) {

            await axios.post("http://localhost:5000/register", {
              username: Username,
              password: Password,
            });
            alert("Pendaftaran Berhasil");
            navigate("/");
        } else {
            isError = true
            message = "Password Tidak Sama"
        }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[100vh] bg-gray-100 flex justify-center items-center w-full">
      <section className="  px-0 sm:bg-transparent">
        <div className=" px-0 ">
          <div className="">
            <div className="">
              <form
                onSubmit={Regis}
                className="relative w-[350px] bg-opacity-80 bg-gray-300  sm:shadow-lg drop-shadow-lg sm:rounded-lg px-5 py-10 sm:px-10 sm:py-10"
              >
                <p className="uppercase text-xl text-center font-bold text-gray-600">
                  Daftar
                </p>
                <div className="flex justify-center mt-2">
                    {isError && (

                  <div className="w-full">
                    <div className="px-4 text-center w-full py-2 text-red-600 bg-red-100 border border-red-300 rounded-md">
                      {message}
                    </div>
                  </div>
                    )}
                </div>

                <div className=" mt-4 w-full flex justify-center">
                  <input
                    type="text"
                    className="input w-full p-2"
                    value={Username}
                    placeholder="Nama Pengguna"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mt-4 w-full flex justify-center">
                  <input
                    type="password"
                    className="input w-full p-2"
                    value={Password}
                    placeholder="Kata Sandi"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mt-4 w-full flex justify-center">
                  <input
                    type="password"
                    className="input w-full p-2"
                    value={confPassword}
                    placeholder="Konfirmasi Password"
                    onChange={(e) => setConsfPassword(e.target.value)}
                  />
                </div>
                <div className=" mt-4">
                  <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 bg-opacity-80 text-white rounded hover:bg-blue-600"
                  >
                    Daftar
                  </button>
                  <p className="mt-4">
                    Sudah Punya Akun?{" "}
                    <Link
                      to={"/"}
                      className="text-blue-400 font-bold  underline"
                    >
                      Masuk
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Register;
