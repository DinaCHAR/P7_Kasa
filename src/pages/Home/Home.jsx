import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import APPLICATION_CONSTANTS from '../../assets/strings/string';

/**
 * Fichier représentant la page d'acceuil du site
 * Affiche, en plus des composants communs Header et Footer une liste de Card
 * Chaque Card représente une annonce
 */
export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		//On mock la requête de la futur API avec le fichier logements pour simuler l'appel serveur
		axios.get("/logements.json").then((res) => setData(res.data)); 
	}, []);

	return (
		<>
			<Banner title={APPLICATION_CONSTANTS.HOME_TITLE} container={"banner-container"}/>
			<div className="cards-container">
				{/* Pour chaque annonce récupérée de la requête */}
				{data.map((appart, id) => (
					//On ajoute un composant Card pour afficher l'annonce et permettre la redirection vers la FicheLogement
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
