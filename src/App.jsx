import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { GalleryPage } from "./pages/GalleryPage";
import { AuthPage } from "./pages/AuthPage";

function App() {
    const [currentPage, setCurrentPage] = useState('home')

    if (currentPage === 'home') return <HomePage setCurrentPage={setCurrentPage}/>
    if (currentPage === 'gallery') return <GalleryPage setCurrentPage={setCurrentPage}/>
    if (currentPage === 'auth') return <AuthPage setCurrentPage={setCurrentPage}/>

}

export default App;
