export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  altPhone?: string;
  yearOfBirth?: string;
  gender?: string;
  address?: string;
  pincode?: string;
  domicileState?: string;
  domicileCountry?: string;
  school?: string;
  degree?: string;
  course?: string;
  yearOfCompletion?: string;
  grade?: string;
  skills?: string;
  projects?: string;
  workExperience?: WorkExperience[];
  linkedIn?: string;
  resume?: string;
}

export interface WorkExperience {
  domain: string;
  subDomain: string;
  experience: string;
}
