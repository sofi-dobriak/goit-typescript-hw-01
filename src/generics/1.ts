import axios from 'axios';

async function fetchData<StringType>(url: string): Promise<StringType | null> {
  try {
    const response = await axios.get<StringType>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
