import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
       <section className="circles">
        <div className="tier">
          <Link to={'/page1'}>
            <div className="circle">  </div> 
          </Link>
        </div>
        <div className="tier">
          <Link to={'/page2'}>
            <div className="circle">  </div>
          </Link>
          <Link to={'/page3'}>
            <div className="circle">  </div>
          </Link>
        </div>
        <div className="tier">
          <Link to={'/page4'}>
            <div className="circle">  </div>
          </Link>
          <Link to={'/page5'}>
            <div className="circle">  </div>
          </Link>
          <Link to={'/page6'}>
            <div className="circle">  </div>
          </Link>
        </div>
        <div className="tier">
          <Link to={'/page7'} >
            <div className="circle">  </div>
          </Link>
          <div className="circle">  </div>
          <div className="circle">  </div>
          <div className="circle">  </div>
        </div>
       </section>
    </div>
  )
}

export default App;
