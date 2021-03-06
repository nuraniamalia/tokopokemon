import React from 'react';
import styled from 'styled-components';

import { PokemonContext } from '../contexts/PokemonContext';
import PokemonCard from '../components/PokemonCard';
import BaseRoute from '../components/BaseRoute';
import PokemonSkeleton from '../components/PokemonSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import CustomAppBar from '../components/CustomAppBar';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

import { gql, useQuery } from '@apollo/client';

const Container = styled.div`
  padding: 15px;
  padding-top: 25px;
  padding-bottom: 70px;

  .card-wrapper,
  .skeleton-wrapper {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    background: white;
  }

  .logo-wrapper {
    display: block;
    border-radius: 20px;
    background: white;
    box-shadow: 1px 1px 60px 0px #00000017;
    margin: 10px auto;
    max-width: 350px;
    transition: 0.3s;
    border: 1px solid #d4d4d4;
    padding: 20px;

    .logo-pokemon {
      width: 100%;
      height: 100px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .total-caught {
      margin-top: 20px;
      text-align: center;

      .title {
        font-size: 14pt;
        font-weight: bold;
      }
    }
  }
`;

const Pokemons = (props: RouteConfigComponentProps) => {
  const {
    pokemons,
    isFetchingPokemons,
    resetAndFetch,
    next,
    hasNext,
  } = React.useContext(PokemonContext);

  const { route } = props;

  React.useEffect(() => {
    if (resetAndFetch) resetAndFetch();
    // eslint-disable-next-line
  }, [])

  const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

  function RenderPokemons() {
    return (
      <InfiniteScroll
        dataLength={pokemons.length} 
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        next={next || (() => {})}
        hasMore={hasNext}
        loader={
          <div className="skeleton-wrapper">
            <PokemonSkeleton margin />
            <PokemonSkeleton margin />
          </div>
        }
        style={{ overflow: 'unset' }}
      >
        <div className="card-wrapper">
          {pokemons.map((d, i) => (
            <PokemonCard key={i} data={d} />
          ))}
        </div>
      </InfiniteScroll>
    );
  }

  function renderLoading() {
    if (isFetchingPokemons && pokemons.length === 0) {
      return (
        <div className="skeleton-wrapper">
          <PokemonSkeleton margin />
          <PokemonSkeleton margin />
          <PokemonSkeleton margin />
          <PokemonSkeleton margin />
        </div>
      );
    }
  }

  return (
    <BaseRoute>
      <CustomAppBar />
      <Container>
        {/* <div className="logo-wrapper">
          <div className="logo-pokemon">
            <img src="/logo512.png" alt="" />
          </div>
          <div className="total-caught">
            <div className="title">Pokemon App</div>
            Total pokemon caught: {myPokemons.length}
          </div>
        </div> */}
        {RenderPokemons()}
        {renderLoading()}
        {route?.routes && renderRoutes(route.routes)}
      </Container>
    </BaseRoute>
  );
};

export default Pokemons;
