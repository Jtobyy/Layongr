# from django.test import TestCase
from rest_framework import status
from rest_framework.test import APITestCase


class TestUserAPIViews(APITestCase):    

    def test_create_user(self):
        # Test the api to register users    
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

        response = self.client.post(endpoint, data=data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        

    def test_login(self):
        # Test the API to log a user in or authenticate users/clients
        # Register the user first
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
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['token'])
        
        
    def test_list_user(self):
        # Test the API to retrieve list of users    
        endpoint = 'http://localhost:8000/api/{}/'.format('users')    
        response = self.client.get(endpoint)

        self.assertEqual(response.status_code, status.HTTP_200_OK)        


    def test_update_user(self):
        # Test the API to update users details
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

        endpoint = 'http://localhost:8000/api/{}/'.format('users/1')
        response = self.client.patch(endpoint, {'address': 'test address edit'})

        self.assertEqual(response.status_code, status.HTTP_200_OK)   
