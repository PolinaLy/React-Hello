import {Routes, Route, Link} from 'react-router-dom';
import { HooksPage } from '../pages/HooksPage';
import { HomePage } from '../pages/HomePage';
import {LoginPage} from '../features/processes/auth/index';
import { FlexBlock } from '../shared/components/FlexBlock';
import { Main } from '../shared/components/Main';


function App() {
  return (
    <Main> 
      <FlexBlock>
          <Link to="/" style={{display: 'block'}}>Home</Link>
          <Link to="/hooks" style={{display: 'block'}}>Hooks</Link>
          <Link to="/login" style={{display: 'block'}}>Login</Link>
      </FlexBlock>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/hooks" element={<HooksPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </Main>
  );
}

export default App;
