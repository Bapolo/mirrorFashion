window.onload = () => {
    document.querySelector("#form-busca").onsubmit = () => {
        if (document.querySelector("#q").value === "") {
            document.querySelector("#form-busca input[type=search]").style.borderColor = "red"
            return false
        }
    }

    document.querySelector("#form-busca input[type=search]").addEventListener("focus", () => {
        document.querySelector("#form-busca input[type=search]").style.borderColor = "black"
    })

    var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
    var bannerAtual = 0;

    function trocarBanner()
    {
        bannerAtual = (bannerAtual + 1) % 2
        document.querySelector(".destaque img").src = banners[bannerAtual]
    }

    setInterval(trocarBanner, 4000)


}