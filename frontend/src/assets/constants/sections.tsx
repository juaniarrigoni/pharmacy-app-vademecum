// Configuration for the 3 main product sections
export type SectionType = 'formulas' | 'suplementos' | 'nutricion';

export interface SectionConfig {
    id: SectionType;
    title: string;
    subtitle: string;
    categories?: Array<string>; // si está vacío, se cargan todas las categorías del spreadsheet
}

export const SECTIONS: Array<SectionConfig> = [
    {
        id: 'formulas',
        title: 'Fórmulas',
        subtitle: 'Todas las formulas son susceptibles a las modificaciones/agregados que el profesional médico considere necesarios.',
        // sin categories → carga todas automáticamente desde el índice
    }
    // {
    //     id: 'suplementos',
    //     title: 'Suplementos',
    //     subtitle: 'Colágenos, magnesios, proteicos y más',
    //     categories: [
    //         'Suplementos POWERFARM',
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
