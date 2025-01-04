import Logo from './Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
          בית דין צדק לעניני ממונות
        </p>
        <h5
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          פתח תקווה
          <div>
            רחוב יד הבנים 30
          </div>
        </h5>
      </header>
      <div className='content'>
        <h2>
          בראשות הגאון ר' עמרם פריד שליט"א
        </h2>
        <h3>- - -</h3>
        <div style={{ height: '50px' }}></div>
        <h4>
          לקביעת תור לדיון
        </h4>
        <div className='details'>
          <div>
            <span className='detail-title'> טל המזכירות:</span>

            0556787822
          </div>
          <div>

            sh4180014@gmail.com
            <span className='detail-title'>  :מייל</span>
          </div>
          <div>
            מחיר לדיון ראשון 200 ש"ח לכל צד
          </div>
        </div>
      </div>
      <footer className='footer'>
        <p>
          -
            בבית "יסודות"
            שע"י
            הרבנות הראשית פ"ת
            -
        </p>
      </footer>
    </div>
  );
}

export default App;
