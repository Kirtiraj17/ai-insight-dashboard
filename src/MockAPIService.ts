import aiData from './ai-data.json'

// console.log(aiData, 'ddd')

// Mock API service to simulate fetching data
export const fetchData = (): Promise<any> => {
  // Simulate API call (replace with actual API call in a real application)
  return new Promise((resolve) => {
    const mockData = aiData;
    resolve(mockData);
  });
};
