import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import APPLICATION_CONSTANTS from '../../assets/strings/string';

/**
 * Page représentant la section "A propos" du site
 * Utilise une bannière
 * Utilise autant de collapse que d'entrées dans le tableau ABOUT_INFORMATIONS des constantes de l'application
 */
export default function About() {
	return (
		<>
			<Banner container={"about-container wh-msk"} />
			{APPLICATION_CONSTANTS.ABOUT_INFORMATIONS.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}
