import React, { useReducer } from 'react';
import StyledCatalog from './StyledCatalog.ts';
import ButtonArrowPointer from '../../components/ButtonArrowPointer/ButtonArrowPointer.tsx';
import ButtonNumber from '../../components/ButtonNumber/ButtonNumber.tsx';
import SelectorBox from '../../components/SelectorBox/SelectorBox.tsx';

interface StateReducer {
  indexes: number[];
  activeIndex: number;
  totalItems: number;
  lastIndex?: number;
}

interface ActionReducer {
  type: 'back' | 'forward' | 'set';
  payload?: number;
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

function Catalog(): React.ReactNode {
  const initialState: StateReducer = {
    indexes: [1, 2, 3, 4],
    activeIndex: 3,
    totalItems: 30,
    lastIndex: 6,
  };

  const [state, dispatch] = useReducer(reducer, initialState);  
  
  return (
    <StyledCatalog className='catalog'>
      <div className='catalog__filters'>
        <SelectorBox type="sort-by" />
        <SelectorBox type="items-qtd" />
      </div>
      <div className='catalog__container'>

      </div>
      <div className='page-indicator' >
        <ButtonArrowPointer direction='left' isDisabled={state.activeIndex === 0 && state.indexes[0] === 1} onClick={() => dispatch({type: 'back'})} />
        {state.indexes.map((pageNumber, index) => {
          return (
            <ButtonNumber value={pageNumber} isSelected={index === (state.activeIndex)} onClick={() => dispatch({type: 'set', payload: index})} />
          );
        })}
        <ButtonArrowPointer direction='right' isDisabled={state.activeIndex === 3 && state.totalItems === state.indexes[3]} onClick={() => dispatch({type: 'forward'})}/>
      </div>

    </StyledCatalog>
  );
}

export default Catalog;
