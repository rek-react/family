import "./Contacts.scss";
import ContactsInfo from "./components/Info";
import GoogleMap from "../UI/GoogleMap";

const Contacts = () => {
  return (
    <div className="page__contacts contacts">
      <div className="contasts__container container-less">
        <ContactsInfo />
        <GoogleMap />
      </div>
    </div>
  );
};
export default Contacts;
