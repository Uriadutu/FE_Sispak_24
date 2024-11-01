import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, reset } from "../features/authSlice";
import Logo from "../img/logoAPK.png"


const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dasbor");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(loginUser({ Username, Password }));
  };

  return (
    <div className="h-[100vh] bg-gray-100 flex justify-center items-center w-full">
      <section className="  px-0 sm:bg-transparent">
        <div className=" px-0 ">
          <div className="">
            <div className="">
              <form
                onSubmit={Auth}
                className="relative w-[350px] bg-opacity-80 bg-gray-300  sm:shadow-lg drop-shadow-lg sm:rounded-lg px-5 py-10 sm:px-10 sm:py-10"
              >
                  <p className="uppercase text-xl text-center font-bold text-gray-600">
                    Login
                  </p>
                <div className="flex justify-center mt-2">
                  <div className="w-full">
                    {isError && (
                      <div className="px-4 text-center w-full py-2 text-red-600 bg-red-100 border border-red-300 rounded-md">
                        {message} 
                      </div>
                    )}
                  </div>
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
                <div className=" mt-4">
                  <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 bg-opacity-80 text-white rounded hover:bg-blue-600"
                  >
                    {isLoading ? "Memuat..." : "Masuk"}
                  </button>
                  <p className="mt-4">
                    Belum Punya Akun?{" "}
                    <Link to={"/daftar"} className="text-blue-400 font-bold  underline">
                      Daftar
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
export default Login;
