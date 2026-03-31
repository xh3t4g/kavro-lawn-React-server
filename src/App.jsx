import { use, useState } from "react";
import { HomePage } from "./pages/HomePage";
import { GalleryPage } from "./pages/GalleryPage";
import { AuthPage } from "./pages/AuthPage";

function App() {
    const [currentPage, setCurrentPage] = useState('home')
    const [currentUser, setCurrentUser] = useState(null);

    if (currentPage === 'home') return <HomePage setCurrentPage={setCurrentPage} currentUser={currentUser}/>
    if (currentPage === 'gallery') return <GalleryPage setCurrentPage={setCurrentPage}/>
    if (currentPage === 'auth') return <AuthPage setCurrentPage={setCurrentPage} setCurrentUser={setCurrentUser}/>

}

export default App;
