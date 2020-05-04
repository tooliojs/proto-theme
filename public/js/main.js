// Loaders
hljs.initHighlightingOnLoad()
ezmoji.initEmojisOnLoad()

// Settings
var data = {
    modeCounter: 'dark',
    darkreader: {
        enable: {
            brightness: 100,
            contrast: 90,
            sepia: 10
        }
    },
    enableDarkMode: function() {
        DarkReader.enable(this.darkreader.enable)
        document.querySelector('.proto-mode--icon').classList.remove('fa-moon')
        document.querySelector('.proto-mode--icon').classList.add('fa-sun')
        localStorage.setItem('themeMode', 'dark')
        this.modeCounter = 'light'
    },
    disableDarkMode: function() {
        DarkReader.disable()
        document.querySelector('.proto-mode--icon').classList.remove('fa-sun')
        document.querySelector('.proto-mode--icon').classList.add('fa-moon')
        localStorage.setItem('themeMode', 'light')
        this.modeCounter = 'dark'
    }
}

// Night Mode
if(localStorage.getItem('themeMode')) {
    data.modeCounter = localStorage.getItem('themeMode')
    if(data.modeCounter === 'light') data.disableDarkMode()
    else data.enableDarkMode()
}
document.querySelector('.proto-mode').addEventListener('click', () => {
    if(data.modeCounter === 'light') data.disableDarkMode()
    else data.enableDarkMode()
})

