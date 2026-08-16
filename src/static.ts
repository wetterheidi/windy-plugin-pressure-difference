import { CrossSection, EndPoint, Models } from 'src/types';


export const crossSections: CrossSection[] = [
    {
        start: 'Genf', end: 'Zürich', windName: 'Bise',
        models: ['ICON-D2', 'AROME', 'ICON', 'ECMWF'],
        topText: 'Westerly winds ⮕',
        bottomText: 'Bise ⬅',
        remark: 'Bise: Pressure difference of at least -4 hPa and northeasterly winds at 700 hPa'
    },
    {
        start: 'Genf', end: 'Albertville', windName: 'Bise',
        models: ['AROME', 'ALADIN', 'ICON', 'ECMWF'],
        topText: 'Bise ⬇',
        bottomText: 'Southerly winds ⬆',
        remark: 'Bise: Pressure difference of at least +2 hPa'
    },
    {
        start: 'Lugano', end: 'Zürich', windName: 'Foehn',
        models: ['ICON-D2', 'AROME', 'ICON', 'ECMWF'],
        topText: 'South foehn ⬆',
        bottomText: 'North foehn ⬇',
        remark: 'Foehn: Pressure difference of at least +/-4 hPa and southerly/northerly winds of at least 20 kt at 700 hPa'
    },
    {
        start: 'Zürich', end: 'Stuttgart', windName: 'Foehn',
        models: ['ICON-D2', 'AROME', 'ICON', 'ECMWF'],
        topText: 'South foehn ⬆',
        bottomText: 'North foehn ⬇',
        remark: 'Foehn: Pressure difference of at least +/-4 hPa and southerly/northerly winds of at least 20 kt at 700 hPa'
    },
    {
        start: 'Bozen', end: 'Innsbruck', windName: 'Foehn',
        models: ['ICON-D2', 'AROME', 'ICON', 'ECMWF'],
        topText: 'South foehn ⬆',
        bottomText: 'North foehn ⬇',
        remark: 'Foehn: Pressure difference of at least +/-4 hPa and southerly/northerly winds of at least 20 kt at 700 hPa'
    },
    {
        start: 'Innsbruck', end: 'München', windName: 'Foehn',
        models: ['ICON-D2', 'AROME', 'ICON', 'ECMWF'],
        topText: 'South foehn ⬆',
        bottomText: 'North foehn ⬇',
        remark: 'Foehn: Pressure difference of at least +/-4 hPa and southerly/northerly winds of at least 20 kt at 700 hPa'
    },
    {
        start: 'Klagenfurt', end: 'Salzburg', windName: 'Foehn',
        models: ['ICON-D2', 'ICON', 'ECMWF'],
        topText: 'South foehn ⬆',
        bottomText: 'North foehn ⬇',
        remark: 'Foehn: Pressure difference of at least +/-4 hPa and southerly/northerly winds of at least 20 kt at 700 hPa'
    },
    {
        start: 'Graz', end: 'Linz', windName: 'Foehn',
        models: ['ICON-D2', 'ICON', 'ECMWF'],
        topText: 'South foehn ⬆',
        bottomText: 'North foehn ⬇',
        remark: 'Foehn: Pressure difference of at least +/-4 hPa and southerly/northerly winds of at least 20 kt at 700 hPa'
    },
    {
        start: 'Brescia', end: 'Bozen', windName: 'Ora',
        models: ['ICON-D2', 'AROME', 'ICON', 'ECMWF'],
        topText: 'Ora ⬆',
        bottomText: 'Peler ⬇',
        remark: 'Pressure difference of at least +/-2 hPa'
    },
    {
        start: 'Triest', end: 'Maribor', windName: 'Bora',
        models: ['ICON-D2', 'ICON', 'ECMWF'],
        topText: '',
        bottomText: 'Bora ⬅',
        remark: 'Bora: easterly winds and pressure differences of -4 hPa, Stormy Bora: pressure difference of -8 hPa'
    },
    {
        start: 'Marseille', end: 'Lyon', windName: 'Mistral',
        models: ['AROME', 'ALADIN', 'ICON', 'ECMWF'],
        topText: '',
        bottomText: 'Mistral ⬇',
        remark: 'Mistral: northerly winds and pressure difference of -5 hPa'
    },
];

export const endPoints: EndPoint = {
    Innsbruck: { lat: 47.260765, lon: 11.34686 },
    München: { lat: 48.163363, lon: 11.54339 },
    Zürich: { lat: 47.45734, lon: 8.554624 },
    Lugano: { lat: 46.00314, lon: 8.909517 },
    Genf: { lat: 46.241142, lon: 6.116257 },
    Albertville: { lat: 45.674757, lon: 6.389153 },
    Stuttgart: { lat: 48.686346, lon: 9.20362 },
    Bozen: { lat: 46.460921, lon: 11.326727 },
    Salzburg: { lat: 47.792859, lon: 13.003159 },
    Klagenfurt: { lat: 46.646212, lon: 14.322369 },
    Linz: { lat: 48.235696, lon: 14.190716 },
    Graz: { lat: 46.992977, lon: 15.441671 },
    Brescia: { lat: 45.436234, lon: 10.268309 },
    Maribor: { lat: 46.479444, lon: 15.684444 },
    Triest: { lat: 45.635833, lon: 13.835 },
    Marseille: { lat: 43.438525, lon: 5.214430 },
    Lyon: { lat: 45.723509, lon: 5.087789 },
};

export const nwm: Models = {
    'ICON-D2': 'iconD2',
    'ECMWF': 'ecmwf',
    'ICON': 'icon',
    'ICON-EU': 'iconEu',
    'ALADIN': 'czeAladin',
    'AROME': 'aromeFrance',
};

