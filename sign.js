var sign = {
    init: function(canvas, img){
        sign.canvas = canvas;
        sign.img = img;

        sign.createCtx();
        sign.makePlume();
        sign.drawOnClick();
        sign.stopDraw();
        sign.makeDraw();
    },

    createCtx: function(){
        if (sign.canvas.getContext) {
            sign.ctx = canvas.getContext('2d');
          } else {
            alert("désolé, votre navigateur ne supporte pas canvas");
          };
    },

    makePlume: function(){
        sign.plume = new Image();
        sign.plume.src = sign.img;
        sign.plume.addEventListener('load', function() {
            sign.ctx.drawImage(sign.plume, 0.1, 0.1);
        });
    },

    makeDraw: function(){
        sign.canvas.addEventListener('mousemove', function(e){
            if(sign.click){
                // dessiner des point
                sign.ctx.beginPath();
                sign.ctx.arc(e.offsetX, e.offsetY, 3, 0, 2 * Math.PI, false);
                sign.ctx.fillStyle = '#000';
                sign.ctx.fill();
            }else if(!sign.click){

            };
        }.bind(sign));
        
    },

    drawOnClick: function(){
        sign.canvas.addEventListener('mousedown', function(){
            sign.click = true;
        });
    },
    
    stopDraw: function(){
        sign.canvas.addEventListener('mouseup', function(){
            sign.click = false;
        });
    }

}