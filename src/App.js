import Gallery from './Gallery'
import seecode from "./seecode.png"
import "./App.css"

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>Photography</h1>
                <h2>Author: Aleksandra Wolska</h2>
                <a href="https://github.com/AleksandraWolska/photo-gallery.io">
                    <img className="seecode" src={seecode} alt="See source code" />
                </a>
            </header>

            <Gallery />
        </div>
    );
}

export default App;
