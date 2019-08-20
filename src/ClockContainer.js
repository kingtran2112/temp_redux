import refresh from './reducer.js'
import { REFRESH } from './ActionTypes.js'
import {connect} from 'react-redux'
import Clock from './Clock.js'

const mapStateToProps = state => {
	return {
		time: refresh(state.time, REFRESH)
	}
}

const TempClock = connect(mapStateToProps)(Clock)

export default TempClock