import { useState } from "react";

const Formulario = ({ adicionarLivro }) => {
    const [texto, setTexto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagen, setImagen] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!texto.trim()) return;
        adicionarLivro(texto);
        setTexto('');
        setDescricao('');
        setImagen('');
    };
    return (
        <form onSubmit={handleSubmit} className="mb-3 d-flex gap-2">
            <input
                type="text"
                className="form-control"
                placeholder="Novo livro"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
             <input
                type="text"
                className="form-control"
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />
             <input
                type="img"
                className="form-control"
                placeholder="Imagen"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Adicionar</button>
        </form>
    );
};

export default Formulario