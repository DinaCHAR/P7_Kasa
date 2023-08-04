import { Link } from "react-router-dom";
import APPLICATION_CONSTANTS from '../../assets/strings/string';

/**
 * Composant qui permet de représenter une page d'erreur générique
 * @param {Object} props - Props React permettant de définir le code et le message de l'erreur à afficher
 */
export default function ErrorPage(props) {
	return (
		<div className="errorContainer">
			<p className="errorNumber">{props.errorNumber}</p>
			<p className="errorText">{props.errorMessage}</p>
			<Link to="/" className="errorLinkHome">
				{APPLICATION_CONSTANTS.BACK_TO_HOME}
			</Link>
		</div>
	);
}
