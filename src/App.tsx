import { createGlobalStyle } from 'styled-components';
import Todo from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  * {margin: 0;padding: 0;box-sizing: border-box;}
	ul, ol{list-style: none} 
	a{text-decoration:none; color:inherit}
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Todo />
		</>
	);
}

export default App;
