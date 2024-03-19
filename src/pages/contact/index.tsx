import { useContact } from "./hooks/useContact";

import ContactForm from "../../components/contact/contactForm";
import ContactInfo from "../../components/contact/contactInfo";

const Contact: React.FC = () => {
  const { formData, handleSubmit, handleChange } = useContact();

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-r from-indigo-300">
      <ContactForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ContactInfo />
    </div>
  );
};

export default Contact;
