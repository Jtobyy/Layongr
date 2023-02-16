from django.contrib.auth.hashers import make_password
from rest_framework import generics, permissions
 
from .models import CustomUser, PartnerAccount
from .serializers import CustomUserSerializer, PartnerAccountSerializer
from api.permissions import IsStaffEditorPermission

# import smtplib, ssl


# User Registration 
class UserListCreateAPIView(generics.ListCreateAPIView):
    """
    This endpoint returns a list of all **user** accounts in the system.
    and allows   new users to be added.

    Only staff users can view all accounts. A user that doesn't have staff permission will only be able to view
    the account partaining to them.

    id:     The user's unique identifier
    first_name: The user's first name
    last_name: The user's last name
    username:  The user's username
    email: The user's email address
    password: The user's hashed password
    phone_number: The user's phone number
    address: The user's address
    city: The city the user live's in 
    state: The state the user live's in 
    country: The country the user live's in
    profile_picture: The user's profile picture
    """
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

    def get_queryset(self):
        # Allow users to view only their own details
        user = self.request.user    
        if user.is_staff:
            return CustomUser.objects.all()
        else:
            return CustomUser.objects.filter(id=user.id)    

    def perform_create(self, serializer):
        password = make_password(serializer.validated_data.get('password'), salt=None, hasher='default')
        # Check if user provided email, if there is, send confirmation email to user.
        email = serializer.validated_data.get('email') or None
        if email is not None:
            pass
        serializer.save(password=password)

user_list_create_view = UserListCreateAPIView.as_view()


class UserDetailUpdateAPIView(generics.RetrieveUpdateAPIView):
    """
    This endpoint returns the detail of a particular account and also allows user accounts to be edited.

    Only staff users can edit any accounts. A user that doesn't have staff permission will only be able to view
    and edit the account partaining to them.

    id:     The user's unique identifier
    first_name: The user's first name
    last_name: The user's last name
    username:  The user's username
    email: The user's email address
    password: The user's hashed password
    phone_number: The user's phone number
    address: The user's address
    city: The city the user live's in 
    state: The state the user live's in 
    country: The country the user live's in , 
    profile_picture: The user's profile picture    
    """
    serializer_class = CustomUserSerializer
    lookup_field = 'pk' # Could be email addresses instead or any other fields

    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Allow users to view only their own details
        user = self.request.user    
        if user.is_staff:
            return CustomUser.objects.all()
        else:
            return CustomUser.objects.filter(id=user.id)

    # User has to be a staff or an admin to edit the list of all users.
    def get_object(self):
        obj = super().get_object()
        user = self.request.user
        if user.is_staff:
            return obj
        elif self.request.user != obj:
            return CustomUser.objects.none()
        return obj

    def perform_update(self, serializer):
        print(serializer.validated_data)
        password = serializer.validated_data.get('password') or None
        if password:
            hashed_password = make_password(password=password)
            serializer.save(password=hashed_password)
        else:
            serializer.save()    
        

user_detail_update_view = UserDetailUpdateAPIView.as_view()    



# Partner Registration
class PartnerListAPIView(generics.ListAPIView):
    """
    This endpoint returns a list of all **partner** accounts in the system.

    Fields
    user: The user account linked
    business_entity: Business entity ('S', 'Sole Proprietorship'), ('P', 'Partnership'), ('C', 'Corporation')
    business_name: name of business
 
    brand_name: name of brand
    legal_rep_first_name: first name of legal representative
    legal_rep_other_name: other name of legal representative
    legal_rep_last_name: last name of legal representative
    valid_id_card: partner's valid id card (image)
    tin: partner's tin
    vat: partner's vat

    bank: partner's bank (choices of integers)
    account_number: partner's account number
    account_name: partner's account name
    """
    queryset = PartnerAccount.objects.all()
    serializer_class = PartnerAccountSerializer

partner_list_view = PartnerListAPIView.as_view()

class PartnerCreateAPIView(generics.CreateAPIView):
    """
    This endpoint allows partner accounts to be created.

    Only staff users have access to this endpoint.

    Fields
    user: The user account linked
    business_entity: Business entity ('S', 'Sole Proprietorship'), ('P', 'Partnership'), ('C', 'Corporation')
    business_name: name of business
 
    brand_name: name of brand
    legal_rep_first_name: first name of legal representative
    legal_rep_other_name: other name of legal representative
    legal_rep_last_name: last name of legal representative
    valid_id_card: partner's valid id card (image)
    tin: partner's tin
    vat: partner's vat

    bank: partner's bank (choices of integers)
    account_number: partner's account number
    account_name: partner's account name
    """        
    queryset = PartnerAccount.objects.all()
    serializer_class = PartnerAccountSerializer

partner_create_view = PartnerCreateAPIView.as_view()

class PartnerDetailUpdateAPIView(generics.RetrieveUpdateAPIView):
    """
    This endpoint allows partner accounts to be edited.

    Only staff users have access to this endpoint.

    Fields
    user: The user account linked
    business_entity: Business entity ('S', 'Sole Proprietorship'), ('P', 'Partnership'), ('C', 'Corporation')
    business_name: name of business
 
    brand_name: name of brand
    legal_rep_first_name: first name of legal representative
    legal_rep_other_name: other name of legal representative
    legal_rep_last_name: last name of legal representative
    valid_id_card: partner's valid id card (image)
    tin: partner's tin
    vat: partner's vat

    bank: partner's bank (choices of integers)
    account_number: partner's account number
    account_name: partner's account name
    """
    queryset = PartnerAccount.objects.all()

    serializer_class = PartnerAccountSerializer
    permission_classes = [permissions.IsAuthenticated]

partner_detail_update_view = PartnerDetailUpdateAPIView.as_view()    
