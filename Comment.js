    //===========================================  Prometheus Front-End ================================================================




    //==============================================  ПЕРВАЯ НЕДЕЛЯ ===================================================================

/* Роадмап фронтендера - https://roadmap.sh/roadmaps/frontend.png . Этот курс будет охватывать основы для фронтенд разработчика на карте
    это все блоки до центрального блока - web security knowledge. Все остальное не факт что пригодится, так что нужно учить только
    то что нужно для работы в текущий момент или перспективное(для продвижения карьеры/работы над новый проектом), а не хвататься за
    все подряд, а то получится что можно знать много поверхностно. Также нужно очень много практиковаться что бы теория не забывалась
    и получать новый опыт при разработке и дебаггинге(поиске ошибок) кода. */

         
    
{//    ====    ЭФФЕКТИВНЫЙ ПРОЦЕСС РАЗРАБОТКИ     ====

    /* Для того чтобы писать код эффективно нужно настроить и автоматизировать этот процесс. Он состоит из нескольких частей:
         1) настройка среды разработки,
         2) как искать информацию,
         3) работа с ошибками. */
    

  /*1) Настройка среды разработки:
        - выберете комфортный редактор кода, настройте его так что бы было удобно работать


    2) Поиск информации:
        - MDN https://developer.mozilla.org
        - Stack Overflow https://stackoverflow.com/ - форум для программистов, можно задать вопрос если не нагуглили.
        - научитесь гуглить(правильно вводить запрос) - например если нужно найти метод который превращает строку в число, а мы не
            помним как он называется нужно загуглить - сначала пишем на каком языке(чтобы сузить область поиска) Javascript, потом
            максимально коротко пишем что мы хотим найти convert string to number. Лучше гуглить сразу на английском языке, так 
            больше шансов что информация найдется.
        - задавайте вопросы и помогайте другим.
        - практикуйтесь, выполняйте задание разными способами.


    3) Работа с ошибками:
        - Если код не работает, нужно его дебажить(найти ошибку). Ошибки бывают синтаксические и логические. Про синтаксические
            зачастую браузер сделает сообщение в консоли. Если она там есть но не понятно что за ошибка, можно ее скопировать и
            загуглить.
        - Если ошибка логическая, то нужно понимать что происходит в коде, какие данные должны быть на входе или выходе из
            ф-и, какие значения должны быть присвоены переменным. Это можно сделать двумя способами: 
            а) добавить в код console.log() в нужном месте или ключевое слово debugger - он остановит выполнение ф-и в нужном 
            месте и в инспекторе можно будет просмотреть данные в данный момент, или добавить alert() - но его не рекомендуют 
            использовать, потому что если его забыть удалить то это сразу выразится в работе сайта и будет всем видно в отличие
            от консольлога.

            b)использовать инструменты дебаггинга самого браузера. Рассмотрим на примере GoogleChrome,
            Открыть инструменты разработчика можно нажав f12 или Crtl + Shift + I или нажав в правом верхнем углу 
                три точки(меню)-> другие инструменты-> инструменты разработчика.
            Откроется поле с 8ю закладками. Чаще всего используют:
       
            - Sources - вкладака используется для дэбаггинга. Тут можно видеть какие документы подключены, ставить брейкпоинты, на которых
                браузер будет останавливать выполнение кода и анализировать данные которые приходят. Например выбрав JS файл
                видим свой код.
                function showText(el) {
                    if(el.previousElementSibling.clientHeight === 80){
                        el.previousElementSibling.style.height = "100%";
                        el.innerHTML= "Show less";
                    } else {
                        el.previousElementSibling.style.height = "80px";
                        el.innerHTML= "Read more...";
                    }
                И кликнув слева от него на номере строки например 2, 4, 6, потом на странице нажимаем на кнопку Read more... и
                программа останавливается сначала на 2й строке(if), наведя курсор на el в showText(el) можно увидеть информацию
                про передаваемый объект. А если нужно увидеть какие данные пришли выделяем фрагмент строки
                el.previousElementSibling.clientHeight и правой кнопкой кликаем на нем выбрав add to watch и в окне справа
                раскрывается секция watch в которой видно какой элемент и какое значение пришло. 
                *Что бы продолжать работу программы далее нужно нажать кнопку справа над панелькой "Resume script execution F8",
                тогда выполнение кода продолжится до следующего брейкпоинта строка 4(innerHTML), нажимаем еще раз и программа
                проскакивает(не останавливается на строке 6(превая строка блока else)) потому что туда код не дошел, так как
                выполнилось первое условие блока if else.

                В меню Call Stack - видим какие ф-ии сейчас выполняются, если нажать на ф-ю anonymous -  будет состояние до того
                как showText была вызвана. Если нажать на ф-ю то справа в окне Scope можно увидеть к каким переменным имеет доступ
                ф-я на текущем рядке кода  


        Корисні посилання
            
        HTML
        https://html.com/
        
        CSS
        https://css-tricks.com/
        
        JS Visualizer
        https://www.jsv9000.app/
        
        Algorithm Visualizer
        https://algorithm-visualizer.org/
        
        Git and GitHub
        https://learngitbranching.js.org/?locale=uk
        
        React Tutorial
        https://react-tutorial.app/
        
        API
        https://rapidapi.com/learn
        
        Web3
        https://www.useweb3.xyz/  */

}


