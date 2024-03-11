---
title: Lab 1
description: مقدمة عن ال Java script
---

## اللي اتعلمناه في المعمل دا

السلام عليكم ورحمة الله وبركاته
شوفنا كدا مع بعض ازاي ان الجافاسكريبت مهمة علشان نقد نتفاعل مع عناصر صفحة الويب ونغير فيها بشكل
dynamic .
خدنا مثال علي كدا ازاي غيرنا لون حاجة لما ضغطنا علي زرار عن طريق
event
اسمه
onclick
بيكون علي ال button

```html
<button onclick="document.getElementById('id').style.color = 'red'">
  Click me
</button>
```

وجبنا
elemnt by id
عن طريق

```javascript
document.getElementById('id');
```

وكان شوفنا طريقة من طرق كتابة ال JS وهي طريقة ال inline script وهي اننا نكتب الكود داخل ال html tag مباشرة زي كدا زي مشوفنا كدا في ال button

ولكن في طرق تانية زي اننا نكتبه في ملف خارجي ونستدعيه في ال html وهي طريقة افضل لانها بتسهل علينا الصيانة والتعديل وكمان بتسهل علينا القراءة والفهم للكود

```html
<script src="script.js"></script>
```

او اننا نكتبها داخل ال script tag

```html
<script>
  document.getElementById('id').style.color = 'red';
</script>
```

كمان عرفنا ان الجافا سكريب
loosly typed
يعني مش انا اللي بحدد ال type بتاع المتغيرات

```javascript
let x = 5;
let y = 'hello';
```

وان فيه حاجة عملتها مايكروسفت اسمها
typescript
ودي جافاسكريبت بس ب
types
وحاجات تانية اكتر ممكن تبحثوا عنها

```typescript
let x: number = 5;
let y: string = 'hello';
```

### استخدامات الجافاسكريبت في وقتنا الحالي

الجافاسكريبت بقت مهمة جدا في وقتنا الحالي ومن اهم استخداماتها
الويب عن طري مكتبات و frameworks زي

- [React](https://reactjs.org/)
- [Vue](https://vuejs.org/)
- [Angular](https://angular.io/)

تطبيقا الموبايل عن طريق

- [React Native](https://reactnative.dev/)

تطبيقات الdesktop عن طريق

- [Electron](https://www.electronjs.org/)

ال machine learning عن طريق

- [Tensorflow.js](https://www.tensorflow.org/js)

### مصادر مفيدة للجافاسكريبت

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools](https://www.w3schools.com/js/default.asp)
- [بلايليست مفيدة وواضحة](https://www.youtube.com/playlist?list=PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE)
- [cheet sheet](https://m.facebook.com/story.php?story_fbid=122128456850188232&id=61555646967917&mibextid=UyTHkb)
- [Useful Array Methods](https://www.facebook.com/100064008044612/posts/817442773732650/?mibextid=UyTHkb)
- [JavaScript for Absolute Beginners [EN]](https://www.youtube.com/watch?v=t089-_B-Vuo&ab_channel=ProgramWithAbu)

### التاسك المطلوب

{% tab-group %}

{% tab-list %}
{% tab label="Description" /%}
{% tab label="Acceptance criteria" /%}
{% /tab-list %}

{% tabs-panels %}
{% tab-panel %}
{% callout title="Report Description" %}
Create a Calculator using HTML, CSS, and JavaScript. The calculator should be able to perform the following operations:

- Addition
- Subtraction
- Multiplication
- Division

{% /callout %}
{% /tab-panel %}

{% tab-panel %}

```markdown
[] The calculator should have a user interface that is easy to use and understand.
[] The calculator should have buttons for the numbers 0\-9. and the operations \+, \-, \*, and /.
[] The calculator should be able to perform the following operations: addition, subtraction, multiplication, and division.
[] The calculator should be able to display the result of the operation.
[] The calculator should be able to clear the result and start a new operation.
```

{% /tab-panel %}
{% /tabs-panels %}

{% /tab-group %}
