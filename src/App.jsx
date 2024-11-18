/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */


import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Host from "./components/Host";
import VanList from "./components/VanList";
import VanDetail from "./components/VanDetail";
import NotFound from "./components/NotFound";

function App() {
  
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<VanList />} />
                <Route path="/vans/:id" element={<VanDetail />} />
                <Route path="/host" element={<Host />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;