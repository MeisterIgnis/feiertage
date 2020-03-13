import { connect } from 'react-redux';
import Feiertage from '../components/Feiertage.js';

const mapStateToProps = (state) => ({
    items: state.itemsToShow
});

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feiertage)