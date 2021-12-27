import CardContainer from "./components/cardContainer/CardContainer";

const App = () => {
  return (
    <>
      <main>
        <CardContainer />
      </main>
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Emre Cakir</a>.
        </div>
      </footer>
    </>
  );
};

export default App;
