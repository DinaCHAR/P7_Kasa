/**
 * Composant permettant de représenter une carte d'annonce
 * @param {Object} props - Props React permettant de définir quel image de fond et quel titre utiliser pour l'annonce
 */
export default function Card(props) { //les cards de locations récupèrent les couvertures et titres en props depuis Home
	return (
		<article className="card-logement">
			<img src={props.cover} alt="location" />
			<div className="card-logement__layer">
				<p className="card-logement__title">{props.title}</p>
			</div>
		</article>
	);
}
