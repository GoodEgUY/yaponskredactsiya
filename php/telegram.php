<?php



$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];
$title = '☻';
$token = "5541635908:AAF5zzxbL_-z7LYuFMhx8Qt7kBhclN2_QqY";
$chat_id = "-616379210";
$arr = array(
  '(НОВЫЙ ЗАКАЗ НА САЙТЕ)' => $title,
  'Имя покупателя:' => $name,
  'Телефон: ' => $phone,
  'Комментарий:' => $comment
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}&parse_mode=MarkDown","r");

if ($sendToTelegram) {
  header ("location: ../index.html");
} else {
  echo "Error";
}
?>