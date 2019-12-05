<?php
$name = $_POST['name'];
$number = $_POST['number'];
$name = htmlspecialchars($name);
$number = htmlspecialchars($number);
$name = urldecode($name);
$number = urldecode($number);
$name = trim($name);
$number = trim($number);
if (mail("natalia.marckina2010@yandex.ru", "Заявка с сайта", "Имя:".$name.". Телефон: ".$number ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>