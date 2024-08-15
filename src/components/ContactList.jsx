import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import { selectNameFilter } from '../redux/filtersSlice';
import Contact from "./Contact";
import s from './ContactList.module.css';

const ContactList = () => { 
    const contacts = useSelector(selectContacts);
    const searchQuery = useSelector(selectNameFilter);
    
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return (
        <ul className={s.contactList}>
            {filteredContacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </ul>
    );
}

export default ContactList;