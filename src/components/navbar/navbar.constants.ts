import { faUser } from "@fortawesome/pro-solid-svg-icons";

import setupI18n from "@translation/setupI18n";
import { t } from "@utils/customTranslation";

setupI18n()

export const navbarItems = [
    {
        path: '/user',
        icon: faUser,
        text: t('my_account'),
    },
]