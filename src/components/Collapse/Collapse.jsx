import { useState, useRef, useEffect } from "react"; //import des hooks de base react
import Chevron from "../../assets/images/vectorBas.svg";//recup les icones

/**
 * Composant qui permet de représenter une liste déroulante
 * @param {Object} props - Props React permettant de définir le titre et le contenus d'une liste déroulante
 */
export default function Collapse(props) {
	
	// On définis l'état initial de la liste à false (refermée)
	//useState pour crée l'état booléen
	const [toggle, setToggle] = useState(false); 
	
	//On prévoit un état pour définir la hauteur de la liste déroulante
	const [heightEl, setHeightEl] = useState();

	//On défini la fonction toggleState qui modifie la valeur toggle au clic (ouvert/fermé)
	const toggleState = () => {
		setToggle(!toggle);
	};

	//On récupère et on sauvegarde la valeur de hauteur de la liste dépliée
	const refHeight = useRef();

	//Hook qui s'éxecute à chaque nouvel affichage,définit la hauteur de la liste dépliée lors de sa première ouverture et la conserve dans refHeight
	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`); 
	}, []);

	return (
		// Affiche la liste fermée par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
		<div className={`collapse ${props.aboutStyle}`}>
			<div onClick={toggleState} className="collapse__visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={Chevron}
					alt="chevron"
				/>
			</div>
			<div
				ref={refHeight}
				className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	);
}
