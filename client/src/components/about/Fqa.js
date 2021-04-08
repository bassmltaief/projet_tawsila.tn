import { Accordion, Card, Button } from "react-bootstrap";
import "./Fqa.css"
const FQA = () => {
  return (
      
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0" className="question">
            Comment s’inscrire ?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>
              - L'inscrire sur tawsila.tn et profiter pleinement du covoiturage,
              une possibilitée s’offre à vous : L’inscription en 30 secondes
              avec votre adresse email{" "}
            </p>
            <p>
              - En vous inscrivant avec votre adresse email habituelle, vous
              suivez les étapes demandées dans le formulaire en remplissant les
              informations demandées : vous indiquez simplement votre nom et
              prénom, date de naissance, vous choisissez un mot de passe et…
              c’est tout !{" "}
            </p>
            <p>
              {" "}
              - Vous gardez le choix de publier vos informations, ou au
              contraire de les masquer.{" "}
            </p>
            <p>
              - Une fois l’inscription effectuée, nous vous demanderons de
              compléter votre profil pour augmenter vos chances de trouver des
              colocataires ou des passagers Dans tous les cas, tawsila.tn
              s’engage à ne jamais communiquer vos informations personnelles à
              des tiers et ne publie aucune donnée nominative ou confidentielle
              sur le site.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1" className="question">
            L’inscription est-elle gratuite et obligatoire ?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <p> L’inscription sur tawsila.tn est totalement gratuite !</p>
            <p>
              {" "}
              Elle est obligatoire si vous souhaitez profiter de la mise en
              relation entre conducteurs et passagers ou entre colocataires et
              faire des importantes économies sur vos futurs trajets ou
              colocations.
            </p>
            <p>
              {" "}
              Être membre de tawsila.tn vous permet de proposer vos places
              libres et de voyager aux meilleurs prix vers toute la Tunisie Être
              membre de tawsila.tn vous permet de proposer vos colocations et
              trouver le bon binôme pour partager votre loyer et gagner de
              l'argent.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2" className="question">
            Peut-on publier un trajet pour quelqu'un d'autre ?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <p>
              Chaque personne utilisant les services de partagi.tn doit se
              disposer de son propre profil !
            </p>
            <p>
              
              C'est important pour la confiance et la bonne organisation des
              covoiturages et colocations dans leur ensemble.
            </p>
            <p>
              
              Lorsque vous publiez une annnonce vous allez choisir par quel
              moyen vous aimeriez être contacté, si vous choisissez email ou
              facebook, les membres utiliseront les infos de votre compte pour
              établir le contact avec vous.
            </p>
            <p>
              
              Mais si vous voulez publier une annonce pour quelqu'un d'autre,
              vous devez choisir le moyen de contact par Numéro de téléphone, et
              dans ce champ vous pouvez mentionner le téléphone de votre ami par
              exemple, du coup l'annonce sera visible et les membres appleront
              directement votre ami pour établir le contact.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3" className="question">
            Pourquoi je dois compléter mon profil ?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            En complétant votre profil : nom de famille, prénom, âge, Job ,
            image de profil etc.. vous gagnerez la confiance des utilisateurs et
            vous aurez plus de chance de trouver le bon passager ou colocataire
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="4" className="question">
            Comment publier une annonce ?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            <p>
              Pour publier une annonce vous devez être déja inscrit(e) sur le
              site.
            </p>
            <p>
              Une fois connecté(e), vous pouvez publier une annnonce de
              colocation ou de covoiturage par des simples cliques. Une annonce
              compléte, c'est une publication qui a le maximum d'informations,
              donc on vous invite à mettre les photos, et compléter le max des
              détails de notre formulaire. Une fois l'annonce est publiée, elle
              sera traitée par nos administrateurs pour la valider dans les plus
              courtes délais.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="5" className="question">
            Puis-je supprimer mon compte ?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
     <p> Vous pouvez suspendre votre compte tawsila.tn en 3 étapes:</p> <p>1-
            Connectez-vous</p><p> 2- Allez sur mon compte</p><p> 3- Désactiver le compte.</p><p> Une
            fois votre compte est désactivé, toutes vos annonces seront
            désactivées et invisibles sur la liste publique du service.</p><p> En se
            reconnectant avec vos coordonnées de connexion, vous re-activerez le
            compte à nouveau ainsi toutes vos offres. </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="6" className="question">
          Comment je peux contacter l'annonceur ?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="6">
          <Card.Body><p>Si vous êtes interessé(e) par une offre de colocation ou un trajet, il suffit de l'ouvrir en détails, pour pouvoir contacter l'annonceur.

          En cliquant sur le bouton "Contacter l'annonceur", 3 moyens de contact peuvent être utilisés :
          </p><p>
           
          
          1- Par Facebook : en utilisant cette méthode, vous allez être rédirigé(e) vers le profil Facebook de l'annonceur.
          </p><p>
          2- Par Email : Vous aurez l'adresse email de l'annonceur.
          </p><p>
          3- Par téléphone : vous aurez le numéro de téléphone de l'annonceur.
          </p><p>
           
          
          Un annonceur peut définir 1 ou 3 moyens de contact en même temps.</p></Card.Body>
        </Accordion.Collapse>
      </Card>
      
        
    </Accordion>
    
  );
};
export default FQA;
