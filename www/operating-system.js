var system = {
    screen: {
        canvas: null,
        output: null,
        menu: {
            draw: function() {
                var background = system.screen.output.createLinearGradient(0, 0, 0, 25);
                background.addColorStop(0, "#EEE");
                background.addColorStop(1, "#CCC");
                
                system.screen.output.fillStyle = background;
                system.screen.output.fillRect(0, 0, window.innerWidth, 24);
                system.screen.output.fillStyle = "#AAA";
                system.screen.output.fillRect(100, 24, window.innerWidth-100, 1);
                system.screen.output.fillStyle = "#777";
                system.screen.output.fillRect(0, 24, 100, 1);
            }
        },
        dock: {
            draw: function() {
                var background = system.screen.output.createLinearGradient(0, 0, 100, 0);
                background.addColorStop(0, "#666");
                background.addColorStop(1, "#888");
                
                system.screen.output.fillStyle = background;
                system.screen.output.fillRect(0, 25, 98, window.innerHeight-25);
                system.screen.output.fillStyle = "#999";
                system.screen.output.fillRect(98, 25, 1, window.innerHeight-25);
                system.screen.output.fillStyle = "#666";
                system.screen.output.fillRect(99, 25, 1, window.innerHeight-25);
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