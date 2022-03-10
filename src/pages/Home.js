
import Typed from 'react-typed'
import pdf from '../pdf/Kinzy Valcourt - RESUME .docx.pdf'

const Home = () => {
    return (
      <div className="header-wraper">
          <div className="main-info">
              <h1>Kingzy Valcourt</h1>
              
              <a href= {pdf} class="btn btn-secondary btn-lg" role="button" aria-disabled="true" target="_blank">Resume</a>
  
              <Typed 
                className='type-text'
                strings={['Software Testing & Debugging', 'Problem Solving & Logical Thinking', 'Written & Verbal Communication']}
                typeSpeed={20}
                backSpeed={30}
                loop
              />
          </div>
      </div>
    )
  }
  
  export default Home;