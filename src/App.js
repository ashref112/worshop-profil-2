import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Component/Profile';

function App() {
  // alert on button using handleName
  function handleName() {
    alert("For more information check linkedin or facebook account on Achref hidri")
  }
  
  return (
        /* calling prop-children and giving them properties */
    <div className="App">
      <Profile name="Hidri Achref" age="32" bio="Open to learn new things" profession="Fullstack js Developer" data={handleName} >
      <img src="https://yt3.googleusercontent.com/c8p88q6z6Ba5q3053k7rcNV_7fgardb5Z0vMnisGoyS7ht1PN_sF5xhu4G1j_ZrBdK8W_Usj=s900-c-k-c0x00ffffff-no-rj" alt="luffy de monkey" />
      </Profile>
    </div>
  );
}

export default App;