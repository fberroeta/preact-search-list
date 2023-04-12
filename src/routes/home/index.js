import { signal, computed } from '@preact/signals'

const INITIAL_ESTATE = [
	{ id: 1, name: 'Francisco' },
	{ id: 2, name: 'Caro' },
	{ id: 3, name: 'Woli' }
]
const users = signal(INITIAL_ESTATE)
const searchText = signal('')
const Home = () => {

	const handleSubmit = (event) => {
		// console.log(searchText.value)
		event.preventDefault()
	}

	const handleChange = (event) =>{
		searchText.value = event.target.value.toLowerCase()
	}
	return (
		<section>
			<form onSubmit={handleSubmit}>
				<label>
          Name:
					<input value={searchText.value} onInput={handleChange} type='text' name='name' placeholder='Search...' />
				</label>
				<button>Search</button>
			</form>
			<List data={users.value} inputText={searchText.value} />
		</section>
	)
}
const List = ({data, inputText}) => {
	const filteredData = data.filter((el) => {
		//if no input the return the original
		console.log(inputText)
		if (inputText === '' |inputText==null) {
			console.log(`vacio o nulo=${  inputText}`);
			return el;
		}
		//return the item which contains the user input
		console.log(el.name.toLowerCase().includes(inputText)??el)
		return el.name.toLowerCase().includes(inputText)
    
	})
	console.log(filteredData)
	// console.log(data)
	return (
		<ul>
			{filteredData.map((user)=> 
				<li key={user.id}>{user.name}</li>
			)}
		</ul>
	)
}

export default Home
