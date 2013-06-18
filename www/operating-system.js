var system = {
    screen: {
        canvas: null,
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
                var background = system.screen.output.createLinearGradient(0, 0, 0, window.innerHeight-20);
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
    system.screen.canvas = document.createElement("canvas");
    system.screen.canvas.width = window.innerWidth;
    system.screen.canvas.height = window.innerHeight;
    
    if(system.screen.canvas.getContext) {
        document.body.innerHTML = "";    
        document.body.appendChild(system.screen.canvas);
        system.screen.output = system.screen.canvas.getContext("2d");
        
        system.screen.desktop.draw();
        system.screen.menu.draw();
        system.screen.dock.draw();
    }
    window.onresize = function() {
        system.screen.canvas.width = window.innerWidth;
        system.screen.canvas.height = window.innerHeight;
        
        system.screen.output.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        system.screen.desktop.draw();
        system.screen.menu.draw();
        system.screen.dock.draw();
    }
}