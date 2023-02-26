// Source: https://github.com/home-assistant/frontend/blob/dev/src/common/datetime/format_date_time.ts

import memoizeOne from 'memoize-one';
import { useAmPm } from './use_am_pm';

export const formatDateTime = (dateObj, locale) => formatShortDateTimeMem(locale).format(dateObj);

const formatShortDateTimeMem = memoizeOne(
    (locale) =>
        new Intl.DateTimeFormat(locale.language, {
            month: 'short',
            day: 'numeric',
            hour: useAmPm(locale) ? 'numeric' : '2-digit',
            minute: '2-digit',
            hour12: useAmPm(locale),
        })
);
