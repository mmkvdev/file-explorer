
import './App.css';
import FileExplorer from './components/FileExplorer';
import initialData from './data';

function App() {
  return (
    <div className="App">
        <FileExplorer data={initialData} />
    </div>
  );
}

export default App;
