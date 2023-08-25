import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag";
import axios from "axios";//librairie qui permet de faire des requêtes

/**
 * Page représentant les détails d'une annonce
 * Permet d'afficher les images d'une annonce via un Carrousel (flèche)
 * Permet d'afficher les mots clé d'une annonce à l'aide du composant Tag
 * Permet d'affcher les information de l'hôte avec le composant Host
 * Permet d'afficher la note de l'hôte à l'aide du composant Rate
 */
export default function FicheLogement() {
	const params = useParams();
	const navigate = useNavigate();

	//On prépare la variable qui va contenir les informations de l'appartement à afficher
	const [pickedAppart, setPickedAppart] = useState();

	//Hook qui s'éxecute à chaque nouvel affichage du composant
	useEffect(() => {
		const getData = async () => {
			//On mock la requête de la futur API avec le fichier logements pour simuler l'appel serveur
			const res = await axios.get("/logements.json");

			//On cherche l'appartement correspondant à l'identifiant disponible dans l'URL
			const picked = res.data.find(({ id }) => id === params.id);

			//On défini l'appartement à afficher par celui trouvé à l'aide de l'id de l'URL
			res.data.map(() => setPickedAppart(picked));
			
			//On redirige l'utilisateur vers la page d'erreur si l'id de l'URL ne correspond à aucun appartement
			if (picked === undefined) {
				navigate("/404", { state: { message: "Can't get data" } }); 
			}
		};
		getData();
	}, []); // array vide du useEffect pour ne lancer qu'une seule fois
	
	//On stock les détails de l'annonce dans des variables indépendantes
	const slidePics = pickedAppart && pickedAppart.pictures;
	const tags = pickedAppart && pickedAppart.tags;
	const equipments = pickedAppart && pickedAppart.equipments;
	const equip = pickedAppart &&
		equipments.map((item, index) => (
			<li key={index} className="equipList">
				{item}
			</li>
		));
	return (
		pickedAppart && (
			<div key={params.id} className="fiche-container">
				<Carrousel slides={slidePics} />
				<section className="hostInfo-container">
					<div className="title-tags-container">
						<div className="title-container redFont">
							<h1>{pickedAppart.title}</h1>
							<h3>{pickedAppart.location}</h3>
						</div>
						<div className="tags-container">
							{tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
						</div>
					</div>
					<div className="rate-host-container">
						<div className="host-container redFont">
							<Host
								hostName={pickedAppart.host.name}
								hostPic={pickedAppart.host.picture}
							/>
						</div>
						<div className="rate-container">
							<Rate score={pickedAppart.rating} />
						</div>
					</div>
				</section>
				<div className="collapse-fiche-container">
					<Collapse
						aboutTitle="Description"
						aboutText={pickedAppart.description}
					/>
					<Collapse aboutTitle="Équipements" aboutText={equip} />
				</div>
			</div>
		)
	);
}