{/*    ====    КАК РАБОТАЕТ WEB     ====


    +++ Как работает ИНТЕРНЕТ

        IP адреса — (Internet Protocol address) - ідентифікатор (унікальний числовий номер) мережевого рівня, який використовується для 
            адресації комп'ютерів чи пристроїв у мережах.

        Сервер — комп'ютер, який обслуговує всі підключені до нього персональні комп'ютери. При цьому сервер виконує свої функції і 
            завдання без участі в цьому процесі людини, тобто самостійно.

        Клієнт — апаратний або програмний компонент обчислювальної системи, що надсилає запити серверу.

        Інтернет-провайдер — компанія, яка надає доступ до інтернету.

        Роутер (маршрутизатор) — спеціалізований пристрій, який пересилає пакети між різними сегментами мережі на основі правил та таблиць 
            маршрутизації.

        Пакет — одиниця даних, складена в єдиний пакет, який рухається по заданому мережевому шляху.


        Интернет - может передаваться по кабелю, через спутник или моб. связь. Он дает возможность общаться между собой компьютерам или
            устройствам которы подключены к этому кабелю/спутник/моб. связь. Сервер это копмьютер подключенный к интернет, на его жестких
            дисках хранятся страницы. У каждого сервера есть уникальный IP адресс (интернет протокол) это как у нас физический адресс.
            Благодаря IP адрессу компьютеры могут находить друг друга. Но поскольюку числовое представление IP адресса мы не запомним
            (57.148.46.375) мы даем серверам названия(google.com).

            У домашнего компьютера есть IP адресс, но он не является сервером, так как подключен к интернету не напрямую. Такие компьютеры
            называются клиентами, потому что для доступа в интернет они используют провайдера. Тоесть когда на дом. компе хотим зайти на 
            свою почту на gmail.com сначала провайдер дает доступ к интернету дом.компу, потом с сервера gmail загружаются страницы и потом
            мы можем их просмотреть на дом. компе.

            Когда информация(картинки, страницы, ...) путешествует по интернету то компьютеры их разбивают на небольшие части - пакеты. Когда
            они доходят к пункту назначения(полностью загружаются) они заново собираются в заданой последовательности.
            
            Если два комьютера подключены к одному кабелю с интернетом, то что бы каждому приходила своя информация, они должны быть подключены
            к роутеру(маршрутизатору) который присвоит каждому компу свой IP адресс. На пути следования запроса от дом. компа к серверу может
            быть много роутеров и каждый перед отправкой запроса дальше добавляет к нему свой IP как обвертку. Таких обверток может быть около
            20 ти пока запрос дойдет до сервера, потом сервер формирует ответ и добавляет эти IP адресса обертки в том же количестве и порядке
            как они к нему пришли. А когда информация будет идти назад к комьютеру, каждый роутер будет забирать свою обертку IP при отправке 
            информации дальше к пользователю.
            

        Разница интернета и веба(www)
            Интернет это - сеть, возможность компьютеров соединятся друг с другом. В этом процессе web(всемирная паутина) - может и не принимать
                участия.

            Всемирная паутина(web) - это страницы которым мы видим используя приборы которые находяться в сети, то есть это коллекция информации
                к которой мы имеем доступ благодаря интернету.

            Интернет это как дороги которые соединяют города, а web(всемирная паутина) - это здания или магазины которые находятся возле дороги.
                Чтобы зайти в магазин - нужно пройти по дороге. Чтобы получить доступ к web нужно воспользоваться интернетом.

        Як працює WWW та браузер (базовий курс)
        https://courses.prometheus.org.ua/courses/course-v1:LITS+114+2022_T2/courseware/b52fdaef66554d7cbb90805509f00c03/765e604d9d1746ff84301b1d165ce2ae/?child=first 

        How Does the Internet Work?
        https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm



    +++ Как работает WEB(WWW - world wide web)

        Словник
        Інспектувати код — перевіряти код програми, не лише для виявлення помилок, а й для покращення загальної якості програмного коду.

        IPv4 — четверта версія інтернет-протоколу (IP), яка використовує 32-бітові (чотирьохбайтні) адреси, що обмежують адресний простір. Формою 
            запису IPv4-адреси є запис як чотирьох десяткових чисел (від 0 до 255), розділених точками. Через дріб вказується довжина маски 
            підмережі.
            Наприклад: 172.16.254.1

        IPv6 — 
        нова версія інтернет-протоколу (IP), покликана вирішити проблеми, з якими зіткнулася попередня версія (IPv4). Довжина адреси IPv6 становить 
        128 біт. В IPv6-адресі записами є вісім 16-бітних блоків, розділених двокрапками.
        Наприклад: 2001:0db8:0000:0000:0000:8a2e:0370:7334

        Кеш (англ. cache) — особлива швидкісна пам'ять або частина оперативної пам'яті, де зберігаються копії часто використовуваних даних. 

        Закешовані дані (англ. cached data) — колекція даних, що дублюють початкові значення, збережені в іншому місці на вашому пристрої, зазвичай 
            для полегшення доступу.

        Система доменних імен - DNS (англ. Domain Name System) — комп'ютерна розподілена система для отримання інформації про домени. Найчастіше 
            використовується для отримання IP-адреси за ім'ям хоста.

        Запит (англ. request) — запит до сервера, який його обробляє.

        Відповідь (англ. response) — відповідь, яку повертає сервер.

        Headers — спеціальні параметри, які несуть певну службову інформацію про з'єднання HTTP.

        Фреймворк (англ. framework) — це своєрідний каркас для створення комп’ютерних програм. Фреймворк «нав’язує» розробнику певні архітектурні 
            обмеження при створенні програм.

        JSON (англ. JavaScript Object Notation) — текстовий формат обміну даними, що базується на JavaScript. Але при цьому формат незалежний від JS 
            може використовуватися в будь-якій мові програмування.

        Web Sockets — це передова технологія, яка дозволяє створювати інтерактивне з'єднання між клієнтом (браузером) та сервером для обміну 
            повідомленнями у режимі реального часу.


        Вспомним ранее изученное в предыдущем курсе и немного углубимся в детали. Время от времени будем возвращаться к некоторым частям этого
            видео чтобы рассмотреть их детальнее, потому что весь курс в целом построен вокруг того как работает веб, как браузер интерпретирует
            написанный код, как реагирует на события пользователя и в какой последовательности их исполняет, как делает запрос на сервер, получает
            и обрабатывает информацию от него.

            Начнем с самого распространенного сценария. 
            Открываем браузер вводим адресс сайта и нажимаем ентер. Сайт сохранен где-то на сервере. Нашу веб страницу сервер мог сгенерировать или
            уже сохраненную отослать в ответ на запрос. А браузер если сильно упростить - интерпретатор, который получил страницу, прочитал код,
            пропроцессил его и отобразил на экране. Это в общех чертах, детальнее поговорим в следующем видео, сейчас же нам нужно понимать что
            страница на экране была сгенерирована на сервере и прислана в браузер по его запросу. Важный вопрос на этом этапе - откуда сервер знает
            что мы обращаемся именно к нему когда вводим адресс сайта - потому что серверов очень много. Официальный адресс сайта - это IP адресс.
            IP - internet protocol, он выглядит так IPv4 172.16.254.1 или в современном виде немного сложнее 2001:0db8:0000:0000:0000:8a2e:0370:7334
            - IPv6. Конечно такие числа нам трудно запомнить и каждый раз вводить их неудобно(хотя и можем).

            Первое что делает браузер когда мы ввели доменное имя и нажали энтер - превращает доменное имя в IP адресс. Сначала браузер смотрит в
            свои захешированные данные, если мы уже посещали этот сайт то IP адресс хранится в них. Если не посещали, тогда браузер обращается к 
            DNS(Domen name system - система доменных имен) серверу - это большой справочник где каждому доменному имени присвоен свой IP адресс.
            ДНС сервер превращает дом. имя в IP адресс и отсылает назад браузеру и уже по IP адресс браузер обращается к веб серверу. Веб сервер
            в ответ на запрос браузера посылает ему готовую или вновь сгенерированную страницу. Браузер получив такую страницу знает что делать
            дальше и как ее обработать.

            Часть где мы вводим url адресс в адрессную строку называется - request(запрос). Браузер делает запрос к веб серверу за конкретной
            информацией. request(запрос) - это набор данных где url адресс только часть данных. Можно открыть панель управления разработчика
            -> вкладку Network(нажать на строку во вкладке name) и просмотреть детали запроса. Сюдаже входит и тип запроса request method. 
            Для получения информации(GET)и сохранения информации на сервере(POST) используют разные типа запросов, их мы рассмотрим дальше в курсе.
            Запрос может содержать meta(мета) данные - которые мы называем хедерами(response headers) - это дополнительная информация как для
            сервера так и для браузера. Всё что браузер получает в ответ на свой запрос называется - response(вкладка тут же). Традиционно на
            первый запрос браузер получает index.html - страницу, которая содержит хтмл код который браузер процессит и отображает на экране.


        *** Примененные технологии.
            Разобрались с процессом, теперь посмотрим какие технологии применяются на каждом этапе. 
            
            Всё что мы видим на экране - результат взаимодействия 3х технологий: HTML(язык разметки - отвечает за структуру сайта,  за то где и какие
            эл. должны размещаться, браузер понимает хтмл потому что это стандартизированный язык), CSS(создает хороший внешний вид сайта),
            JavaScript(логика и динамика сайта -  если сайт должен реагировать на действия пользователя, отправлять данные формы или выполнять любое 
            другое взаимодействие с пользователем). 

            Вся эта передача данных тоже стандартизирована, например какой вид должен быть у request(запрос) и response(ответ). Вид определяется
            технологией которая при этом применяется, например HTTP - hypertext transport protocol, также есть еще стандарт HTTPS - hypertext transport 
            protocol secure - это тоже самое но в зашифрованой форме. Все современныйе сайта используют HTTPS, поэтому данные отправляемые на сервер и
            получаемые с него зашифрованы, а значит защищены, только браузер и сервер обмениваются между собой специальными ключами благодаря которым
            могут расшифровать данные отдельно на стороне браузера или на строне сервера. Но пока данные в процессе передачи - они зашифрованы, и если
            кто-то перехватит нашу транзакцию(а такое технически возможно) он получит только набор непонятных символов, а не посылаемые данные.

            Для того чтобы страницу можно было генерировать на сервере используются серверные языки программирования: php, node.js, python, java или
            фреймворки на основе этих языков программирования(джанго...). Простыми словами фреймворки - это наборы вспомогательных инструментов которые
            упрощают процесс разработки, то есть не нужно каждый раз изобретать колесо и сосредотачиваться на деталях разработки, фреймворки это берут
            на себя, мы же можем сосредоточится на общей бизнес логике. Такие же фреймворки существуют и для фронтенда - react, angular, vue(коротенько
            ознакомимся с ними в конце курса).

            Так в целом работает веб. Но он намного больше чем просто хтмл код. Например мобильные приложения как например твиттер или фейсбук и данные
            которые в них приходят извне из сети, например картинки или посты которые выкладывают ваши друзья, но в этом случаем мы не получаем хтмл
            страницу в response, а только набор данных которые нужно отобразить на экране нашего приспособления(телефон/планшет). Поэтому нужно понимать
            что под словом веб подразумевается не только веб страницы, а любое взаимодействие пользовательского приспособления находящегося в сети с 
            сервером который находится далеко(не в комнате). Request/response паттерн всегда тот самый(одинаковый) разница только в формате данных которые
            пересылаются. В случае с браузером на первый запрос он получает документ в формате хтмл, но если это мобильное приложение оно получает данные
            в формате json(java script object notation) - его мы рассотрим позже на курсе. Формат данных указывается в header запроса. Если браузер получает 
            ответ формате json, то он понимает что их не нужно анализировать, парсить, отображать, а только передать в приложение и уже код написанный 
            разработчиками разберется что с этими данными дальше делать.

            Тоесть форматы данных могут быть разными, постоянная только идея обмена информацией между фронтендом и сервером и дальнейшим процессингом этой
            информации браузером или кодом приложения. Есть более прогрессивные технологии, когда браузеру не обязательно делать запрос данных, сервер
            может присылать их самостоятельно когда такие данные у него появляются браузеру при этом нужно установить постоянную связь с сервером и не 
            закрывать её(связь) и когда на сервере появятся определенные данные он их отправить автоматически - такая технология называется веб сокеты и на
            ее основе построены большинство онлайн игр и чатов.
  
*/}


{/*    ====    РЕНДЕРИНГ     ====

*/}
































