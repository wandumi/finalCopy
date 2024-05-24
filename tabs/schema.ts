
type CheckboxInput = {
    type: 'checkbox';
    label: string;
    default: boolean;
};

type TextInput = {
    type: 'text';
    label: string;
    default: string;
};

type ColorInput = {
    type: 'color';
    label: string;
    default: string; 
};


type Section = {
    name: string;
    settings: (CheckboxInput | TextInput | ColorInput)[];
};


type Block = {

};

export { Section, Block };
