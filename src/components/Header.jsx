import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import appStore from "../utils/appStore";
import { togglegptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleGptSearchClick = () => {
    dispatch(togglegptSearchView());
  };
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className=" w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          {showGptSearch&&<select
            onChange={handleLanguageChange}
            className="p-2 m-4 bg-gray-500 text-white rounded-md"
            name=""
            id=""
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            onClick={handleGptSearchClick}
            className="bg-purple-700 rounded-md  w-[100px] h-[50px] my-2 mr-[20px] font-semibold text-white hover:bg-purple-600"
          >
            GPT Search
          </button>

          <img
            className="my-2 mr-[20px] h-[50px] w-[50px] rounded-md"
            src="https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
            alt="user"
          />
          <button
            onClick={handleSignOut}
            className="bg-gray-800 rounded-md  w-[80px] h-[50px] my-2 mr-[20px] font-semibold text-white hover:bg-gray-700"
          >
            {"Sign Out"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
