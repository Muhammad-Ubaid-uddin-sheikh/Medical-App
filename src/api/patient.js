import ApiHandler from "./apihandler";
import endpoint from "./endpoints";

export const getCategories = async () => {
    try {
      const response = await ApiHandler().get(endpoint.CATEGORIES);
      console.log('Get Categories Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Get Categories Error:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

 export const bookAppointment = async (body)=> {
  console.log('Booking appoitnment body',body)
  try {
    const response = await ApiHandler().post(endpoint.BOOKING, body);
    console.log('BOOKING APPOINTMENT Response', response.data)
    return response.data
  }catch(error){
    console.error('Book Appointment Error:', error.response ? error.response.data : error.message);
    throw error;
  }
 } 
  