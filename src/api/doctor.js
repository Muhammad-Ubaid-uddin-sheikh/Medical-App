import ApiHandler from "./apihandler";
import endpoint from "./endpoints";

export const getDoctors = async (id) => {
    try {
      const response = await ApiHandler().get(endpoint.DOCTORS,{params:{categoryId:id}});
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

  export const getNurse = async () => {
    try {
      const response = await ApiHandler().get(endpoint.NURSE);
      console.log('Get All Nurse Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Get All Nurse Error:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  export const assignNurse = async (body)=> {
    console.log("Assign Nurse BODY => ",body)
    try {
      const response = await ApiHandler().post(endpoint.ASSIGN_NURSE,body);
      console.log('Assign Nurse Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Assign Nurse Error:', error.response ? error.response.data : error.message);
      throw error;
    }
  } 

export const updateAppoinment = async (body)=> {
  console.log("update Appointment BODY => ",body)
  try {
    const response = await ApiHandler().post(endpoint.UPDATE_APPOINTMENT,body);
    console.log('Get All Appointment Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Get All Appointment Error:', error.response ? error.response.data : error.message);
    throw error;
  }
} 

  