export default {
    data() {
        return {
          currentStep: 1,
          lastName: '',
          showLastNameError: false,
          name: '',
          patronymic: '',
          dob: '',
          phone: '',
          gender: 'male',
          customerGroup: [],
          attendingPhysician: '',
          doNotSendSMS: false,
          address: {
            index: '',
            country: '',
            area: '',
            sity: '',
            street: '',
            building: ''
          },
          passport: {
            type: 'Passport',
            series: '',
            number: '',
            issuedBy: '',
            issueDate: ''
          },
          progress: 0
        };
      },
      methods: {
        nextStep() {
          if (this.currentStep < 3) {
            this.currentStep++;
          }
        },
        prevStep() {
          if (this.currentStep > 1) {
            this.currentStep--;
          }
        },
        submitForm() { 
          console.log('Form submitted');
          
        },
    
        clearError(errorFlag) {
        // Clear the specified error flag
        this[errorFlag] = false;
       },
        validateAndProceed() {
          // Check if required fields are filled
          if (!this.isRequiredFieldsFilled()) {
            // Show error message for each required field
            this.showLastNameError = !this.lastName;
            // Set other error flags for other fields
          } else {
            this.showLastNameError = false;
            // Proceed to the next step
            this.nextStep();
          }
        },
        isRequiredFieldsFilled() {
          if( this.currentStep == 1) {
            return !!this.lastName && !!this.name && !!this.dob && !!this.phone; 
          } if (this.currentStep == 2) {
            return !!this.address.sity;
          } else {
            return !!this.passport.type && !!this.passport.issueDate;
          }
          
        },
         // Calculate form completion progress
         calculateProgress() {
          // Calculate progress based on filled fields
          // For demonstration purposes, let's assume each field contributes 10% to progress
          const totalFields = 14; // Total number of fields
          const filledFields = 7; // Number of filled fields (adjust as needed)
          this.progress = (filledFields / totalFields) * 100;
        }
      },
      created() {
        // Calculate progress when component is created
        this.calculateProgress();
      }
  }