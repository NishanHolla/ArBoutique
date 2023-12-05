import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import banner from './images/store_banner.png';
import prd1 from './images/product1.png';
import prd2 from './images/product2.png';
import prd3 from './images/product3.png';
import prd4 from './images/product4.png';
import Footer from './components/footer';

const img_size = {
  width:"50%",
  height: "50%"
};

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <img src={banner} height={520}></img>
        <div style={{justifyItems:"flex", display:"inline-flex"}}>
          <img src={prd1} style={img_size}></img>
          <img src={prd2} style={img_size}></img>
          <img src={prd3} style={img_size}></img>
          <img src={prd4} style={img_size}></img>        
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
