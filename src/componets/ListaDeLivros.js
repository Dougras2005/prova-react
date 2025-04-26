import { useState } from 'react';
import './ListaDeLivros.css'

const ListaDeLivros = ({ livros, removerLivro, editandoId, iniciarEdicao, salvarEdicao }) => {
    const [novoTexto, setNovoTexto] = useState('');

    return (
        <ul className="list-group">
            {livros.map(livro => (
                <li key={livro.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {editandoId === livro.id ? (
                        <>
                            <input
                                type="text"
                                className="form-control me-2"
                                value={novoTexto || livro.texto}
                                onChange={(e) => setNovoTexto(e.target.value)}
                            />
                            <button
                                className="btn btn-sm btn-success me-2"
                                onClick={() => salvarEdicao(livro.id, novoTexto)}
                            >
                                Salvar
                            </button>
                        </>
                    ) : (
                        <>

                            <div className="card">
                                <img src={livro.imagem} className=" img" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{livro.texto}</h5>
                                    <p className="card-text">{livro.descricao}</p>
                                    <div>
                                        <button
                                            className="btn btn-sm btn-outline-primary me-2"
                                            onClick={() => {
                                                setNovoTexto(livro.texto);
                                                iniciarEdicao(livro.id);
                                            }}
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => removerLivro(livro.id)}
                                        >
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ListaDeLivros;