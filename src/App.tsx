import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ArtPage from "./pages/ArtPage"
import MusicPage from "./pages/MusicPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/music" element={<MusicPage />} />
      </Routes>
    </BrowserRouter>
  )
}

