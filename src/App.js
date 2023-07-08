import ListOfUsers from './components/ShowList/ListOfUsers';
import AddUserCard from './components/AddUser/AddUserCard';
import HeaderOfPage from './components/Header/HeaderOfPage';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <AppLayout>
      <HeaderOfPage/>      
      <ListOfUsers/>
      <AddUserCard/>
    </AppLayout>);
}

export default App;
