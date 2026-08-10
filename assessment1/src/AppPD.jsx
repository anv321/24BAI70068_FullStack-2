//Question1- Prop drilling
import React from "react";

const initialUser = {
  name: "Karan Mehta",
  email: "karan@gmail.com",
  program: "Web Development"
};


function Dashboard({ user }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <CourseCatalog user={user} />
    </div>
  );
}


function CourseCatalog({ user }) {
  return <CourseList user={user} />;
}


function CourseList({ user }) {
  return <Profile user={user} />;
}


function Profile({ user }) {
  return (
    <div>
      <h3>Student Profile</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Program: {user.program}</p>
    </div>
  );
}

export default function AppPropDrilling() {
  return <Dashboard user={initialUser} />;
}
