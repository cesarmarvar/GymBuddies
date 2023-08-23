import { Button } from './Components/Button/Button';
import Input from './Components/Input/input';
import './App.css';


function App() {
  return (
    <div>
      <div className='container'>
        <h1 className='title'>Gym Buddies</h1>
        <Input 
          label="Email"
          placeholder="example@mail.com"
          value="test"
        />
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default App;
