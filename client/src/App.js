import './style.scss';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Task from './containers/Task/Task';

function App() {
    return (
        <div className='App'>
            <Logo />
            <Task />
            <Footer />
        </div>
    );
}

export default App;
