import './App.css';
import {connect} from "react-redux"
import Counter from './components/Counter';
import Theme from './components/Theme';
import { CHANGE_THEME } from './redux/actionConstants/themeActions';

function App(props) {
  console.log("props ==========", props.theme)
  return (
    <div className={!props.theme ? `dark-theme App` : `App`}>
      <div className='App-header'>
        <Theme />
        <Counter />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { theme: state.theme }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleThemeChange: () => {
      return dispatch({type: CHANGE_THEME})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
