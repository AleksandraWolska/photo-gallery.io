import Gallery from './Gallery'
import seecode from "./seecode.png"
import "./App.css"

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>Photography</h1>
                <h2>Author: Aleksandra Wolska</h2>
                <h2 id="contact-h2">Contact: aleksandra.joanna.wolska@gmail.com</h2>
                <a href="https://github.com/AleksandraWolska/photo-gallery.io">
                    <img className="seecode" src={seecode} alt="See source code" />
                </a>
            </header>

            <Gallery />
            <footer>
                <h2>Contact: aleksandra.joanna.wolska@gmail.com</h2>
            </footer>
        </div>
    );
}

export default App;
