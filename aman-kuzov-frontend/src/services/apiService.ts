import axios from 'axios';
import { CarAnalysis } from '../types';
import { API_CONFIG } from '../utils/constants';

class ApiService {
  private static instance: ApiService;
  private baseURL = API_CONFIG.baseUrl;

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  async analyzeCarImage(imageFile: File): Promise<CarAnalysis> {
    try {
      const formData = new FormData();
      formData.append('file', imageFile);

      const response = await axios.post(
        `${this.baseURL}${API_CONFIG.endpoints.detect}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        return response.data as CarAnalysis;
      } else {
        throw new Error(`Failed to analyze image: ${response.status}`);
      }
    } catch (error) {
      console.error('Error analyzing image:', error);
      throw new Error(`Error analyzing image: ${error}`);
    }
  }

  async checkApiHealth(): Promise<boolean> {
    try {
      const response = await axios.get(`${this.baseURL}${API_CONFIG.endpoints.health}`);
      return response.status === 200;
    } catch (error) {
      console.error('API health check failed:', error);
      return false;
    }
  }
}

export default ApiService.getInstance();
