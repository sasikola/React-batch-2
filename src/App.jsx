import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  
  );
}

export default App;

// props --> props are used to share the data from one component to another component
// state --> state is used to store the data of a component
// useState -->
// useEffect
// useReducer
// useCallback

// closure --> clousure is a concept it will allow us to access the outer function variable inside the inner function
