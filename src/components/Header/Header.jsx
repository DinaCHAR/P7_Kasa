import logo from "../../assets/images/LOGO.svg";
import Nav from "../Nav/Nav";

/**
 * Composant représentant le haut de page du site permettant la navigation
 * Affiche le logo à gauche et les navigations à droite
 */
export default function Header() {
	return (
		<header className="headerWrap">
			<figure className="headerWrap__fig">
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
			</figure>
			<Nav className="nav-header" />
		</header>
	);
}
