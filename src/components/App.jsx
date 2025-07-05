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
          <div className="circle">  </div>
          <div className="circle">  </div>
        </div>
        <div className="tier">
          <div className="circle">  </div>
          <div className="circle">  </div>
          <div className="circle">  </div>
        </div>
        <div className="tier">
          <div className="circle">  </div>
          <div className="circle">  </div>
          <div className="circle">  </div>
          <div className="circle">  </div>
        </div>
       </section>
    </div>
  )
}

export default App;
