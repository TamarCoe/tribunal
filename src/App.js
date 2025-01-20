import Logo from './Logo.png';
import './App.css';
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="keywords" content="בית דין, פתח תקווה, דיני ממונות , רבי עמרם פריד, רבי שמואל כהן" />
        <title>בית דין פ"ת</title>
      </Helmet>
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: 30 }}>
          בית דין צדק לעניני ממונות
          <br />
          פתח תקווה

        </p>
        <h5
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            רחוב יד הבנים 30 פ"ת
          </div>
        </h5>
      </header>
      <div className='content'>
        <h1>
          בראשות הגאון ר' עמרם פריד שליט"א
        </h1>
        <h3>- - -</h3>
        <div style={{ height: '50px' }}></div>
        <h4>
          לקביעת תור לדיון
        </h4>
        <div className='details'>
          <div>
            <span className='detail-title'> טל המזכירות:</span>

            055-678-7822
          </div>
          <div>
            {/* <a style={{ color: "#282c34" }} href='sh4180014@gmail.com'> */}
            sh4180014@gmail.com
            {/* </a> */}
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
