import { Routes, Route } from "react-router"; 
import TxtImage from "./components/txtImage";
import TxtPdf from "./components/txtPdf";
import TxtVideo from "./components/txtVideo";
import TxtGif from "./components/txtGif";
import Landing from "./components/landing";


function App() {
  return (
    <>
     <Routes>
        <Route path="/txtImage" element={<TxtImage />} />{" "}
        <Route path="/txtPdf" element={<TxtPdf />} />{" "}
        <Route path="/txtVideo" element={<TxtVideo />} />{" "}
        <Route path="/txtgif" element={<TxtGif />} />{" "}
        <Route path="/" element={<Landing />} />
      </Routes>
    
    </>
  )
}

export default App
