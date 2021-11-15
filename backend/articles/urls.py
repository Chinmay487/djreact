from django.urls import path
from .import views

urlpatterns = [
    path('',views.ViewAll.as_view(),name = 'ArticleListView'),
    path('add',views.AddNew.as_view(),name='AddNew'),
    path('details/<str:key>',views.ViewOne.as_view(),name = 'ArticleDetailVeiw'),
    path('update/<str:key>',views.UpdateArticle.as_view(),name='updateArticle'),
    path('delete/<str:key>',views.DeleteArticle.as_view(),name='DeleteArticle'),
]
