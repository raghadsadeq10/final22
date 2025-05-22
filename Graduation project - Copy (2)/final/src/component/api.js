import axios from 'axios';

const BASE_URL = 'https://mycarapi.com/api';

// دالة عامة لأي بيانات
export async function fetchData(endpoint) {
  const response = await axios.get(`${BASE_URL}/${endpoint}`);
  return response.data;
}

// ✅ دالة مخصصة للبحث
export async function searchProducts(query) {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: { query }, // ترسل كـ ?query=كلمة
  });
  return response.data;
}