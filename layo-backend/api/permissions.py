from rest_framework import permissions


class IsStaffEditorPermission(permissions.DjangoModelPermissions):
    def has_permission(self, request, view):
        user = request.user
        if user.is_staff:
            return True
        return False