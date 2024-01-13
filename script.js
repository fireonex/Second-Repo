    let greetingUser;
    let message;
    function showNamePrompt(language) {

        switch(language) {
            case 'English':
                message = 'Please enter your name &#129392;';
                greetingUser = 'We love our user named'
                break;
            case 'Русский':
                message = 'Пожалуйста, введи своё имя &#129392;';
                greetingUser = 'Мы любим нашего пользователя по имени '
                break;
            case 'Polski':
                message = 'Proszę wprowadzić swoje imię &#129392;';
                greetingUser = 'Kochamy naszego użytkownika o imieniu '
                break;
            case 'Español':
                message = 'Por favor, introduce tu nombre &#129392;';
                greetingUser = 'Amamos a nuestro usuario llamado '
                break;
            case 'Deutsch':
                message = 'Bitte geben Sie Ihren Namen ein &#129392;';
                greetingUser = 'Wir lieben unseren Benutzer namens '
                break;
            case '中国人':
                message = '请输入您的姓名 &#129392;';
                greetingUser = '我们爱我们的用户，名字叫 '
                break;
            case '日本語':
                message = 'お名前を入力してください &#129392;';
                greetingUser = '私たちは、という名前のユーザーを愛しています '
                break;
        }

        document.querySelector('.nameAsk').innerHTML = message;
        document.querySelector('.entryFieldName').style.display = 'block';
        //document.getElementById('username').textContent = 'Hello, ' + name + '!';

    }
    let arrOfLanguages = document.querySelectorAll('.language');
    for (let i = 0; i < arrOfLanguages.length; i++) {
        arrOfLanguages[i].addEventListener('click', function () {
            let valueLang = arrOfLanguages[i].attributes.language.value;
            showNamePrompt(valueLang)
        } )
    }
    document.querySelector('.sendButton').addEventListener('click', function () {
        let collectionName = document.querySelector('.entryFieldName').value;
        document.querySelector('.hurtWithGreet').textContent = greetingUser + collectionName;

    }) ;


