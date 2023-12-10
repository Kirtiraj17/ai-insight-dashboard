import aiData from "./ai-data.json";

// Mock API service to simulate fetching data
export const fetchData = (): Promise<any> => {
  // Simulate API call
  return new Promise((resolve) => {
    const mockData = aiData;
    setTimeout(() => resolve(mockData), 500);
  });
};
