import { Link } from "react-router-dom";// permet à l'utilisateur de naviguer vers une autre page "retour à la page d'accueil"
import APPLICATION_CONSTANTS from '../../assets/strings/string';

/**
 * Composant qui permet de représenter une page d'erreur générique
 * @param {Object} props - Props React permettant de définir le code et le message de l'erreur à afficher
 * erreur 404
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
