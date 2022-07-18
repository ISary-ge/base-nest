import { Injectable } from '@nestjs/common';

@Injectable()
export class HelpersService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  objectToQuery(params: Record<string, any>, queryName = '') {
    const str = [];

    for (const key of Object.keys(params)) {
      const preparedKey = queryName ? `${queryName}[${key}]` : key;
      const value = params[key];

      if (value !== null && typeof value === 'object') {
        str.push(this.objectToQuery(value, preparedKey));
      } else {
        str.push(encodeURI(`${preparedKey}=${value}`));
      }
    }

    return str.join('&');
  }

  // checkVisibility(visibility: ProductVisibility, contractId: number) {
  //   if (!visibility || Object.keys(visibility).length === 0) return true;
  //   return contractId >= visibility.from && contractId <= visibility.to;
  // }
}
