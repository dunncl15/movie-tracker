import FavButton from '../components/FavButton.js';
import { connect } from 'react-redux';
// import * as actions from '../actions/actions.js';


const mapStateToProps = (state) => {
  return state;
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFavs: (favorites) => {
//       dispatch(actions.addFavs(favorites))
//     }
//   }
// };

export default connect(mapStateToProps, null)(FavButton);
