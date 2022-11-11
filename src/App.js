import Pages from "./pages/Pages";
import './App.css';
import Logo from "./assets/Foodie.svg";
import Navigation from "./components/navigation/Navigation";


function App() {
  return (
    <div className="App">

        <main className="outer-container">
            <header>
                <img src={Logo} alt="foodie"/>
            </header>

            <section className="inner-container">
                    <Navigation />
                    <Pages/>
                <footer>Foodie App</footer>
            </section>
        </main>
    </div>
  );
}

export default App;
