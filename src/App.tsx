import { Routes, Route } from "react-router-dom"
import Error404 from "./components/pages/error404/Error404"
import Home from "./components/pages/home/Home"
import Header from "./components/layout/header/Header"
import Footer from "./components/layout/footer/Footer"
import Legal from "./components/pages/legal/Legal"

function App() {

  return (
    <>

      <Header />

      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<Legal />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
