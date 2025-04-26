import { useState } from 'react';
import './App.css';
import Footer from './componets/Footer';
import Header from './componets/Header';
import ListaDeLivros from './componets/ListaDeLivros';
import Formulario from './componets/Formulario';



const App = () => {
  const [livros, setLivros] = useState([
    { id: 1, texto: 'Estudar React',descricao:'Como estudar  da maneira correta', imagem:'https://images.tcdn.com.br/img/img_prod/796789/o_grande_livro_de_quimica_do_manual_do_mundo_47289_1_bc0311c093f2ba40e22bffa6b4bea3b7.jpg' },
    { id: 2, texto: 'Tomar café', descricao:'Como tomar café da maneira correta' ,imagem:'https://images.tcdn.com.br/img/img_prod/796789/o_grande_livro_de_quimica_do_manual_do_mundo_47289_1_bc0311c093f2ba40e22bffa6b4bea3b7.jpg' },
    { id: 3, texto: 'Resolver exercícios', descricao:'Como resolver ecercícios de maneira correta',imagem:'https://images.tcdn.com.br/img/img_prod/796789/o_grande_livro_de_quimica_do_manual_do_mundo_47289_1_bc0311c093f2ba40e22bffa6b4bea3b7.jpg' }
  ]);
 
  const [editandoId, setEditandoId] = useState(null);

  const adicionarLivro = (texto) => {
    const novoLivro = {id: Date.now(), texto};
    setLivros([...livros, novoLivro]);
  };

  const removerLivro = (id) => {
    setLivros(livros.filter(livro => livro.id !== id));
  };

  const iniciarEdicao = (id) => {
    setEditandoId(id);
  };

  const salvarEdicao = (id, novoTexto) => {
    setLivros(livros.map(t => (t.id === id ? {...t, texto: novoTexto} : t)));
  };


  return (
    <div className='container mt-4'>
      <Header />
      <Formulario adicionarLivro={adicionarLivro} />
      <ListaDeLivros
      livros={livros}
      removerLivro={removerLivro}
      editandoId={editandoId}
      iniciarEdicao={iniciarEdicao}
      salvarEdicao={salvarEdicao}s
        />
      <Footer />
    </div>
  );
}

export default App;
