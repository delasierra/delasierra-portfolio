import {ContactSectionData} from '../components/contact-form/contact-form.model';

export interface AppData {
    about: AboutSectionData;
}

export interface AboutSectionData {
    title: string;
    bio: Array<string>;
    contact: ContactSectionData;
}
