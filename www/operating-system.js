var system = {
    screen: {
        output: null,
        menu: {
            draw: function() {
                var background = system.screen.output.createLinearGradient(0, 0, 0, 20);
                background.addColorStop(0, "#EEE");
                background.addColorStop(.99, "#CCC");
                background.addColorStop(1, "#333");
                
                system.screen.output.fillStyle = background;
                system.screen.output.fillRect(0, 0, window.innerWidth, 20);
            }
        },
        dock: {
            draw: function() {
                
            }
        },
        desktop: {
            color: "#000",
            widgets: [],
            draw: function() {
                var background = system.screen.output.createLinearGradient(0, 0, 0, window.innerHeight);
                background.addColorStop(0, "#FFF");
                background.addColorStop(1, "#EEE");
                
                system.screen.output.fillStyle = background;
                system.screen.output.fillRect(0, 20, window.innerWidth, window.innerHeight-20);
            }
        },
        windows: {
            active: null
        }
    },
    apps: []
};

window.onload = function() {
    document.canvas = document.createElement("canvas");
    document.canvas.width = window.innerWidth;
    document.canvas.height = window.innerHeight;
    
    if(document.canvas.getContext) {
        document.body.innerHTML = "";    
        document.body.appendChild(document.canvas);
        system.screen.output = document.canvas.getContext("2d");
    }
    window.onresize = function() {
        system.screen.output.clearRect(0, 0, window.innerWidth, window.innerHeight);
        system.screen.desktop.draw();
        system.screen.menu.draw();
    }
}