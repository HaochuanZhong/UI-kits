    /* Navbar移动端按钮 */
    function toggleNavbar() {
        var x = document.getElementById("mobile");
        var y = document.getElementById("menu");
        if (x.className === "navbar-items-mobile" && y.className === "menu") {
            x.className += " responsive";
            y.className = 'menu-active';
        } else {
            x.className = "navbar-items-mobile";
            y.className = 'menu'
        }
    }