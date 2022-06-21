/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceNumber',
})
export class ReduceNumberPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length >= 7) return `${(Number(value) / 1000000).toFixed(1)} mln`;
    return Number(value) > 1000
      ? `${(Number(value) / 1000).toFixed(1)} k`
      : value;
  }
}
