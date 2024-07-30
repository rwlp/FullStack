import React, { useReducer } from 'react';
import StyledPaginator from './StyledPaginator.ts';
import ButtonArrowPointer from '../ButtonArrowPointer/ButtonArrowPointer.tsx';
import ButtonNumber from '../ButtonNumber/ButtonNumber.tsx';


interface PaginatorProps {
  // Define here props of this Component
}

interface ActionReducer {
  type: 'back' | 'forward' | 'set';
  payload?: number;
}

interface StateReducer {
  indexes: number[];
  activeIndex: number;
  totalItems: number;
  lastIndex?: number;
}

function reducer(state: StateReducer, action: ActionReducer): StateReducer  {
  const reducers: {[key: string]: () => StateReducer} = {
    'forward': () => {
      if (state.activeIndex === 3) {
        return {
          ...state,
          indexes: state.indexes.map(e => e + 1),
        }
      } else {
        return {
          ...state,
          activeIndex: state.activeIndex + 1,
        }
      }
    },

    'back': () => {
      if (state.activeIndex === 0) {
        return {
          ...state,
          indexes: state.indexes.map(e => e - 1),
        }
      }
      return {
        ...state,
        activeIndex: state.activeIndex - 1,
      }
    },

    'set': () => {
      return {
        ...state,
        activeIndex: action.payload!,
      }
    }
  }

  return reducers[action.type]();
}

const initialState: StateReducer = {
  indexes: [1, 2, 3, 4],
  activeIndex: 3,
  totalItems: 30,
  lastIndex: 6,
};

function Paginator({}: PaginatorProps): React.ReactNode {
  const [state, dispatch] = useReducer(reducer, initialState);  

  return (
    <StyledPaginator className='page-indicator' >
        <ButtonArrowPointer direction='left' isDisabled={state.activeIndex === 0 && state.indexes[0] === 1} onClick={() => dispatch({type: 'back'})} />
        {state.indexes.map((pageNumber, index) => {
          return (
            <ButtonNumber value={pageNumber} isSelected={index === (state.activeIndex)} onClick={() => dispatch({type: 'set', payload: index})} />
          );
        })}
        <ButtonArrowPointer direction='right' isDisabled={state.activeIndex === 3 && state.totalItems === state.indexes[3]} onClick={() => dispatch({type: 'forward'})}/>
      </StyledPaginator>
  );
}

export default Paginator;
