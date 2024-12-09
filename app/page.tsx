import Home from "./components/pages/Home";
import Aboutme from "./components/pages/Aboutme";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";

export default function App() {
  return (
    <div className="bg-gray-50">
      <div id="home"><Home/></div>
      <div id="about"><Aboutme/></div>
      <div id="project"><Project/></div>
      <div id="contact"><Contact/></div>
    </div>
  );
}
