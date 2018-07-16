/**
 * Created by csierra on 4/6/18.
 */
export interface ContactSectionData {
    title: string;
    introText: string;
    email: {
        placeholder: string;
        errors: {
            required: string;
            invalid: string;
        }
    };
    message: {
        placeholder: string;
        errors: {
            required: string;
            minLength: string;
        }
    };
    name: {
        placeholder: string;
        errors: {
            required: string;
            minLength: string;
        }
    };
    buttonText: string;
}

export interface ContactUserInputs {
    message: string;
    name: string;
    email: string;
}
