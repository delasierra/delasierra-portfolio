/**
 * Created by csierra on 30/5/18.
 */
const WORK_HOME = 'work-home';
const WORK_OVERVIEW = 'work-overview';
const WORK_TEXT = 'work-text';
const WORK_IMAGE = 'work-image';
const WORK_TEXT_IMAGE = 'work-text-image';
const WORK_SLIDER = 'work-slider';
const WORK_VIDEO = 'work-video';

export interface WorkDataModel {
    id: number;
    general: WorkGeneralData;
    screens: Array<object>;
}

export interface WorkGeneralData {
    mainColor: number;
    mainImg: string;
    logo: string;
    title: string;
    subtitle: string;
    description: string;
    hastags: Array<string>;
}

export interface WorkOverviewData {
    description: string;
    role: string;
    credits: string;
    platforms: string;
}

export interface WorkTextData {
    title: string;
    description: string;
    position: string;
    background: string;
}

export interface WorkImgData {
    images: Array<string>;
    position: string;
    background: string;
    fx: string;
}

export interface WorkImageTextData {
    text: any;
    images: any;
    position: string;
    background: string;
    layout: string;

}

export interface WorkSliderData {
    images: Array<string>;
    background: string;
}

export interface WorkVideoData {
    video: string;
    background: string;
}
