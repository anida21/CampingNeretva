export interface EmailForm {
  to: string;
  formData: {
    Name: string;
    PhoneNumber: string;
    Email: string;
    TypeOfVehicle: string;
    CheckBox1: boolean;
    CheckBox2: boolean;
    NumberOfGuests: string;
    CheckIn: string;
    CheckOut: string;
    Message: string;
    TypeOfCamping: string; // Dodano TypeOfCamping u formData
  };
}