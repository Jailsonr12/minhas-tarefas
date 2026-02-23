# Lista de Contatos

Aplicação React para gerenciar uma lista de contatos com funcionalidades de adicionar, editar e remover contatos.

## Tecnologias

- **React** - Biblioteca JavaScript para UI
- **Redux Toolkit** - Gerenciamento de estado
- **Styled Components** - Estilização de componentes
- **TypeScript** - Tipagem estática

## Funcionalidades

- ✅ Adicionar novo contato
- ✅ Editar contato existente
- ✅ Remover contato
- ✅ Buscar contatos por nome ou e-mail

## Estrutura do Projeto

```
src/
├── models/
│   └── Contato.ts          # Modelo de dados
├── store/
│   ├── index.ts            # Configuração Redux
│   └── reducers/
│       ├── contatos.ts     # Reducer de contatos
│       └── filtro.ts       # Reducer de filtro
├── Components/
│   ├── Contato/            # Componente de contato individual
│   └── BotaoAdicionar/     # Botão para adicionar contato
├── containers/
│   ├── ListaDeContatos/    # Lista de contatos
│   ├── Formulario/         # Formulário para novo contato
│   └── BarraLateral/       # Barra lateral com busca
└── pages/
    ├── Home/               # Página inicial
    └── Cadastro/           # Página de cadastro
```

## Como usar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm start

# Build para produção
npm run build
```

## Dados de exemplo

O projeto vem com 3 contatos pré-carregados para facilitar o teste das funcionalidades.
