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
    general: {
        mainColor: number,
        mainImg: string,
        logo: string,
        title: string,
        description: string,
        hastags: Array<string>
    };
    screens: Array<object>;
}

// export interface WorkHomeScreenData {
// }

export interface WorkOverviewScreenData {
    description: string;
    role: string;
    credits: string;
    platforms: string;
}

export interface WorkTextScreenData {
    title: string;
    description: string;
    position: string;
    background: string;
}
export interface WorkImgScreenData {
    images: Array<string>;
    position: string;
    background: string;
    fx: string;
}
export interface WorkTextImgScreenData {
    text: WorkTextScreenData;
    images: WorkImgScreenData;
    position: string;
    background: string;
    layout: string;

}
export interface WorkSliderScreenData {
    images: Array<string>;
    background: string;
}
export interface WorkVideoScreenData {
    video: string;
    background: string;
}
