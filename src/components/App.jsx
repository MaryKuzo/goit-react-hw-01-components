import { Profile } from "./Profile/Profile";
import user from './Profile/user.json';

import { Statistics } from "./Statistics/Statistics";
import data from './Statistics/data.json';

import { FriendsList } from "./FriendList/FriendList";
import friends from './FriendList/friends.json';

import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
