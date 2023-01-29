import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesAnimated from "./RoutesAnimated";
import Navbar from "./components/Navbar/Navbar";
import PuffLoader from "react-spinners/PuffLoader";

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, [])

  return (
    loading ? (<div className="loaderBg"><PuffLoader className="loader" color={"#fff"} loading={loading} size={100} /></div>) : (
      <BrowserRouter>
        <Navbar />
        <RoutesAnimated />
      </BrowserRouter >)
  );
}

export default App;
