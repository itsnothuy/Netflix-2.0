import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import './index.css';



const Welcome = lazy(() => import("./Pages/Welcome"));

function App() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route index path="/" element={<Welcome />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
