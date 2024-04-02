import { faDatabase, faDiagramCells, faSolarPanel } from "@fortawesome/pro-regular-svg-icons";

import { t } from "@utils/customTranslation";
import setupI18n from "@translation/setupI18n";

setupI18n()

export const navbarItems = [
    {
        path: '/overview',
        icon: faDiagramCells,
        text: t('overview'),
    },
    {
        path: '/projects',
        icon: faSolarPanel,
        text: t('all_projects'),
    },
    {
        path: '/database',
        icon: faDatabase,
        text: t('database'),
    },
]