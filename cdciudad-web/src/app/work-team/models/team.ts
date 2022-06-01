export interface SearchTeam {
  _id: string;
  name: string;
  profile_picture: string;
  department: string;
  staff_type: string;
}

export interface Person {
  _id: string;
  staff_type: string;
  name: string;
  hello_there: string;
  experience: string;
  job: string;
  hobbies: string[];
  years_of_experience: number;
  banner_picture: string;
  profile_picture: string;
  department: string;
  what_i_do?: string[];
  contact?: {
    email: string;
    phone: string;
    office_hours: string;
  };
  schooling?: string[];
  courses?: string[];
  gallery?: string[];
}
