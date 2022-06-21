/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import { BigNumbers } from '../constants/shared-constants';

@Pipe({
  name: 'reduceNumber',
})
export class ReduceNumberPipe implements PipeTransform {
  transform(value: string): string {
    const num = Number(value);

    // Check if number is unsent
    if (!num) return '0';

    // Check if number is as mln
    if (num >= BigNumbers.mln)
      return `${(num / BigNumbers.mln).toFixed(1)} mln`;

    // Check if number is as ths
    return num > BigNumbers.K ? `${(num / BigNumbers.K).toFixed(1)} k` : value;
  }
}
