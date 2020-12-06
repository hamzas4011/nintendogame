import Routes from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

function App() {
  return (
       <div className="page-container">
         <div className="content-wrap">
       <Routes></Routes>
       </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

