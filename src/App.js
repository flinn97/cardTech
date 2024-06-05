import './App.scss';
import Card from './Card';
import MainContent from './mainContent';
import './card.scss'
import './colors.scss';
function App() {
  return (
    <div style={{height:"500px", width:"500px"}}>
      <Card type="smallCard"  content={<MainContent />} />
    </div>
  );
}

export default App;
