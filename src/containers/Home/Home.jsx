import { func, bool, array } from 'prop-types';
import { connect } from 'react-redux';
import { getAllUsers } from 'store/users/actions';
import { getProcessing, getAll } from 'store/users/selectors';
import { Spinner } from 'components';
import { UsersTable, MoreButton } from './components';
import './Home.scss';

class Home extends React.Component {
  static propTypes = {
    isLoadingUsers: bool,
    users: array,
    loadAllUsers: func
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { isLoadingUsers, users } = this.props;
    return (
      <section className='home-section'>
        <div className='home-section__title'>
          <h2>Home</h2>
        </div>
        {
          (isLoadingUsers && !users)
            ? <Spinner />
            : (
              <article className='home-section__article'>
                <UsersTable users={users} />
                <MoreButton />
              </article>
            )
        }
      </section>
    );
  }

  componentDidMount() {
    const { users, loadAllUsers } = this.props;

    if (!users) {
      loadAllUsers();
    }
  }
}

const mapStateToProps = state => ({
  isLoadingUsers: getProcessing(state),
  users: getAll(state)
})

const mapDispatchToProps = dispatch => ({
  loadAllUsers: () => {
    dispatch(getAllUsers())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
