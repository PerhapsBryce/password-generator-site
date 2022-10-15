function generate_password()
{
    let password = "";
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!()-.?[]_`~;:@#$%^&*=';
    var charactersLength = characters.length;

    for ( var i = 0; i < 25; i++ ) {
      password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return password;
}

function set_style_2()
{
    document.getElementById("copy-button").style.display = "block";

    const password_display = document.getElementById("password-display");

    password_display.style.borderTopRightRadius = "0";
    password_display.style.borderBottomRightRadius = "0";

    return;
}

function display_password()
{
    document.getElementById("password-display").innerHTML = generate_password();

    set_style_2();

    return;
}

function copy_password()
{
    const password = document.getElementById("password-display").innerHTML
    navigator.clipboard.writeText(password);

    return;
}