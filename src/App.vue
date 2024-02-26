<template>
  <div class="container">
    <h2>Форма созания клиента</h2>

    <!-- Form -->
    <form novalidate>
      <!-- Step 1: Personal Information -->
      <div class="fields-wrap" v-if="currentStep === 1">
        <h3>Личные данные  клиента</h3>
        <div class="form-group">
          <label for="last-name"><span class="required">*</span>Фамилия:</label>
          <input type="text" id="last-name" v-model="lastName"  required>
          <p v-if="isEmpty('lastName')" class="error-message">Введите фамилию</p>
        </div>
        <div class="form-group">
          <label for="name"><span class="required">*</span>Имя:</label>
          <input type="text" id="name" v-model="name"  required>
          <p v-if="isEmpty('name')" class="error-message">Введите имя</p>
        </div>
        <div class="form-group">
          <label for="patronymic">Отчество:</label>
          <input type="text" id="patronymic" v-model="patronymic">
        </div>
        <div class="form-group half-size">
          <label for="dob"><span class="required">*</span>Дата рождения:</label>
          <input type="date" id="dob" v-model="dob" required>
          <p v-if="isEmpty('dob')" class="error-message">Введите дату</p>
        </div>
        <div class="form-group half-size">
          <label for="phone"><span class="required">*</span>Номер телефона:</label>
          <input type="tel" id="phone" v-model="phone" @input="validatePhoneNumber" :class="{ 'error': !isPhoneNumberValid }" placeholder="7ХХХХХХХХХХ">
          <p v-if="!isPhoneNumberValid && (isEmpty('phone') || nextButtonClicked)" class="error-message">Некорректный номер телефона</p>
        </div>
        <div class="form-group half-size">
          <label for="customer-group"><span class="required">*</span>Группа клиентов:</label>
          <select id="customer-group" v-model="customerGroup" multiple required>
            <option value="VIP">VIP</option>
            <option value="Problematic">Проблемные</option>
            <option value="CHI">ОМС</option>
          </select>
          <p v-if="isEmpty('customerGroup')" class="error-message">Выберите группу(группы) клиентов</p>

        </div>
        <div class="form-group half-size">
          <label for="gender">Пол</label>
          <select id="gender" v-model="gender">
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
            
          </select>
        </div>

        <div class="form-group">
          <label for="attending-doctor">Лечащий врач:</label>
          <select id="attending-doctor" v-model="attendingDoctor">
            <option value="Ivanov">Иванов</option>
            <option value="Zakharov">Захаров</option>
            <option value="Chernysheva">Чернышова</option>
          </select>
        </div>
        <div class="form-group">
          <label class="SMS" for="do-not-send-sms">Не отправлять SMS:</label>
          <input type="checkbox" id="do-not-send-sms" v-model="doNotSendSMS">
        </div>
        <p>*Поля обязательные для заполнения</p>
      </div>

      <!-- Step 2: Address Information -->
      <div class="fields-wrap" v-if="currentStep === 2">
        <h3>Адрес:</h3>
        
        <div class="form-group">
          <label for="index">Страна:</label>
          <input type="text" id="country" v-model="addressCountry">
        </div>
        <div class="form-group">
          <label for="index">Область:</label>
          <input type="text" id="area" v-model="addressArea">
        </div>
        <div class="form-group">
          <label for="index"><span class="required">*</span>Город:</label>
          <input type="text" id="city" v-model="addressCity">
          <p v-if="isEmpty('addressCity')" class="error-message">Введите город</p>
        </div>
        <div class="form-group">
          <label for="index">Улица:</label>
          <input type="text" id="street" v-model="addressStreet">
        </div>
        <div class="form-group half-size">
          <label for="index">Дом:</label>
          <input type="text" id="building" v-model="addressBuilding">
        </div>
        <div class="form-group half-size">
          <label for="index">Индекс:</label>
          <input type="text" id="index" v-model="addressIndex">
        </div>
        <p>*Поля обязательные для заполнения</p>
      </div>

      <!-- Step 3: Additional Information -->
      <div class="fields-wrap" v-if="currentStep === 3">
        <h3>Паспортные данные:</h3>
        <div class="form-group half-size">
          <label for="document-type"><span class="required">*</span>Тип документа:</label>
          <select id="document-type" v-model="passportType" required>
            <option value="Passport">Паспорт</option>
            <option value="Birth Certificate">Свидетельство о рождении</option>
            <option value="Water ID Card">Водительское удостоверение</option>
          </select>
          <p v-if="isEmpty('passportType')" class="error-message">Выберите тип документа</p>
        </div>
        <div class="form-group half-size">
          <label for="issue-date"><span class="required">*</span>Дата выдачи:</label>
          <input type="date" id="issue-date" v-model="passportIssueDate" required>
          <p v-if="isEmpty('passportIssueDate')" class="error-message">Введите дату выдачи документа</p>
        </div>
        <div class="form-group half-size">
          <label for="passport-series">Серия:</label>
          <input type="text" id="passport-series" v-model="passportSeries">
        </div>
        <div class="form-group half-size">
          <label for="passport-number">Номер:</label>
          <input type="text" id="passport-number" v-model="passportNumber">
        </div>
        <div class="form-group">
          <label for="issued-by">Кем выдан:</label>
          <input type="text" id="issued-by" v-model="passportIssuedBy">
        </div>       
        <p>*Поля обязательные для заполнения</p>
      </div>


      <!-- Buttons for navigating between steps -->
      <div class="button-container">
      <button v-if="currentStep > 1" type="button" @click="prevStep">Назад</button>
      
      <button v-if="currentStep < 3"  @click="validateAndProceed" style="margin-left: auto;">Далее</button>
      <button v-if="currentStep === 3" @click="validateAndProceed">Регистрация</button>
    </div>
    </form>
    <ModalDialog v-if="IsModal" @modalClosed="handleModalClosed"/>
    
  </div>
