export const formatDate = (date: Date, locale: string = 'en-US'): string => {
    return new Intl.DateTimeFormat(locale).format(date);
};
export const isPastDate = (date: Date): boolean => {
    return date.getTime() < new Date().getTime();
};
