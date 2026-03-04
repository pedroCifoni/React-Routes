import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Bem vindo a pagina HOME</h1>

      <Link to="/sobre">sobre</Link> <br/>
      <Link to="/contato">Contato</Link>


      <Link to="/produto/1234">Acessar Produto 1234</Link>


    </div>


  );
}

export default Home;
