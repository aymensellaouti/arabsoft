import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btcToUsd',
})
export class BtcToUsdPipe implements PipeTransform {
  transform(amount: number, isBtcToUsd = true): number {
    if (!isBtcToUsd) {
      return amount / 21102.1;
    }
    return amount * 21102.1;
  }
}
