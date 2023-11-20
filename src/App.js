import "./App.css";
import BecomeADasher from "./BecomeADasher.js";
import BecomeAPartner from "./BecomeAPartner.js";
import ConvenienceStores from "./ConvenienceStores.js";
import DashPass from "./DashPass.js";
import FindRestaurant from "./FindRestaurant.js";
import Footer from "./Footer.js";
import Gifting from "./Gifting.js";
import Groceries from "./Groceries.js";
import Hero from "./Hero.js";
import Options from "./Options.js";
import Navbar from "./Navbar.js";
function App() {
	return (
		<div className="App">
			<div className="container">
				<Navbar />
				<Hero />
			</div>
			<Options />
			<FindRestaurant />
			<DashPass />
			<Groceries />
			<ConvenienceStores />
			<Gifting />
			<BecomeADasher />
			<BecomeAPartner />
			<Footer />
		</div>
	);
}

export default App;
