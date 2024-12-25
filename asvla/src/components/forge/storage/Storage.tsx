import axios from "axios";

const fetchProtectedData = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://10.10.12.161:3306/api/protected", {
      headers: { Authorization: token },
    });
    console.log(response.data);
  } catch (err: any) {
    console.error(err.response?.data || err.message);
  }
};

// Example usage
fetchProtectedData();
