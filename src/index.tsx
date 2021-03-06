import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SnackbarStore } from './contexts/SnackbarContext';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { COLORS } from './config';
import { OverlayLoadingStore } from './contexts/OverlayLoadingContext';
import { WindowStackStore } from './contexts/WindowStackContext';
import { MainRouterStore } from './contexts/MainRouterContext';
import {
  PokemonStore,
  Pokemon,
  PokemonListItem,
} from './contexts/PokemonContext';
import { MyPokemonStore } from './contexts/MyPokemonContext';
import routes from './routes';
import { ensureReady } from './utils';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const MUITheme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
  },
});

export type ServerProps = {
  pokemons?: PokemonListItem[];
  pokemon?: Pokemon;
};

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql"
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const generateAppComponent = (props?: ServerProps) => {
  const { pokemon, pokemons } = props || {};

  return (
    <ApolloProvider client={client}>
    <OverlayLoadingStore>
      <SnackbarStore>
          <MainRouterStore>
            <WindowStackStore>
              <PokemonStore pokemon={pokemon} pokemons={pokemons}>
                <MyPokemonStore>
                  <MuiThemeProvider theme={MUITheme}>
                      <App />
                  </MuiThemeProvider>
                </MyPokemonStore>
              </PokemonStore>
            </WindowStackStore>
          </MainRouterStore>
      </SnackbarStore>
    </OverlayLoadingStore>
    </ApolloProvider>
  );
};

if (typeof window !== 'undefined') {
  const stringProps = document.getElementById('props')?.dataset?.props;

  let serverProps: ServerProps | undefined = undefined;

  try {
    const parsedProps = JSON.parse(stringProps || '');
    serverProps = parsedProps;
  } catch (err) {
    serverProps = undefined;
  }

  ensureReady(routes).then(() => {
    ReactDOM.hydrate(
      <BrowserRouter>{generateAppComponent(serverProps)}</BrowserRouter>,
      document.getElementById('root')
    );
  });
  // serviceWorker.register();
}

export const renderOnServer = (location: string, serverProps: ServerProps) => {
  return ensureReady(routes, location).then(() => (
    <StaticRouter location={location} context={{}}>
      {generateAppComponent(serverProps)}
    </StaticRouter>
  ));
};

// const dummyData = [
//   {
//     name: 'bulbasaur',
//     url: 'https://pokeapi.co/api/v2/pokemon/1/',
//   },
//   {
//     name: 'ivysaur',
//     url: 'https://pokeapi.co/api/v2/pokemon/2/',
//   },
//   {
//     name: 'venusaur',
//     url: 'https://pokeapi.co/api/v2/pokemon/3/',
//   },
//   {
//     name: 'charmander',
//     url: 'https://pokeapi.co/api/v2/pokemon/4/',
//   },
// ];

// const pokemonDummy: Pokemon = {
//   name: 'aa',
//   abilities: [
//     {
//       ability: {
//         name: 'aaa',
//       },
//     },
//   ],
//   image_url: 'aaaa',
//   moves: [
//     {
//       move: {
//         name: 'aaa',
//       },
//     },
//   ],
//   species: {
//     name: 'aaaa',
//   },
//   types: [
//     {
//       slot: 1,
//       type: {
//         name: 'bb',
//       },
//     },
//   ],
// };

// const renderServer = async () => {
//   const result = await renderOnServer(window.location.pathname, {
//     pokemons: dummyData.map((d: any) => {
//       const pokemon: PokemonListItem = {
//         name: d.name,
//         image_url: generateImageUrlByUrl(d.url),
//       };
//       return pokemon;
//     }),
//     pokemon: pokemonDummy,
//   });
//   console.log(ReactDOMServer.renderToString(result));
// };

// renderServer();
