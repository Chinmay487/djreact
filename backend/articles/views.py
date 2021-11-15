# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Article
from .serializers import ArticleSerializer


# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


class HomePage(APIView):
    def get(self,request):
        
        helper_links = {
            'view all articles':'/view_all',
            'add new article':'/add_new',
            'delete article':'/delete/<str:key>',
            'view specified':'/view/<str:key>',
            'delete':'/delete/<str:key>',
            'update':'/update/<str:key>'
        }

        return Response(helper_links)


class ViewAll(APIView):
    def get(self,request):
        articles_list = Article.objects.all()
        article_data = ArticleSerializer(articles_list,many = True)
        return Response(article_data.data)


class AddNew(APIView):
    def post(self,request):
        
        
        new_article = ArticleSerializer(data = request.data)
        if new_article.is_valid():
            new_article.save()
        print(type(request.data))
        return Response('Article added')


class DeleteArticle(APIView):
    def get(self,request,key):
        article = Article.objects.get(id = key)
        article.delete()

        return Response('Article deleted successfully')


class ViewOne(APIView):
    def get(self,request,key):
        article = Article.objects.get(id = key)
        serializer = ArticleSerializer(article,many = False)
        
        return Response(serializer.data)


class UpdateArticle(APIView):
    def post(self,request,key):
        article = Article.objects.get(id = key)
        serialized_data = ArticleSerializer(instance = article,data = request.data)
       
        if serialized_data.is_valid():
            serialized_data.save()
        
        return Response("Article updated")
