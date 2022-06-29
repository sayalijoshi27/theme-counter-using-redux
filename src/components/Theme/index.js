import {connect} from "react-redux"
import {CHANGE_THEME} from "../../redux/actionConstants/themeActions"

const Theme = (props) => {
    return (
        <div>
            <h1>Toggle Theme</h1>
            <button onClick={props.handleThemeChange}>Toggle Theme</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { theme: state.theme}
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleThemeChange: () => {
            return dispatch({type: CHANGE_THEME})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Theme)