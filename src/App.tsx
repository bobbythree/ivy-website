import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ArtPage from "./pages/ArtPage"
import MusicPage from "./pages/MusicPage"
import NavLayout from "./layouts/NavLayout"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/art" element={<ArtPage />} />
          <Route path="/music" element={<MusicPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

