import "./App.css";
import { PrimaryButton } from "./modules/shared/components/button/primary/primary";
import { SecondaryButton } from "./modules/shared/components/button/secondary/secondary";
import {Sort} from './modules/shared/components/sort/sort'

function App() {
	return (
		<div style={{display: 'block'}}>
			<PrimaryButton>Apply filters</PrimaryButton>
			<SecondaryButton>Back</SecondaryButton>
			<Sort>Newest first</Sort>
		</div>
	);
}

export default App;
