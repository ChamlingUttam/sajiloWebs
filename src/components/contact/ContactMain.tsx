import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import BookDemoSection from "../common/BookDemoSection";

const ContactMain = () => {
  return (
    <main className="w-full">
      <div className="">
      <ContactHeader />
      <ContactForm />
      <BookDemoSection/>
      </div>
    </main>
  );
};

export default ContactMain;
