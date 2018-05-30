/**
 * Created by csierra on 30/5/18.
 */
export class WorkDataModel {
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

export class WorkHomeScreenData {
}
export class WorkTextScreenData {
    title: string;
    description: string;
    position: string;
    background: string;
}
export class WorkImgScreenData {
    images: Array<string>;
    position: string;
    background: string;
    fx: string;
}
export class WorkTextImgScreenData {
    text: WorkTextScreenData;
    images: WorkImgScreenData;
    position: string;
    background: string;
    layout: string;

}
export class WorkImgSliderScreenData {
    images: Array<string>;
    background: string;
}
export class WorkVideoScreenData {
    video: string;
    background: string;
}
