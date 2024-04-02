import { faClone, faEllipsisVertical, faHandPointDown, faIdCard, faInputText, faParagraph, faSection, faSidebarFlip, faSquareChevronDown, faTable, faToggleOn } from "@fortawesome/pro-regular-svg-icons";

import setupI18n from "@translation/setupI18n";
import { t } from "@utils/customTranslation";

setupI18n()

export const navbarItems = [
    {
        path: '/dropdown',
        icon: faEllipsisVertical,
        text: t('dropdown'),
    },
    {
        path: '/input',
        icon: faInputText,
        text: t('input'),
    },
    {
        path: '/button',
        icon: faHandPointDown,
        text: t('button'),
    },
    {
        path: '/card',
        icon: faIdCard,
        text: t('card'),
    },
    {
        path: '/drawer',
        icon: faSidebarFlip,
        text: t('drawer'),
    },
    {
        path: '/section',
        icon: faSection,
        text: t('section'),
    },
    {
        path: '/select',
        icon: faSquareChevronDown,
        text: t('select'),
    },
    {
        path: '/modal',
        icon: faClone,
        text: t('modal'),
    },
    {
        path: '/switch',
        icon: faToggleOn,
        text: t('switch'),
    },
    {
        path: '/textarea',
        icon: faParagraph,
        text: t('textarea'),
    },
    {
        path: '/table',
        icon: faTable,
        text: t('table'),
    },
    {
        path: '/checkbox',
        icon: faClone,
        text: t('checkbox'),
    }
]