</template>

<script>

import ModalDialog from './components/ModalDialog.vue';
export default {
  components: {
    ModalDialog
  },

  data() {
        return {
          currentStep: 1,
          isPhoneNumberValid: false,
          phoneError: false,
          showError: false,
          IsModal: false,
          emptyFields: false,
          nextButtonClicked: false,
          
          lastName: '',
          name: '',
          patronymic: '',
          dob: '',
          phone: '',
          gender: 'male',
          customerGroup: [],
          attendingPhysician: '',
          doNotSendSMS: false,

          addressIndex: '',
          addressCountry: '',
          addressArea: '',
          addressCity: '',
          addressStreet: '',
          addressBuilding: '',
        
          passportType: '',
          passportSeries: '',
          passportNumber: '',
          passportIssuedBy: '',
          passportIssueDate: '',
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
          
          this.IsModal=true; 
          console.log('Form submitted!');
           
        },
        resetForm() {
          // Reset all data properties to their default values
          this.currentStep = 1;
          this.isPhoneNumberValid = false;
          this.phoneError = false;
          this.showError = false;
          this.IsModal = false;
          this.emptyFields = false;
          this.nextButtonClicked = false;

          this.lastName = '';
          this.name = '';
          this.patronymic = '';
          this.dob = '';
          this.phone = '';
          this.gender = 'male';
          this.customerGroup = [];
          this.attendingPhysician = '';
          this.doNotSendSMS = false;
          this.addressIndex = '';
          this.addressCountry = '';
          this.addressArea = '';
          this.addressCity = '';
          this.addressStreet = '';
          this.addressBuilding = '';
          this.passportType = '';
          this.passportSeries = '';
          this.passportNumber = '';
          this.passportIssuedBy = '';
          this.passportIssueDate = '';
          this.progress = 0;
        },

        handleModalClosed() {
          // Call resetForm() when the Modal Dialog is closed
          this.resetForm();
        },
        resetCurrentStep() {
          this.currentStep = 1; // Reset current step back to 1
        },

    
        clearError(errorFlag) {
       
        this[errorFlag] = false;
       },

      validatePhoneNumber() {
        const phoneNumberRegex = /^[7][0-9]{10}$/;
        this.isPhoneNumberValid = phoneNumberRegex.test(this.phone);
       },

      validateAndProceed(event) {
        event.preventDefault();
        this.nextButtonClicked = true; 
        if (!this.isRequiredFieldsFilled() || this.containsOnlySpaces() || !this.isPhoneNumberValid) {
         
          this.emptyFields = true;
        } else {
          console.log("No empty fields or only spaces detected.");
          this.emptyFields = false;
          
          if (this.currentStep === 3) {
            this.submitForm();
          } else {
            this.nextStep();
          }
        }
      },
      
      isRequiredFieldsFilled() {
        switch(this.currentStep) {
          case 1: 
          return !!this.lastName && !!this.name && !!this.dob && !!this.phone && (this.customerGroup.length > 0);
          case 2: 
          return !!this.addressCity;
          case 3: 
          return !!this.passportType && !!this.passportIssueDate;
          default: console.log("Step error!")
        } 
      },
      // Checking for spaces
      containsOnlySpaces() {
        switch (this.currentStep) {
          case 1: {
          console.log('Customer Group:', this.customerGroup);
            return this.emptyFields && (this.isEmpty('name') || this.isEmpty('lastName') || this.isEmpty('dob') || this.isEmpty('phone') || (this.customerGroup.length === 0));
          }
          case 2:
            return this.emptyFields && this.isEmpty('addressCity');
          case 3:
            return this.emptyFields && (this.isEmpty('passportType') || this.isEmpty('passportIssueDate'));
          default:
            console.log("Step error!");
            return false;
        }
      },

      isEmpty(fieldName) {
        const fieldValue = this[fieldName];
        if(fieldName==='customerGroup') {
          if( this.emptyFields && fieldValue.length === 0) {
            return true;
          } else {
            return false;
          }  
        } 
        if (typeof fieldValue === 'string' && this.emptyFields && (!fieldValue || !fieldValue.trim())) {
          return true;
        }else{
          return false;
        } 
      }
         
    },
};
</script>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');

* {
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
}

.error-message {
  color: red;
  font-size: 13px;
}

.container {
  font-family: "Lora", serif;
  max-width: 700px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.fields-wrap {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  margin-right: 52px;

  @media screen and (max-width: 500px) {
    margin-right: 30px;
  }
}

h2 {
  text-align: center;
  letter-spacing: 1px;
}

h3 {
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
  position: relative;
  width: 100%;
}

.half-size {
  width: 42%;
  min-width: 195px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
}

label {
  font-size: 15px;
  color: #555;
  position: absolute;
  top: -8px;
  left: 10px;
  background-color: #fff;
  padding: 0 5px;
}

.required {
  color: red;
  margin-left: 5px;
}

p {
  color: red;
  font-size: 13px;
}

.SMS {
  position: relative;
  top: 0;
  left: 0;
}

input[type="text"],
input[type="tel"],
input[type="date"],
select {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-family: "Nunito", sans-serif;
  font-size: 15px;
}

select[multiple] {
  overflow: hidden;
  height: auto;
  max-height: 100px;
  overflow-y: auto;
  padding-bottom: 5px;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 30px;
  background-color: #228dff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;

  &:hover:before {
    width: 100%;
  }

  &:hover {
    background-color: #0e63be;
  }
}
</style>