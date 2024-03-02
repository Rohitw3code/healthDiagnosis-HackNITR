'use client';
import Image from "next/image";
import Login from "@/components/Login-page";
import { useUser } from '@auth0/nextjs-auth0/client';
import savetodb from "@/actions/savetodb";
import { useState } from "react";

export default function Home() {
  const [gender, setGender] = useState('')
  const [bloodgrp, setBloodgrp] = useState('')
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
    {user?
     <form onSubmit={(e)=> {e.preventDefault() 
     console.log({
        email: user.email,
        name: user.name,
        image: user.picture,
        gender: gender,
        bloodgrp: bloodgrp
     })
     savetodb({
        email: user.email,
        name: user.name,
        image: user.picture,
        gender: gender,
        bloodgrp: bloodgrp
     })
    }}>
        <label for="bloodgrp">Blood Group:</label>
        <select
            id="bloodgrp"
            name="bloodgrp"
            value={bloodgrp}
            onChange={(e) => setBloodgrp(e.target.value)}
            required>
            <option value="" disabled selected>Select your blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
        </select>

        <label for="gender">Gender:</label>
        <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" disabled selected>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>

        <button type="submit">Submit</button>
    </form>
    :
    <a href = "/api/auth/login"> Login </a>}
    </div>
  );
}
