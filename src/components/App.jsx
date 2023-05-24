import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
const App = () => {
  return (
    <section>
      <div
        className="chapter"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className="chapter">
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div className="chapter">
        <FriendList friends={friends} />
      </div>
      <div className="chapter">
        <TransactionHistory items={transactions} />
      </div>
    </section>
  );
};
export default App;
