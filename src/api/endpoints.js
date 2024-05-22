const endpoint = {
  LOGIN: 'auth/login',
  SIGNUP: 'auth/signUp',
  CATEGORIES: 'getAllCategories',
  DOCTORS: 'doctor/getAllDoctors',
  APPOINTMENT: 'doctor/getAllAppointments',
  UPDATE_APPOINTMENT:'doctor/updateAppointment',
  NURSE:'doctor/getAllNurses',
  ASSIGN_NURSE:'doctor/assignNurse',
  BOOKING:'patient/bookAppointment',
  MY_APPOINTMENT:'nurse/getMyAppointments'
};

export default endpoint;
