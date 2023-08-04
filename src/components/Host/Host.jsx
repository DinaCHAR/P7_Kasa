/**
 * Composant représentant le profil du créateur d'une annonce
 * @param {Object} props - Props React permettant de définir le nom/prénom et l'image du créateur
 */
export default function Host(props) {
	return (
		<aside className="host-comp">
			<div className="host-name">{props.hostName}</div>
			<div className="hostPicture">
				<img src={props.hostPic} alt={props.id} />
			</div>
		</aside>
	);
}
