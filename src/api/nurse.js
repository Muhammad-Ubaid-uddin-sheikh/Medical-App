import ApiHandler from "./apihandler";
import endpoint from "./endpoints";

export const getMyAppointment = async () => {
    try {
      const response = await ApiHandler().get(endpoint.MY_APPOINTMENT);
      console.log('Get All Appointment Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Get All Appointment Error:', error.response ? error.response.data : error.message);
      throw error;
    }
  };