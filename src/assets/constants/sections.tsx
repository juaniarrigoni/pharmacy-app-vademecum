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
        title: 'Fórmulas con Receta',
        subtitle: 'Acceso rápido para profesionales médicos',
        categories: [
            'Fórmulas Específicas',
            'Fórmulas Funcionales',
            'Corporales',
            'Vitaminas y Minerales',
            'Limpieza Facial',
            'Faciales / Hidratantes / Antiage',
        ],
    },
    {
        id: 'suplementos',
        title: 'Suplementos',
        subtitle: 'Colágenos, magnesios, proteicos y más',
        categories: [
            'Colágenos',
            'Proteicos',
            'Magnesios',
            'Suplementos',
        ],
    },
    {
        id: 'nutricion',
        title: 'Nutrición',
        subtitle: 'Cuidado integral',
        categories: [
            'Protección Solar',
            'Repelantes',
            'SmartFood',
        ],
    },
];
