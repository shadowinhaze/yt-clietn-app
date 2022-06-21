/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceNumber',
})
export class ReduceNumberPipe implements PipeTransform {
  transform(value: string): string {
    // Check if number is unsent
    if (!value) return '0';

    // Check if number is as mln
    if (value.toString().length >= 7)
      return `${(Number(value) / 1000000).toFixed(1)} mln`;

    // Check if number is as ths
    return Number(value) > 1000
      ? `${(Number(value) / 1000).toFixed(1)} k`
      : value;
  }
}
