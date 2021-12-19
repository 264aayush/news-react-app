import './App.css';
import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//comp
import Home from './components/Home';
import PublisherNews from './components/PublisherNews';

//api
import { fetchData } from './api/fetchNews';

//util
import getPublishers from './utilities/getPublishers';

//context
import myContext from './context/MyContext';

let [useState, useEffect] = [react.useState, react.useEffect];


function App() {

  let [publishers, setPublishers] = useState([]);
  let [newsData, setNewsData] = useState([])

  useEffect(() => {
    fetchData().then(res => {
      setNewsData(res.data);
      setPublishers(getPublishers(res.data));
    });
  }, [])



  return <div>
    <myContext.Provider value={
      {
        newsData: newsData,
        publishers: publishers
      }
    }>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path=":publisher" element={<PublisherNews></PublisherNews>} />
        </Routes>
      </Router>
    </myContext.Provider>
  </div>
}

export default App;
