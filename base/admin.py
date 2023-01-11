from django.contrib import admin
from .models import *
#Admin models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = ('photo','name', 'brand', 'category', 'rating','numReviews','price','countInStock')
    list_filter = ('category',)
    search_fields =('name','brand')
    readonly_fields=('photo','rating','numReviews','countInStock')
class ReviewAdmin(admin.ModelAdmin):
    list_display = ["photo","product","user","rating","comment","createdAt"]
    list_filter = ('product',"user")
    readonly_fields=('photo',)
class ReceivingAdmin(admin.ModelAdmin):
    list_display = ["__str__","createdAt","taxPrice","shippingPrice","totalPrice","isPaid"]
    list_editable =["taxPrice","shippingPrice","isPaid"]
    readonly_fields=('items','totalPrice')
    list_filter=["user"]
class ReceivingItemAdmin(admin.ModelAdmin):
    fields=( "product","receiving","qty","price")
    list_display = ('receiving','get_name','qty','price')
    list_filter = ["product","receiving"]
    readonly_fields=('get_name',)
    list_editable =["qty","price"]
    @admin.display(ordering='receivingitem__product', description='name')
    def get_name(self, obj):
        return obj.product.name
class OrderAdmin(admin.ModelAdmin):
    list_display = ["__str__","createdAt","taxPrice","shippingPrice","totalPrice","isPaid","isDeliver"]
    list_editable =["taxPrice","shippingPrice","isPaid","isDeliver"]
    readonly_fields=('items','totalPrice')
    list_filter=["user","isPaid","isDeliver"]
class OrderItemAdmin(admin.ModelAdmin):    
    fields=( "product","order","qty","price")
    list_display = ('order','get_name','qty','price')
    list_filter = ["product","order"]
    readonly_fields=('get_name',)
    list_editable =["qty","price"]
    @admin.display(ordering='orderitem__product', description='name')
    def get_name(self, obj):
        if obj.product:
            return obj.product.name
        else:
            return "Product deleted"        
# Register models here
admin.site.register(Product,ProductAdmin)
admin.site.register(Review,ReviewAdmin)
admin.site.register(ReceivingItem,ReceivingItemAdmin)
admin.site.register(Receiving,ReceivingAdmin)
admin.site.register(OrderItem,OrderItemAdmin)
admin.site.register(Order,OrderAdmin)
admin.site.register(ShippingAddress)