from rest_framework import status
from rest_framework.test import APITestCase

from users.models import CustomUser

class TestProductAPIViews(APITestCase):
    def test_get_product(self):
        endpoint = 'http://localhost:8000/api/{}/'.format('users')
        data = {
            'first_name': 'Test0',
            'last_name': 'Test0',
            'username': 'Test0',
            'email': 'test0@gmail.com',
            'password': 'test2022',
            'address': 'test street',
            'city': 'test city',
            'state': 'test state',
            'country': 'test country',
        }

        self.client.post(endpoint, data=data)
        endpoint = 'http://localhost:8000/api/{}/'.format('auth')
        data = {
            'username': 'Test0', 'password': 'test2022'
        }
        response = self.client.post(endpoint, data=data)
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {response.data['token']}")    

        request = self.client.get('http://localhost:8000/api/products/') 
        print(request.json())
        self.assertEqual(request.status_code, status.HTTP_403_FORBIDDEN)
