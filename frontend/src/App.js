import Header from "./components/Header";
import Footer from "./components/Footer";
import DrawCanvas from './components/DrawCanvas'
import Editor from "./components/ShapeEditor";
function App() {
  const imageInfo = {
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    width: 500,
    height:500
  }
  return (
    <div>
      <Header />
      <Editor/>
    </div>
  );
}

export default App;
