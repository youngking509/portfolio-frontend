
import Typed from 'react-typed'
import pdf from '../pdf/Kingzy_Valcourt_Resume_.PDF'
import { Main } from '../components/Main.js'

const Home = () => {
    return (
      <div>
        <div className="header-wraper">
          <div className="main-info">
              <h1>Kingzy Valcourt</h1>
              
              <a href= {pdf} class="btn btn-secondary btn-lg" role="button" aria-disabled="true" target="_blank">Resume</a>
  
              <Typed 
                className='type-text'
                strings={['Software Engineering', 'Problem Solving']}
                typeSpeed={15}
                backSpeed={20}
                loop
              />
          </div>
      </div>
      </div>
    )
  }
  
  export default Home;