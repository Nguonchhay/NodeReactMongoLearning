import {
    URL_HOME,
    URL_ABOUT_US,
    URL_PAGES,
    URL_CONTACT_US,
    URL_STYLE_GUIDE
} from './url'

import { LANG_EN, LANG_KM } from './general'

export const navigations = [
    {
        'slug': URL_HOME,
        'title': 'home',
        'order': 0
    },
    {
        'slug': URL_ABOUT_US,
        'title': 'about_us',
        'order': 10
    },
    {
        'slug': URL_PAGES,
        'title': 'Pages',
        'children': [
            {
                'slug': URL_CONTACT_US,
                'title': 'Contact Us',
                'order': 0
            },
            {
                'slug': URL_STYLE_GUIDE,
                'title': 'Style Guide',
                'order': 0
            }
        ]
    }
];

export const languages = [
    {
        'key': LANG_EN,
        'value': 'English'
    },
    {
        'key': LANG_KM,
        'value': 'Khmer'
    }
]