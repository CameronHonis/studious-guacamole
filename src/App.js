import React from 'react';
function App() {
  const ref = React.useRef({text: ""});
  return (
    <div className="App">
      <button
        
        onClick={e => {
          window.speechSynthesis.speak(new SpeechSynthesisUtterance(ref.current.text));
        }}
      >
        asdf
      </button>
      <input
        type="text"
        name="text"
        onChange={e => ref.current.text = e.target.value}
      />
    </div>
  );
}

export default App;
