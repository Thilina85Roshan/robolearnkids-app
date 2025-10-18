import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🤖 Welcome to RoboLearn Kids!</h1>
        <p>Fun, interactive learning for curious young minds.</p>
        <button
          onClick={() => alert('Let’s start learning! 🚀')}
          style={{
            backgroundColor: '#ffcc00',
            border: 'none',
            borderRadius: '12px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Start Learning
        </button>
      </header>
    </div>
  );
}

export default App;
