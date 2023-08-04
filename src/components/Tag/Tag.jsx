/**
 * Composant permettant de représenter un mot-clé d'une annonce
 * @param {Object} props - Props React permettant de définir la valeur du mot-clé à afficher
 * @returns 
 */
export default function Tag(props) {
	return (
		<div className="tagContainer">
			<span className="tagButton">{props.tag}</span>
		</div>
	);
}
