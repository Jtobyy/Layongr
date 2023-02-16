from rest_framework import generics, status, permissions
from rest_framework.response import Response

from .mixins import StaffGetsAllOrderMixin, StaffGetsAllPaymentMixin
from .serializers import OrderSerializer, PaymentSerializer
from api.permissions import IsStaffEditorPermission


# Order Views
class OrderListCreateView(StaffGetsAllOrderMixin, generics.ListCreateAPIView):    
    """
    This endpoint returns a list of all **orders** in the system.
    And allows  new orders to be added.

    Only staff users can view any and all orders. A user that doesn't have staff permission will only be able to view
    the orders linked to them.

    Fields
    id:     The order's unique identifier
    amount: The number of items bought
    unit_price: The unit price of the item
    total_price: Total price of the order (amount * unit_price)
    Status:  Status of the payment, It can be M (Made), P (Pending), D (Delivered) or C (Canceled)
    user: id of the user linked to the order
    product: id of the product linked to the order
    """
    serializer_class = OrderSerializer

    # Link any new order to the current logged in user
    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)

    permission_classes = [permissions.IsAuthenticated]

order_list_create_view = OrderListCreateView.as_view()


class OrderUpdateView(StaffGetsAllOrderMixin, generics.UpdateAPIView):
    """
    This endpoint allows orders to be updated.

    Only staff users can access this API.

    Fields
    id:     The order's unique identifier
    amount: The number of items bought
    unit_price: The unit price of the item
    total_price: Total price of the order (amount * unit_price)
    Status:  Status of the payment, It can be M (Made), P (Pending), D (Delivered) or C (Canceled)
    user: id of the user linked to the order
    product: id of the product linked to the order
    """
    serializer_class = OrderSerializer
    permission_classes = [IsStaffEditorPermission]

order_update_view = OrderUpdateView.as_view()


class OrderRetrieveView(StaffGetsAllOrderMixin, generics.RetrieveAPIView):
    """
    This endpoint returns the details of a particular order.

    Only staff users can view any order. A user that doesn't have staff permission will only be able to view
    orders that have been linked to them.

    Fields
    id:     The order's unique identifier
    amount: The number of items bought
    unit_price: The unit price of the item
    total_price: Total price of the order (amount * unit_price)
    Status:  Status of the payment, It can be M (Made), P (Pending), D (Delivered) or C (Canceled)
    user: id of the user linked to the order
    product: id of the product linked to the order
    """
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]    

order_retrieve_view = OrderRetrieveView.as_view()



# Payment Views
class PaymentListCreateView(StaffGetsAllPaymentMixin, generics.ListCreateAPIView):
    """
    This endpoint returns a list of all **payments** in the system.
    and allows  new payments to be added.

    Only staff users can view and access all payments. A user that doesn't have staff permission will only have access to
    the payments linked to them or more specifically the orders they've made.

    Fields
    id:     The payment's unique identifier
    amount: The amount of money paid in (AGN)
    status: Status of the payment, It can be P (pending), F (Failed) or S (Successfull)
    order:  The order linked to the payment. This is a foreign key relationship, so by design, an order can have multiple payments linked to it, maybe one failed and the order successful        
    """                
    serializer_class = PaymentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        # Validates payment
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = self.request.user
        order = serializer.validated_data.get('order')
        if order.user == user:
            serializer.save(user=user)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return Response({'message': 'This order is not yours'}, status=status.HTTP_406_NOT_ACCEPTABLE)

payment_list_create_view = PaymentListCreateView.as_view()


class PaymentUpdateView(StaffGetsAllPaymentMixin, generics.UpdateAPIView):
    """
    This endpoint allows orders to be updated.

    Only staff users can access this API.

    Fields
    id:     The payment's unique identifier
    amount: The amount of money paid in (AGN)
    status: Status of the payment, It can be P (pending), F (Failed) or S (Successfull)
    order:  The order linked to the payment. This is a foreign key relationship, so by design, an order can have multiple payments linked to it, maybe one failed and the order successful        
    """    
    serializer_class = PaymentSerializer
    permission_classes = [IsStaffEditorPermission]

payment_update_view = PaymentUpdateView.as_view()


class PaymentRetrieveView(StaffGetsAllPaymentMixin, generics.RetrieveAPIView):
    """
    This endpoint returns the detail of a particular payment.

    Only staff users can view any payment detail. A user that doesn't have staff permission will only be able to view
    payments that have been linked to them.

    Fields
    id:     The payment's unique identifier
    amount: The amount of money paid in (AGN)
    status: Status of the payment, It can be P (pending), F (Failed) or S (Successfull)
    order:  The order linked to the payment. This is a foreign key relationship, so by design, an order can have multiple payments linked to it, maybe one failed and the other successful            
    """    
    serializer_class = PaymentSerializer
    permission_classes = [permissions.IsAuthenticated]

payment_retrieve_view = PaymentRetrieveView.as_view()