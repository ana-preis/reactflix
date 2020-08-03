import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  
  const valoresIniciais = {
    nome:'categoria inicial',
    descricao:'descrição',
    cor:'#bbb',
  }

  const [values, setValues] = useState(valoresIniciais);
  
  //chave: nome, descricao, blabla
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, //nome: 'valor'
    })
  }
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ])
      }}>

        <div>
        <label>
          Nome da Categoria:
          <input
            type="text"
            value= {values.nome}
            onChange={function funcaoHandlerQueOErroPeddiu(infosDoEvento) {
              setValue('nome', infosDoEvento.target.value)
            }}
          />
        </label>
        </div>

        <div>
        <label>
          Descrição:
          <textarea
            type="text"
            value= {values.descricao}
            onChange={function funcaoHandlerQueOErroPeddiu(infosDoEvento) {
              //setValues(infosDoEvento.target.value)
            }}
          />
        </label>
        </div>

        <div>
        <label>
          Cor:
          <input
            type="color"
            value= {values.cor}
            onChange={function funcaoHandlerQueOErroPeddiu(infosDoEvento) {
              setValues(infosDoEvento.target.value)
            }}
          />
        </label>
        </div>
        

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria}
            </li>
          )
        })}
      </ul>

        <Link to='/'>
            Ir para Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;