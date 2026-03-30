import { images } from '../components/GalleryIMG'
import { Card } from '../components/IMG_CARD'
import '../css/gallery.css'

export function GalleryPage({setCurrentPage}) {
    return <>
    
            
    <header>
        <div className="header_container">
            <div className="header_text_container">
                <h3>Kavro</h3>

                <span>⋆⋆ все наши работы ⋆⋆</span>
            </div>

            <div className="header_link_kover">
                <nav>  
                    <button onClick={() => setCurrentPage('home')}>‹ Главное</button>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section >
            <div id="gallery_list">
                {images.map((image, index) => (
                    <Card key={index} image={image}/>
                ))}
            </div>
        </section>
    </main>

    <div className="footer_gradient"></div>
    
    
    <footer>
        <div className="footer_contetnt">
            <span>Kavro © 2026 - Делаем просто</span>
        </div>
        <div className="fog"></div>
    </footer>

    
    </>
}
