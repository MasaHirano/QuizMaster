import { connect } from 'react-redux'
import Home from '../components/Home'
import { loadQuestions } from '../actions/homeActions'

const mapStateToProps = ({ homeReducer }) => {
  return { ...homeReducer }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDidMount: () => {
      dispatch(loadQuestions())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
