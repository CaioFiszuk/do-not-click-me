import { useEffect, useRef } from 'react';

function CircleTwo() {
    const canvasRef = useRef(null);

    useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const eyeRadius = 100;
    const irisRadius = 30;

    const drawEye = (mouseX, mouseY) => {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.fillStyle = '#212121';
     ctx.fillRect(0, 0, canvas.width, canvas.height);

     ctx.beginPath();
     ctx.arc(centerX, centerY, eyeRadius, 0, Math.PI *2);
     ctx.fillStyle = '#ffffff';
     ctx.fill();
     ctx.strokeStyle = '#000000';
     ctx.lineWidth = 4;
     ctx.stroke();

      const dx = mouseX - centerX;
      const dy = mouseY - centerY;
      const angle = Math.atan2(dy, dx);

      const maxIrisOffset = eyeRadius - irisRadius - 10;

      const irisX = centerX + Math.cos(angle) * maxIrisOffset * 0.4;
      const irisY = centerY + Math.sin(angle) * maxIrisOffset * 0.4;

      ctx.beginPath();
      ctx.arc(irisX, irisY, irisRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#00aaff';
      ctx.fill();
      ctx.stroke();
    }

    drawEye(centerX, centerY);

    const handleMouseMove = (e) => {
      drawEye(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

    }, []);

  return (

    <div>
       <canvas ref={canvasRef}>

       </canvas>
    </div>
  )
}

export default CircleTwo;
