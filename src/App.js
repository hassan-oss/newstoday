import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App =()=>  {
  const page = 9
  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  const [progress, setProgress] = useState(0);
  
  

  


    return (

      
      <div>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
       
      />

        <Router>
          <Navbar />

          {/* key used to navigate to the specific category */}
          <Routes>
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={page} country={"us"} category={"general"} />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={page} country={"us"} category={"sports"} />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={page} country={"us"} category={"business"} />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={page} country={"us"} category={"entertainment"} />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={page} country={"us"} category={"health"} />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={page} country={"us"} category={"science"} />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={page} country={"us"} category={"technology"} />} />

          </Routes>


        </Router>
      </div>
    )
  
}
export default App