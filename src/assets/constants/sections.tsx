// Configuration for the 3 main product sections
export type SectionType = 'formulas' | 'suplementos' | 'nutricion';

export interface SectionConfig {
    id: SectionType;
    title: string;
    subtitle: string;
    categories: Array<string>;
}

export const SECTIONS: Array<SectionConfig> = [
    {
        id: 'formulas',
        title: 'Fórmulas',
        subtitle: 'Todas las formulas son susceptibles a las modificaciones/agregados que el profesional médico considere necesarios.',
        categories: [
            'Fórmulas Específicas',
            'Fórmulas Funcionales',
            'Corporales',
            'Vitaminas y Minerales',
            'Limpieza Facial',
            'Faciales / Hidratantes / Antiage',
        ],
    }
    // {
    //     id: 'suplementos',
    //     title: 'Suplementos',
    //     subtitle: 'Colágenos, magnesios, proteicos y más',
    //     categories: [
    //         'Colágenos',
    //         'Proteicos',
    //         'Magnesios',
    //         'Suplementos',
    //     ],
    // },
    // {
    //     id: 'nutricion',
    //     title: 'Nutrición',
    //     subtitle: 'Come bien, estés donde estés',
    //     categories: [
    //         'SmartFood',
    //     ],
    // },
];
