export const formatDate = (date: Date, locale: string = 'en-US'): string => {
  return new Intl.DateTimeFormat(locale).format(date);
};
export const isPastDate = (date: Date): boolean => {
  return date.getTime() < new Date().getTime();
};

// Generics example
export class Utility {
  static reverse<T>(items: T[]): T[] {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
      toreturn.push(items[i]);
    }
    return toreturn;
  }
}

// return a Promise of any type
export const getJSON = <T>(config: {
  url: string,
  headers?: { [key: string]: string },
}): Promise<T> => {
  const fetchConfig = ({
    method: 'GET',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...(config.headers || {}),
  });
  return fetch(config.url, fetchConfig)
    .then<T>(response => response.json());

};
