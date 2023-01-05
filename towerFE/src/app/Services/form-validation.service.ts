import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';
import { zip } from 'rxjs';


const namePattern = RegExp('[a-z]', 'i')
const locationPattern = RegExp('[a-z]*\\s[0-9]{5}', 'i')
const zipPattern = RegExp('[0-9]{5}')
const hasLetters = RegExp('[a-z]', 'i')

const urlPattern = RegExp('[a-z]', 'i')
const descriptionPattern = RegExp('[a-z]', 'i')

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  validateField(modelData: NgModel): boolean {
    let fieldId = modelData.name
    let fieldValue = modelData.model
    let isValid: boolean = false



    switch (fieldId) {
      case 'name':
        isValid = (namePattern.test(fieldValue))
        break;

      case 'location':
        isValid = (locationPattern.test(fieldValue))
        if (zipPattern.test(fieldValue)) {

        }
        break;

      case 'type':
        isValid = (fieldValue)
        break;

      case 'capacity':
        isValid = (fieldValue > 0)
        break;

      case 'startDate':
        let currentDateValue = new Date().valueOf()
        let enteredTimeAsDateValue = new Date(fieldValue).valueOf()
        isValid = (enteredTimeAsDateValue > currentDateValue)
        break;

      case 'coverImg':
        isValid = (urlPattern.test(fieldValue) && fieldValue == 'https://thiscatdoesnotexist.com/')
        break;

      case 'description':
        isValid = (descriptionPattern.test(fieldValue))
        break;
    }
    return isValid
  }

  getErrorMessage(modelData: NgModel): string {
    const errorMessages = {
      invalidName: 'Please enter a name',

      invalidLocation: 'Please enter a location',
      locationNeedsZip: '5-digit ZIP required',

      invalidType: 'Please enter a type',


      invalidCapacity: 'Please enter a Capacity',


      invalidStartDate: 'Please enter a start date',
      startDateMustBeFuture: 'Start dates must be in the future',


      invalidCoverImg: 'Please enter an image url',
      useCats: 'Image url must be to random cats',


      invalidDescription: 'Please enter a description',
    }

    let fieldId = modelData.name
    let fieldValue = modelData.model
    let errorMessage: string = ''

    switch (fieldId) {
      case 'name':
        errorMessage = errorMessages.invalidName
        break;

      case 'location':
        if (hasLetters.test(fieldValue) && !zipPattern.test(fieldValue)) {
          errorMessage = errorMessages.locationNeedsZip
        } else {
          errorMessage = errorMessages.invalidLocation
        }
        break;

      case 'type':
        errorMessage = errorMessages.invalidType
        break;

      case 'capacity':
        errorMessage = errorMessages.invalidCapacity
        break;

      case 'startDate':
        let currentDateValue = new Date().valueOf()
        let enteredTimeAsDateValue = new Date(fieldValue).valueOf()
        if (enteredTimeAsDateValue <= currentDateValue){
          errorMessage = errorMessages.startDateMustBeFuture
        } else {
          errorMessage = errorMessages.invalidStartDate
        }
        break;

      case 'coverImg':
        if (!urlPattern.test(fieldValue)) {
          errorMessage = errorMessages.invalidCoverImg
        }
        if (urlPattern.test(fieldValue) && fieldValue != 'https://thiscatdoesnotexist.com/') {
          errorMessage = errorMessages.useCats
        }
        break;

      case 'description':
        errorMessage = errorMessages.invalidDescription
        break;
    }
    return errorMessage
  }





}
