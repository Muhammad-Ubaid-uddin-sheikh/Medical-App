import ApiHandler from "./apihandler";
import endpoint from "./endpoints";

export const getDoctors = async () => {
    try {
      const response = await ApiHandler().get(endpoint.DOCTORS);
      console.log('Get Doctors Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Get Doctors Error:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  export const getAppointment = async () => {
    try {
      const response = await ApiHandler().get(endpoint.APPOINTMENT);
      console.log('Get All Appointment Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Get All Appointment Error:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  