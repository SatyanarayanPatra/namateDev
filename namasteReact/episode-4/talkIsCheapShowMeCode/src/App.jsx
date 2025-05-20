import './App.css';

/**
 * * Header
 * ? / Logo
 * ? / Nav Items
 * * Body
 * ? / Search
 * ? / RestaurantContainer
 * ! / * Restaurant Card
 * * Footer
 * ? / Copyright
 * ? / Social Media
 * ? / Address
 * ? / Contact Info
 */

const Header = () => {
	return (
		<div className='header'>
			<div className='logo-container'>
				<img
					className='logo'
					src='https://static.vecteezy.com/system/resources/previews/047/171/152/non_2x/logo-design-for-restaurant-and-food-company-vector.jpg'
					alt='company logo'
				/>
			</div>
			<div className='nav-items'>
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

function App() {
	return (
		<div className='app'>
			<Header />
		</div>
	);
}

export default App;
