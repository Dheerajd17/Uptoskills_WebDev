import User from "../models/user.models.js";

export const SignUp = async (req, res) => {
  try {
    const data = req.body;
    if (
      !data.name ||
      !data.mobileNo ||
      !data.branch ||
      !data.collegeOrUniversity ||
      !data.city ||
      !data.fromDate ||
      !data.tillDate
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all required informations" });
    }
    const existingUser = await User.findOne({mobileNo : data.mobileNo});
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }

    const newUser = await User.create({
      name: data.name,
      email: data.email,
      internshipType: data.internshipType,
      mobileNo: data.mobileNo,
      duration: data.duration,
      qualification: data.qualification,
      branch: data.branch,
      experience: data.experience,
      collegeOrUniversity: data.collegeOrUniversity,
      location: data.location,
      city: data.city,
      fromDate: data.fromDate,
      tillDate: data.tillDate,
      message: data.message,
    });

    if (!newUser) {
      return res.status(400).json({ message: "some error occured" });
    }
    return res.status(200).json({ message: "user created succussfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
