
import Typed from 'react-typed'


const Home = () => {
    return (
      <div className="header-wraper">
          <div className="main-info">
              <h1>Kingzy Valcourt</h1>
              
              <a href="file:///Users/kingzy/Desktop/Docs/Kinzy%20Valcourt%20-%20RESUME%20.docx.pdf" class="btn btn-secondary btn-lg" role="button" aria-disabled="true">Resume</a>
  
              <Typed 
                className='type-text'
                strings={['I build Things', 'I debug', 'I create']}
                typeSpeed={40}
                backSpeed={60}
                loop
              />
          </div>
      </div>
    )
  }
  
  export default Home;