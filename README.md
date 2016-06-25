#Test job
##Description
Создать приложение js, которое содержит в себе два раздела:
- Форма для загрузки видеофайла со следующими полями:
  - Название ролика;
  - Описание ролика;
  - Видеофайл
  
  Во время загрузки должна показываться полоса процесса загрузки;

- Список доступных роликов
	Каждый элемент списка содержит название, описание, плеер с превью и 	возможность воспроизведения (можно использовать html5 video player)

Для подключени к АПИ, используем http://api.smiber.com:8000/api/

API для отправки файла: /v1/content/add             method POST
```
	Параметры
	(Content-Type: multipart/form-data):

	name  – Название
	type_content – VIDEO
	video  –  сюда помещаем ролик, если VIDEO


	Ответ:

	{
   	 "status": "FAIL", - успешно(SUCCESS), ошибка (FAIL)
    	"errorMessageList": [
        	{
            	"fieldName": "phone", - название параметра, к которому относится ошибка
            	"message": "text ошибки" 
        	}
    	]
	}
```

если ответ SUCCESS, значит ролик ушёл в обработку, и через какое-то время он появится в ленте

API для получения файла: /v1/content/get             method GET

```
	Url  параметры:
	category_content – MY

	Ответ:

	{
    	"count": 471,
    	"items":
	 [
        	{
            	"id": "9761",
            	"idChannel": 39,
            	"idAuthor": 61,
            	"nameContent": "платный тест",
            	"params": {
                		"image": "ссылка на preview",
                		"video": "HYPERLINK "http://files.smiber.com/video/7835.mp4" \hhttp://files.smiber.com/video/7835.mp4",
                		"stream": "HYPERLINK "http://files.smiber.com/video/7835.m3u8" \hhttp://files.smiber.com/video/7835.m3u8",
            		}
       	 },……………………………………..
	]
	}
	
```
