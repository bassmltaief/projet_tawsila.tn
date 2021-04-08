import { Link } from "react-router-dom";
import "./about.css"
const About = () => {
  return (
    <div className ="aboute">
      <h1> Vous trouvez ici la maniere d'utilisation de notre site</h1>
      <div className="info">
        <h3>1. PUBLIEZ VOTRE TRAJET</h3>
        <br/>
        <p>
          Indiquez la date et l'horaire de votre trajet, l'itinéraire et le prix
          par passager. Choisissez entre être contacter par Facebook, Email ou
          numéro de téléphone, en choisissant le téléphone comme moyen de
          contact, vous pouvez mentionner dans ce cas n'importe quel numéro, par
          exemple vous pouvez publier un trajet pour un ami et mettre son
          téléphone, en revanche les moyens de contact Facebook et email sont
          liés au compte utilisateur connecté .
        </p>
      </div>
      <hr/>
      <div className="info">
        <h3>2. PARTAGEZ VOTRE TRAJET</h3>
        <br/>
        <p>
          Partagez votre trajet sur Facebook, Twitter, Google +, SMS et par
          email.
        </p>
      </div>
      <hr/>
      <div className="info">
        <h3>3. PRISES DE CONTACTS </h3>
        <br/>
        <p>
          Lorsque vous confirmez une réservation avec un passager, vous devez
          décrémenter le nombre de place de votre trajet via la barre de menu ou
          depuis l'interface mes trajets publiés.
        </p>
      </div>
      <hr/>
      <div className="info">
        <h3>4. MODIFIER LE NOMBRE DES SIÈGES</h3>
        <br/>
        <p>
          Lorsque vous confirmez une réservation avec un passager, vous devez
          décrémenter le nombre de place de votre trajet via la barre de menu ou
          depuis l'interface mes trajets publiés.
        </p>
      </div>
      <hr/>
      <div className="info">
        <h3>5. VOYAGEZ</h3>
        <br/>
        <p>
          Rendez-vous au lieu de départ convenu avec les voyageurs séléctionnés.
        </p>
      </div>
      <hr/>
      <div className="info">
        <h3>6. RECEVEZ VOTRE ARGENT</h3>
        <br/>
        <p>
          A la fin du trajet, vous serez payé(e) par les passagers, et en cas
          des problèmes vous pouvez nous contacter sur : contact@tawsila.tn.
        </p>
      </div>
      <Link to="/FQA" className="fqa">
                FQA
              </Link>
    
    </div>
  );
};
export default About;
