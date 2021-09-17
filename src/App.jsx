import './App.css';
import Header from './components/Header/Header';
import MainRoute from './components/MainRoute';
import Loading from './helper/Loading.jsx';
import ErrorBoundary from './components/ErrorBoundary';
function App() {
  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <MainRoute />
      </ErrorBoundary>
      <Loading />
    </div>
  );
}

export default App;
