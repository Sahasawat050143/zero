import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { BookFlightPage } from "./pages/book-flight/BookFlightPage";
import { Page2 } from "./pages/page2/page2/Page2";
import NoMatch from "./pages/no-match/NoMatch";
import MasterPage from "./masterLayout/MasterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MasterPage />}>
          <Route index element={<BookFlightPage />} />
          <Route path="bookflight" element={<BookFlightPage />} />
          <Route path="bookList" element={<Page2 />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
