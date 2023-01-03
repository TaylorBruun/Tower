import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  validateField(modelData: NgModel): boolean {
    let fieldId = modelData.name
    let fieldValue = modelData.model
    let isValid: boolean = false

    const namePattern = RegExp('[a-z]', 'i')
    const locationPattern = RegExp('[a-z]*\\s[0-9]{5}', 'i')

    switch (fieldId) {
      case 'name':
        isValid = (namePattern.test(fieldValue))
        break;
        
      case 'location':
        isValid = (locationPattern.test(fieldValue))
        break;
        
      // case 'type':
      //   console.log('hitting type case in switch');
      //   isValid = (true)
      //   break;
        
      // case 'capacity':
      //   console.log('hitting capacity case in switch');
      //   isValid = (true)
      //   break;
        
      // case 'startDate':
      //   console.log('hitting start date case in switch');
      //   isValid = (true)
      //   break;
        
      // case 'coverImg':
      //   console.log('hitting cover image case in switch');
      //   isValid = (true)
      //   break;
        
      // case 'description':
      //   console.log('hitting description case in switch');
      //   isValid = (true)
      //   break;
        
      default:
        // console.log("hit default case in switch")
        break;
    }
    return isValid
  }
}
