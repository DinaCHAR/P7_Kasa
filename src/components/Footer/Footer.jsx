import logo from "../../assets/images/logo-footer.svg";
import APPLICATION_CONSTANTS from '../../assets/strings/string';

/**
 * Composant representant le bas de page du site et affiche uniquement les mentions légales
 */
export default function Footer() {
	return (
		<footer className="foot-container">
			<img src={logo} alt="logo de kasa" />
			<p className="foot-container__text">{APPLICATION_CONSTANTS.LEGALS_MENTION}</p>
		</footer>
	);
}
