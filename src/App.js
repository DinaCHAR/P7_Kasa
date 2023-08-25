/*App.js nous permet avec l'instruction "import" d'importer des liens qui sont exportés par un autre module  */
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error.jsx";

/*peremettre de définir les itinéraires de navigation de l'application, qui permet aux utilisateurs 
de se déplacer entre les pages et les composants sans recharger la page entière */

/**
 * Nous enveloppons d'abord notre contenu avec <Routes>.
 * Le premier <Route> a un chemin de / et restitue le composant Layout.
 * Les <Route> imbriqués héritent et s'ajoutent à la route parent. Ainsi, le chemin des blogs est combiné avec le parent et devient /about.
 * Définir le chemin sur * agira comme un fourre-tout pour toutes les URL non définies. C'est idéal pour une page d'erreur 404.
 */
function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/logement/:id" element={<FicheLogement />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
