import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, CreatePost } from "./pages";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">

        <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold text-lg">
                  ZCA
                </div>
                <span className="text-2xl font-extrabold text-blue-500 ">
                  TechX
                </span>
              </div>
            </span>
          </Link>

        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>

        </header>
        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/create-post" element= {<CreatePost/>} />
      </Routes>


        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
