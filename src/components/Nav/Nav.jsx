import { Link } from "react-router-dom";

/**
 * "Sous" composant du Header, permetttant la navigation vers la page d'accueil ou la page "About"
 */
export default function Nav() {
	return (
		<nav className="nav-header">
			<Link to="/" className="nav-header_link-home">
				Accueil
			</Link>
			<Link to="/about" className="nav-header_link-about">
				A Propos
			</Link>
		</nav>
	);
}
