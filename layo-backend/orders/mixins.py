from .models import Order, Payment


class StaffGetsAllOrderMixin():
    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Order.objects.all()
        else:
            return Order.objects.filter(user=user)

class StaffGetsAllPaymentMixin():
    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Payment.objects.all()
        else:
            return Payment.objects.filter(order__user=user)