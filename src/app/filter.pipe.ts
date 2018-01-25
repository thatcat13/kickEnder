import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(input, filteredList) {
    const output: Project[] = [];
    if(filteredList === "costOver10k") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].dollarAmt >= 10000) {
          output.push(input[i]);
        }
      }
      console.log(output);
      return output;
    } else if(filteredList === "costUnder10k") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].dollarAmt < 10000) {
          output.push(input[i])
        }
      }
      return output;
    } else if(filteredList === "technology") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].category === "technology") {
          output.push(input[i])
        }
      }
      return output;
    } else if(filteredList === "entertainment") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].category === "entertainment") {
          output.push(input[i])
        }
      }
      return output;
    } else if(filteredList === "misc") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].category === "misc") {
          output.push(input[i])
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
