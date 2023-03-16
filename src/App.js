import { Routes, Route } from 'react-router-dom'
import NavBarTop from "./components/NavBar" 
// import myData from "./db.json"
import Home from "./pages/Home"
import Topics from "./pages/Topics"
import Program from "./pages/Program"

function App() {
  // console.log(myData.description)
  return (
    <>
    <NavBarTop/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Topics/:id" element={<Topics />} />
          <Route path="/Program/:id" element={<Program />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
