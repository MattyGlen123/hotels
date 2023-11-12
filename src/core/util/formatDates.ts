import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';


export const formatDay = (date: string) => {
    dayjs.extend(localizedFormat);

    return dayjs(date).format('dddd');
}

export const formatTime = (date: string) => {
    dayjs.extend(localizedFormat);
    dayjs.extend(customParseFormat);

    return dayjs(date, { format: 'YYYY-MM-DD H:mm' }).format('hh:mm A');
}