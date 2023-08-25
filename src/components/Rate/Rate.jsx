import emptyStar from "../../assets/images/emptyStar.svg";//étoile vide
import fullStar from "../../assets/images/star-rate.svg";//étoile rempli

/**
 * Composant représentant la notation d'un utilisateur, de 0 à 5
 * @param {Object} props - Props React permettant de définir le score du rating
 */
export default function Rate(props) {
	// Pas forcement très utile, on pourrait considérer que le score = 5 si le props.score > 5
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate-comp">
			{/*On affiche des étoiles pleines tant que notre currentScore n'est pas égale au props.score*/}
			{stars.map((currentScore) =>
				props.score >= currentScore ? (
					<img
						key={currentScore.toString()}
						className="star"
						src={fullStar}
						alt="rating star"
					/>
				) : ( 
					<img
						key={currentScore.toString()}
						className="star"
						src={emptyStar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}
