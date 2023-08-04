/**
 * Composant qui permet de representer une banièrre affichable avec une image de fond et du texte
 * @param {Object} props - Props React permettant de définir quel fond CSS choisir et le texte à afficher 
 */
export default function Banner(props) {
	return (
		<div className={props.container}>
			<div>
				<div className="banner-text">{props.title}</div>
			</div>
		</div>
	);
}
