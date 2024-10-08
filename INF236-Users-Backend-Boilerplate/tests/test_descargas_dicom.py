import unittest
import requests

class TestDICOMDownload(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.base_url = "http://localhost:8080/api/dicom"

    def test_download_dicom_success(self):
        dicom_id = "1"  
        response = requests.get(f"{self.base_url}/download/{dicom_id}")
        self.assertEqual(response.status_code, 200)
        self.assertIn("application/dicom", response.headers["Content-Type"])

    def test_download_txt_success(self):
        dicom_id = "1"
        response = requests.get(f"{self.base_url}/download/{dicom_id}/report")
        self.assertEqual(response.status_code, 200)
        self.assertIn("text/plain", response.headers["Content-Type"])

    def test_download_dicom_not_found(self):
        dicom_id = "invalid_dicom_id"
        response = requests.get(f"{self.base_url}/download/{dicom_id}")
        self.assertEqual(response.status_code, 404)
        self.assertIn("error", response.json())

if __name__ == '__main__':
    unittest.main()
