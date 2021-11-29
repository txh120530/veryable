import logo from './logo.svg';
import './App.css';
import users from './server/users.json';


import Header from './components/Header.js'
import CardsContainer from './components/CardsContainer.js'




function App() {
  return (
    <>
      <Header />

    <main className="m-3">
      <div className="cards container max-w-sm mx-auto">
        <CardsContainer users={users} />
      </div>
    </main>
    </>
  );
}

export default App;
