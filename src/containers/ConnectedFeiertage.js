import { connect } from 'react-redux';
import Feiertage from '../components/Feiertage.js';

const mapStateToProps = (items) => ({
    items
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feiertage)