## Post form trên django
Django cung cấp lớp Form hỗ trợ tạo form một cách nhanh chóng và dễ dàng  
### Tạo app
Đầu tiên chúng ta tạo một app mới với tên là `register`  
`$ python3 manage.py startapp register`  
Chúng ta tạo một file mới với tên là forms.py để lưu các lớp form.  
```
from django import forms

class Register(forms.Form):
    username = forms.CharField(label='Username', max_length=100)
    password = forms.CharField(widget=forms.PasswordInput)
```  
Ở trên chúng ta có 2 CharField dùng để nhập username và password  
Bạn có thể xem thêm danh sách các lớp và tham số của form tại [đây](https://docs.djangoproject.com/en/1.9/ref/forms/fields/)  
### Tạo template
Chúng ta tạo một thư mục với tên là templates, trong thư mục này chúng ta lại tạo một thư mục khác là pages rồi tạo một file HTML với tên là register.html:  
```
    <form action="" method="post">
        {% csrf_token %}
        {{ form }}
        <input type="submit" value="submit">
    </form>
```  
### Tạo view
Ta viết hàm view register() như sau  
```
from django.shortcuts import render
from django.http import HttpResponse
from .models import user
from .forms import Register
from .models import user
# Create your views here.

def register(request):
    if request.method == 'POST':
        response = HttpResponse()
        response.write('<h1>Hello</h1>')
        response.write(request.POST['username'] + '<br/>')
        response.write(request.POST['password'])
        username = request.POST['username']
        password = request.POST['password']
        user.objects.create(
            username = username,
            password = password
        )
        return response
     register = Register() 
    return render(request, 'pages/register.html'), {'form': register})
```  
