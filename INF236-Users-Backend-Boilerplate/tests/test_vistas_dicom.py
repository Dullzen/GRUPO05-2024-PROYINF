import unittest
import requests

class TestDICOMViewer(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        # URL base del servidor que maneja la API DICOM
        cls.base_url = "http://localhost:8080/api/dicom"  

    def test_view_dicom_success(self):
        dicom_id = "1"  
        response = requests.get(f"{self.base_url}/view/{dicom_id}")
        self.assertEqual(response.status_code, 200)
        self.assertIn("image", response.headers["Content-Type"])

    def test_view_dicom_not_found(self):
        dicom_id = "invalid_dicom_id"
        response = requests.get(f"{self.base_url}/view/{dicom_id}")
        self.assertEqual(response.status_code, 404)
        
        
        if response.headers.get('Content-Type') == 'application/json':
            self.assertIn("error", response.json())
        else:
            self.fail("Expected JSON response but got something else")
    
if __name__ == '__main__':
    unittest.main()

