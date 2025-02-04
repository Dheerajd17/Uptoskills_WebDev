"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {  useEffect } from "react";


// Dropdown options
const internshipTypes = ["Web Development", "Data Science", "Cyber Security", "UI/UX Design"];
const durations = ["1 Month", "3 Months", "6 Months"];
const qualifications = ["Bachelor's Degree", "Master's Degree", "PhD"];
const locations = ["Mumbai", "Delhi", "Bangalore", "Hyderabad"];

export function InternshipForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    internshipType: "",
    mobileNumber: "",
    duration: "",
    qualification: "",
    branch: "",
    experience: "",
    college: "",
    location: "",
    city: "",
    startDate: new Date(),
    endDate: new Date(),
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const [loading, setLoading] = useState(false);
  const [, setError] = useState<string>(""); 
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.name || !formData.email || !formData.mobileNumber) {
      setError("Name, Email, and Mobile Number are required!");
      setLoading(false);
      return;
    }

    const fullFormData = {
      ...formData,
      startDate: formData.startDate.toISOString(),
      endDate: formData.endDate.toISOString(),
      status: "Pending",
      appliedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:5000/api/internships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullFormData),
      });

      if (!response.ok) throw new Error("Failed to submit application");

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        internshipType: "",
        mobileNumber: "",
        duration: "",
        qualification: "",
        branch: "",
        experience: "",
        college: "",
        location: "",
        city: "",
        startDate: new Date(),
        endDate: new Date(),
        message: "",
      });
    } catch {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Accelerate Your Career with <span className="text-orange-500">Uptoskills</span> Internships
        </h1>
        <p className="bg-orange-100 text-orange-800 p-4 rounded-md w-full">
          If anyone asks you to pay any kind of fee for this internship, inform us immediately. Don&apos;t pay anything to anyone. UptoSkills doesn&apos;t charge any fee for this internship.
        </p>
      </div>
      {/* Success Animation Overlay */}
      {showSuccess && (
        <div className="overlay active">
          <div className="success-container">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <path d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <div className="success-message">Successfully Submitted</div>
          </div>
        </div>
      )}
    

      <Card className="p-6 shadow-lg text-left">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Intern with UptoSkills</h2>

        <p className="text-gray-600 text-justify max-w-3xl mb-6">
          UptoSkills makes it possible for you to achieve your fullest potential. We nurture our talent and equip them to contribute to the creation of a better future. With exciting opportunities across a breadth of domains and industries, we encourage you to take the initial steps toward a fulfilling career with us.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            <Input type="email" placeholder="Email ID *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />

            {/* Dropdown: Internship Type */}
            <select
              className="p-3 border rounded-md w-full"
              value={formData.internshipType}
              onChange={(e) => setFormData({ ...formData, internshipType: e.target.value })}
            >
              <option value="" disabled>Select Internship Type</option>
              {internshipTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <Input type="number" placeholder="Mobile Number *" value={formData.mobileNumber} onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} required />

            {/* Dropdown: Duration */}
            <select
              className="p-3 border rounded-md w-full"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            >
              <option value="" disabled>Select Duration</option>
              {durations.map((duration) => (
                <option key={duration} value={duration}>{duration}</option>
              ))}
            </select>

            {/* Dropdown: Qualification */}
            <select
              className="p-3 border rounded-md w-full"
              value={formData.qualification}
              onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
            >
              <option value="" disabled>Select Qualification</option>
              {qualifications.map((qualification) => (
                <option key={qualification} value={qualification}>{qualification}</option>
              ))}
            </select>

            <Input placeholder="Branch *" value={formData.branch} onChange={(e) => setFormData({ ...formData, branch: e.target.value })} required />
            <Input placeholder="Experience If Any" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} />

            <Input placeholder="College/University *" value={formData.college} onChange={(e) => setFormData({ ...formData, college: e.target.value })} required />

            {/* Dropdown: Location */}
            <select
              className="p-3 border rounded-md w-full"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            >
              <option value="" disabled>Select Location</option>
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            <Input placeholder="Your City Address *" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required />
          </div>

          {/* Date Picker Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">From*</label>
              <DatePicker selected={formData.startDate} onChange={(date) => setFormData({ ...formData, startDate: date || new Date() })} dateFormat="dd-MM-yyyy" className="p-3 border rounded-md w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Till*</label>
              <DatePicker selected={formData.endDate} onChange={(date) => setFormData({ ...formData, endDate: date || new Date() })} dateFormat="dd-MM-yyyy" className="p-3 border rounded-md w-full" />
            </div>
          </div>

          <Textarea
  placeholder="Message"
  value={formData.message}
  onChange={(value: string) => setFormData({ ...formData, message: value })}/>



          <Button type="submit" className="bg-orange-500 hover:bg-orange-600">{loading ? "Submitting..." : "Submit"}</Button>
        </form>
      </Card>
    </div>
  );
}
