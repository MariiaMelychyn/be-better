# Be-better project

## Work with GitHub

- Clone yourself dev(main) : git clone
  https://github.com/GoWeb-Internship/be-better.git
- Go to the master branch. git checkout master Pick up the latest changes in the
  master branch. git pull origin master Then create your branch while in the
  master branch, with the name of your task: git checkout -b name_your_branch
- Work only in your branch, push all changes ONLY to it: git add . git commit -m
  “init name_your_branch” git push origin name_your_branch
- When you have completely completed work in your branch and want to add these
  changes to the general project:
  - Move to the master branch git checkout master
  - Pull out all the changes that others have made git pull origin master
  - Go to your branch: git checkout name_your_branch
- Merge master) into your branch, resolving conflicts that shouldn't actually
  exist: git merge master If there are conflicts, we open our code editor and
  resolve the conflicts that have arisen (in case of difficulties, we turn to
  the team lead). git add . git commit -m “write the name of the specific task
  that we did”
- Push your branch remotely: git push origin name_your_branch
- Create a pull request to merge with master there on github

## Work with VS Code

You need install dependencies

`npm i`

Run project

`npm start`

All components create in components folder. The folder with the component must
contain 3 files : Component, Component.module.css and index.js for re-export. In
Component.module.css we use custom classes with @aplly fro TailwiindCss classes

# Gatsby

[Видео инструкция](https://www.youtube.com/watch?v=xfi7ay2rTTo&list=PLtL3lrXPn2rVMcj6AqXntvxOajp94Cogk&index=1)

[Руководство по оформлению Markdown файлов](https://gist.github.com/Jekins/2bf2d0638163f1294637)

[Еще интересная статья](https://blog.logrocket.com/how-to-use-gatsby-netlify-cms/)

# Форма

## Рабочая форма с Netlify:

[Инструкция](https://docs.netlify.com/forms/setup/#javascript-forms)

### Для статических сайтов:

```javascript
<form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <p>
    <label>
      Your Name: <input type="text" name="name" />
    </label>
  </p>
  <p>
    <label>
      Your Email: <input type="email" name="email" />
    </label>
  </p>
  <p>
    <label>
      Message: <textarea name="message"></textarea>
    </label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
```

[Работа с React-hook-form](https://react-hook-form.com/get-started)

## Telegram

Отправка сообщений с формы на бота в Телеграмм:

- [Создаем бота в телеграмм и группу, куда будут приходить сообщения](https://youtu.be/R4RhgBJpXSQ)
  (один из примеров, как это сделать)
- [Пишем запрос по АПИ Телеграмм](https://tlgrm.ru/docs/bots/api#sendmessage)

## Валидация

Для добавления выпадающего списка со всеми странами используется библиотека
**react-phone-input-2** и ее компонент **PhoneInput**. Этот компонент рендерится
внутри компонента **Controller**, который импортируем из библиотеки
**React-hook-form**. Приоритетные страны, которые всегда отображаются вверху
списка, настраиваются при помощи пропса **preferredCountries**, который
принимает массив нужных стран. Для валидации вводимого значения используется
пропс **isValid**. Он принимает функцию проверки валидности номера и его длины.
Для реализации проверки используются методы библиотеки **libphonenumber-js**:
**isValidPhoneNumber** и **validatePhoneNumberLength**.

### Поле ввода номера телефона и его валидация

Для добавления выпадающего списка со всеми странами используется библиотека
**react-phone-input-2** и ее компонент **PhoneInput**. Этот компонент рендерится
внутри компонента Controller, который импортируем из библиотеки React-hook-form.
Приоритетные страны, которые всегда отображаются вверху списка, настраиваются
при помощи пропса **preferredCountries**, который принимает массив нужных стран.
Для валидации вводимого значения используется пропс isValid. Он принимает
функцию проверки валидности номера и его длины. Для реализации проверки
используются методы библиотеки libphonenumber-js: **isValidPhoneNumber** и
**validatePhoneNumberLength**.

## Netlify Cms

На данный момент для работы Netlify Cms необходима версия 17.0.2 react и
react-dom. [Docs для Gatsby](https://www.netlifycms.org/docs/gatsby/)
[Видео пример](https://www.youtube.com/watch?v=IWmVSm2KevY)

## Админка

Для каждого меняющейся секции создаем папку в папке content. В
**static/admin/config.yml** добавляем коллекцию с нужными атрибутами. Пример:

```javascript
- name: 'price'
    label: 'Price'
    folder: 'content/price'
    create: yes
    slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
    editor:
      preview: true
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Publish Date', name: 'date', widget: 'datetime' }
      - { label: 'Description', name: 'description', widget: 'string' }
      - { label: 'Body', name: 'body', widget: 'markdown' }

```

В gatsby-config добавляем настройки к нашей новой папке в plugins. Пример:

```javascript
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `price`,
        path: `${__dirname}/content/price`,
      },
    },

```

## Локализация

При установке локализации могут возникнуть проблемы с установкой
**gatsby-plugin-react-i18next**. Необходимо установить версию ниже: **npm i
gatsby-plugin-react-i18next@1.2.3**

В файле **gatsby-config** внести настройки Пример:

```javascript
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`ua`, `en`, `ru`],
        defaultLanguage: `ua`,
        generateDefaultLanguagePage: '/ua',
        siteUrl: ``,

        i18nextOptions: {
          lng: 'ua',
          load: 'currentOnly',

          interpolation: {
            escapeValue: false,
          },

          keySeparator: false,
          nsSeparator: true,
        },
      },
    },
```

Затем в запросе страницы мы указываем переменную **$language**, используемую в
качестве фильтра, поэтому i18next получает доступ к доступным локали,
используемым в качестве запасного варианта.

```javascript
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
```

### Google Tag Manager

Для налаштування пікселів використовувала бібліотеку
**gatsby-plugin-facebook-pixel** Даний скрипт беремо із програми
**business.facebook.com** , та вставляємо у папку **src/pages/index.js** після

</main> .React не дає можливість вбудувати runnable код в межах тегів скрипта,
замість цього потрібно використовувати **dangerouslySetInnerHTML** Код має мати
такий вигляд:

```javascript
<script
  dangerouslySetInnerHTML={{
    __html: `
 !function(f,b,e,v,n,t,s)
 {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
 n.callMethod.apply(n,arguments):n.queue.push(arguments)};
 if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
 n.queue=[];t=b.createElement(e);t.async=!0;
 t.src=v;s=b.getElementsByTagName(e)[0];
 s.parentNode.insertBefore(t,s)}(window, document,'script',
 'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '414740170505309');
 fbq('track', 'PageView');
 `,
  }}
/>;

<script
  type="text/javascript"
  dangerouslySetInnerHTML={{
    __html: `
     <img height="1" width="1" style="display:none"
     src="https://www.facebook.com/tr?id=414740170505309&ev=PageView&noscript=1"
   />`,
  }}
></script>;
```
