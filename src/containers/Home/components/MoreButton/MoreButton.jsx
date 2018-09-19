import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { getAllUsers } from 'store/users/actions';
import { getProcessing } from 'store/users/selectors';
import { Spinner } from 'components';
import './MoreButton.scss';

const MoreButton = ({ isLoadingUsers, loadMoreUsers }) => isLoadingUsers ?
  (
    <div className='more-button__spinner'>
      <Spinner />
    </div>
  ) :
  <button className='more-button' onClick={loadMoreUsers}>More Users</button>

MoreButton.propTypes = {
  isLoadingUsers: bool,
  loadMoreUsers: func
};

const mapStateToProps = state => ({
  isLoadingUsers: getProcessing(state)
});

const mapDispatchToProps = dispatch => ({
  loadMoreUsers: () => {
    dispatch(getAllUsers());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoreButton);
