import { arrayOf, object } from 'prop-types';
import './UsersTable.scss';

export const UsersTable = ({ users }) => {
  const headers = ['Name', 'Phone', 'Age', 'Gender'];

  const renderHeaders = () => headers.map((head, index) => (
    <div key={`head_${index}`} className='th'>
      <span>{head}</span>
    </div>
  ));

  const renderBody = () => users.map((user, index) => (
    <div key={`user_${index}`} className='tr'>
      <div className='td'>
        <span>{`${user.name.title} ${user.name.first}`}</span>
      </div>
      <div className='td'>
        <span>{user.phone}</span>
      </div>
      <div className='td'>
        <span>{user.dob.age}</span>
      </div>
      <div className='td'>
        <span>{user.gender}</span>
      </div>
    </div>
  ));

  return (
    <div className='table'>
      <div className='table-head'>
        <div className='tr'>
          {renderHeaders()}
        </div>
      </div>
      {
        users && users.length ? (
          <div className='table-body'>
            {renderBody()}
          </div>
        )
          : (
            <div className='table empty'>
              <span>No users found.</span>
            </div>
          )
      }
    </div>
  );
};

UsersTable.propTypes = {
  users: arrayOf(object)
};
