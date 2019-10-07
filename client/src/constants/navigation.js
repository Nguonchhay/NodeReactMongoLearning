import {
    URL_HOME,
    URL_ABOUT_US,
    URL_PAGES,
    URL_CONTACT_US,
    URL_STYLE_GUIDE
} from './url';

export const navigations = [
    {
        'slug': URL_HOME,
        'title': 'Home',
        'order': 0
    },
    {
        'slug': URL_ABOUT_US,
        'title': 'About Us',
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