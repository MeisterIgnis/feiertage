import { connect } from 'react-redux';
import ControlField from '../components/ControlField.js';
import { setStateFilter } from '../actions/actions.js';

const mapStateToProps = (state) => ({
    value: state.stateFilter,
    selected: state.stateFilter,
    state
});

const mapDispatchToProps = dispatch => ({
    setStateFilter: (filter) => dispatch( setStateFilter(filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlField)