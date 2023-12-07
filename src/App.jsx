import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GallaryHeader from './components/GallaryHeader';
import GallaryMidpart from './components/GallaryMidpart';
import { imageData } from './components/Datacomponent';
function App() {
  return (
    <div>
      <GallaryHeader />
     <GallaryMidpart  imageData={imageData}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
