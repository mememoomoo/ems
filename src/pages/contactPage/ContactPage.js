import ContactMenu from "../../components/menus/contactMenu/ContactMenu";
import MicCrunch from "../../components/posters/micCrunch/micCrunch";
import AboutCopy from "../aboutPage/assets/aboutCopy";

let p = "Contact";
let b = <AboutCopy />;

function ContactPage() {
  return (
    <div className="contact-page-wrapper">
      <div class="navigation-wrapper">
        <ContactMenu />
      </div>
      <div className="poster-wrapper">
        <MicCrunch pageName={p} bodyContent={b} />
      </div>
    </div>
  );
}

export default ContactPage;
