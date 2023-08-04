import ErrorPage from "../../components/ErrorPage/ErrorPage";
import APPLICATION_CONSTANTS from '../../assets/strings/string';

/**
 * Page permettant d'afficher l'erreur par défaut (la 404)
 * Utilise le composant ErrorPage 
 */
export default function Error() {
	return (
		<>
			<ErrorPage errorNumber={APPLICATION_CONSTANTS.DEFAULT_ERROR_NUMBER} errorMessage={APPLICATION_CONSTANTS.DEFAULT_ERROR_MESSAGE}/>
		</>
	);
}
