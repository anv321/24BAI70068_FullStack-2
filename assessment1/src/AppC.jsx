//Question3- Custom hook

import React, { createContext, useContext } from "react";

const initialUser = {
  name: "Karan Mehta",
  email: "karan@gmail.com",
  program: "Web Development"
};

const UserContext=createContext();

function useUser() {
  return useContext(UserContext);
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <CourseCatalog />
    </div>
  );
}

function CourseCatalog() {
  return <CourseList />;
}

function CourseList() {
  return <StudentProfile />;
}

function StudentProfile(){
  const user=useUser();


  return (
    <div>
      <h3>Student Profile (Via Custom Hook)</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Program: {user.program}</p>
    </div>
  );
}

export default function AppContext() {
  return (
    <UserContext.Provider value={initialUser}>
      <Dashboard />
    </UserContext.Provider>
  );
}






