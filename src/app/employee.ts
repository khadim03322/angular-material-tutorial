export interface Employee {

  empId: number;  
  firstName: string;  
  lastName: string;  
  dateofBirth: Date;  
  emailId: string;  
  gender: string;  
  countryId: number;  
  stateId: number;  
  cityid: number;  
  address: string;  
  pincode: string;  
  countryMaster: Country;
  stateMaster: State;
  cityMaster : City;

}

export interface Country {  
    countryId: number;  
    countryName: string;  
  }  
    
  export interface State {  
    stateId: number;  
    stateName: string;  
    countryId: number;  
    countryMaster: Country;
  }  
    
  export interface City {  
    cityid: number;  
    cityName: string;  
    stateId: number;  
    countryId: number;  
    countryMaster: Country;
    stateMaster: State;
  }  