import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Bem vindo a pagina HOME</h1>

      <Link to="/sobre">sobre</Link> <br/>
      <Link to="/contato">Contato</Link>

    </div>
  );
}

export default Home;
