import { useState } from 'react'

const App = () => {
	const [cars, setCars] = useState([])
	const [carYear, setCarYear] = useState(new Date().getFullYear())
	const [carMake, setCarMake] = useState('')
	const [carModel, setCarModel] = useState('')

	const addCars = () => {
		if (carYear !== '' && carMake !== '' && carModel !== '') {
			const newCar = { year: carYear, make: carMake, model: carModel }
			setCars([...cars, newCar])
			setCarMake('')
			setCarModel('')
		} else {
			alert('input something')
		}
	}

	const deleteCar = remove => {
		setCars(cars.filter(car => car !== remove))
	}

	const EnterClick = e => {
		if (e.key === 'Enter') {
			addCars()
		}
	}

	return (
		<div className=' mt-2'>
			<h1 className=' text-2xl font-bold text-red-600 underline font-[Lora] flex justify-center items-center'>
				CarLand
			</h1>

			{cars.map(car => (
				<div className=' mx-4' key={car}>
					<ul className=' flex'>
						<li className=' text-white flex items-center'>
							{car.year} {car.make} {car.model}
						</li>{' '}
						<button
							onClick={() => deleteCar(car)}
							className='  ml-2 text-xl font-bold text-orange-400 border-2 border-red-200 py-1 px-3 my-1'
						>
							x
						</button>
					</ul>
				</div>
			))}

			<div className=' m-4'>
				<input
					value={carYear}
					onChange={e => setCarYear(e.target.value)}
					className=' bg-transparent text-white px-2 py-1 border-2 border-red-300 my-2 outline-none rounded-lg'
					type='text'
				/>
				<br />
				<input
					value={carMake}
					onChange={e => setCarMake(e.target.value)}
					placeholder='Enter u carMake'
					className=' bg-transparent text-white px-2 py-1 border-2 border-red-300 my-2 outline-none rounded-lg'
					type='text'
				/>
				<br />
				<input
					value={carModel}
					onKeyDown={EnterClick}
					onChange={e => setCarModel(e.target.value)}
					placeholder='Enter u carModel'
					className=' bg-transparent text-white px-2 py-1 border-2 border-red-300 my-2 outline-none rounded-lg'
					type='text'
				/>
				<br />
				<div className=' pt-2 '>
					<button
						onClick={addCars}
						className='border-2 border-lime-400 py-1 px-2 text-rose-400 hover:text-green-600 rounded-lg'
					>
						ClickMe
					</button>
				</div>
			</div>
		</div>
	)
}
export default App
