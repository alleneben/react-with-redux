
import useBoolean from './shared/hooks/useBoolean';



function App() {

  const [showSpoil, setShowSpoil, bn] = useBoolean(false)

  return (
    <div className="App">
      <button onClick={setShowSpoil.toggle}> Show/ Hide</button>

      {
        showSpoil && <div> { bn }</div>
      }
      
    </div>
  );
}

export default App;
