import axios from 'axios';

export type Cat = {
  race: string;
  name: string;
  color: string;
  weight: number;
  age: number;
  location: string;
  image: string;
}

export async function fetchCatData(url: string): Promise<{ [key: string]: Cat }> {
  try {
    const response = await axios.get(url);
    const data: { [key: string]: Cat } = response.data;

    return data;
  } catch (error) {
    console.error('Ocorreu um erro ao recuperar os dados:', error);
    throw error;
  }
}

