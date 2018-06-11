/**
 * Created by csierra on 4/6/18.
 */
export interface SocialMediaModel {
    introText: string;
    links: SocialMediaLinkModel;
}

export interface SocialMediaLinkModel {
    logo: string;
    link: string;
}
