import { useEffect, useContext, lazy, Suspense } from "react";
import "./App.css";

const Home = lazy(() => import("./Pages/Home"));

function App() {

  return (
    <>
      <div>
        Hello Huy
      </div>
    </>
  )
}

export default App
