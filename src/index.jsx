/*React DOM met à jour le DOM afin qu’il corresponde aux éléments React. */
import ReactDOM from "react-dom/client";
/* BrowserRouter stocke l'emplacement actuel dans la barre d'adresse du navigateur à l'aide d'URL */
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./style/main.scss";

/*Passe en premier l'element createRoot permet de créer une racine pour afficher les composants React à l'intérieur d'un nœud DOM du navigateur. 
* On createRoot pour créer une racine React afin d'afficher le contenu à l'intérieur d'un élément DOM du navigateur.
* Ensuite on passe l'élement root.render pour afficher un composant React à l'intérieur de cette racine
* React affichera <App /> dans la racine, et prendra en charge la gestion du DOM à l'intérieur de celle-ci.
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
