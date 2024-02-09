import { IoIosMail } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

// Encode messages with emojis
const emailSubject = encodeURIComponent("Discuss Your Vision");
const messengerMessage = encodeURIComponent("Hey there! 👋 Thanks for reaching out. I'm Shwetank Morey, a full-stack developer. How can I assist you today?");
const whatsappMessage = encodeURIComponent("Hello! 👋 Thanks for getting in touch. I'm Shwetank Morey, a full-stack developer. How can I help you with your project?");

const data = [
  {
    id: 1,
    icon: <IoIosMail />,
    // Open new email window with subject
    link: `mailto:spmorey87@gmail.com?subject=${emailSubject}`,
  },
  {
    id: 2,
    icon: <FaFacebookMessenger />,
    // Open new Messenger message window
    link: `https://www.facebook.com/messages/t/100001121937194?entry.1=${messengerMessage}`,
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    // Open new WhatsApp message window
    link: `https://wa.me/919421317759?text=${whatsappMessage}`,
  },
];

export default data;

