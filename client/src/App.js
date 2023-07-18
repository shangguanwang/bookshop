import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css";

import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Books books={books} setBooks={setBooks}/>}
          />
          <Route path="/add" element={<Add />} />
          <Route
            path="/update/:id"
            element={<Update books={books}/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
