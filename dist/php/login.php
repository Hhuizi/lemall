<?php

    header("Content-Type:text/html;charset=utf-8;");
    $username = @$_POST["username"];
    $password = @$_POST["password"];
    if($username == "" || $password == ""){
        die("参数不全");
    }
    
    $con = mysql_connect("localhost","root","123456");
    if(!$con){
        die("数据库连接失败");
    }
    mysql_select_db("userlist", $con);
    $result = mysql_query(
                "SELECT username,password FROM 
                detaillist WHERE username='$username'"
    );

    $password = md5($password);
    while($row = mysql_fetch_array($result)){
        // echo json_encode($row);
        if($row['password'] == $password){
            die("登陆成功");
        }
    }
    echo mysql_error();

    echo "账号或者密码不正确";
?>