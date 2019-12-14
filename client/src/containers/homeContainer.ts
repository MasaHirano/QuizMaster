import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'

import Home from '../components/Home'
import { loadQuestions } from '../actions/homeActions'

import { AppState, HomeState, HomeDispatchProps, HomeActionTypes } from '../types/homeTypes'

const mapStateToProps: MapStateToProps<HomeState, any, AppState> =
  (state: AppState) => state.home

const mapDispatchToProps: MapDispatchToProps<HomeDispatchProps, any> =
  (dispatch: ThunkDispatch<AppState, undefined, Action<HomeActionTypes>>) => {
    return {
      onDidMount: () => {
        dispatch(loadQuestions())
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
