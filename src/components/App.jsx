import { Profile } from './Profile';
import user from './user.json';

// const App = () => {
//   return (
// <>Profile</>
// <div
//   style={{
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 40,
//     color: '#010101'
//   }}
// >
//   React homework template
// </div>
//   );
// };

export default App;

// import UsersList from './Components/UsersList';

// import users from './data/users.json';

const App = () => {
  return (
    <>
      <user user={user} />
    </>
  );
};

// export default App;
