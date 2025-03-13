import "./App.css";
import Dropdown from "./modules/list/components/dropdown/dropdown";
import { Sort } from "./modules/shared/components/sort/sort";

function App() {
	const items = [
		{ label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
		{ label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
		{ label: 'Item 3', onClick: () => console.log('Item 3 clicked') },
	  ];

	return (
		<div style={{ display: "block" }}>
			<Sort>Newest first</Sort>
			<Dropdown items={items}>category</Dropdown>
		</div>
	);
}

export default App;
