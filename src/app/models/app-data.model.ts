import { ContactSectionDataModel } from '../components/contact-form/contact-form.model';

export interface AppData {
  home: HomeSectionData;
  about: AboutSectionData;
}

export interface HomeSectionData {
  welcome: Array<string>;
}

export interface AboutSectionData {
  title: string;
  bio: Array<string>;
  contact: ContactSectionDataModel;
}
