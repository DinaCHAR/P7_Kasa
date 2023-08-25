/*useState est un crochet (hook) React qui vous permet d'ajouter un état à un composant fonctionnel */
import { useState } from "react";
import left from "../../assets/images/vector-left.svg";
import right from "../../assets/images/vector-right.svg";

/**
 * Composant permettant d'afficher une succession d'image, navigeable à gauche ou à droite
 * @param {Object} props - Props React permettant de définir la liste des images à afficher dans le Carrousel
 * @returns 
 */
export default function Carrousel(props) {

	//On indique l'indice initial de notre Carrousel (0 comme pour les tableaux)
	const [current, setCurrent] = useState(0);

	//On sauvegarde dans une constante le nombre d'images de notre Carrousel
	const length = props.slides.length;

	//On passe à l'image suivante ou alors on repart au premier slide quand on arrive au dernier
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); 
	};

	// On passe à l'image précèdente ou on repart à la dernière quand on est au premier
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); 
	};

	return (
		<section id="carrousel-container">
			{/* On autorise l'utilisateur à faire précèdent si plus de 1 image*/}
			{length > 1 && (
				<img
					src={left}
					alt="previous"
					onClick={prevSlide}
					className="leftArrow"
				/>
			)}
			{/* On autorise l'utilisateur à faire suivant si plus de 1 image*/}
			{length > 1 && (
				<img
					src={right}
					alt="next"
					onClick={nextSlide}
					className="rightArrow"
				/>
			)}

			{props.slides.map((currentSlide, index) => (
				<div key={index} className={current === index ? "slider bl-msk wh-msk active-anim": "slider bl-msk wh-msk"}>
					{index === current && <img src={currentSlide} alt="Annonce" />}
					{index === current && (<span className="slider__number">{current + 1}/{length}</span>)}
				</div>
			))}
		</section>
	);
}
