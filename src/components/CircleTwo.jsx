import { useEffect, useRef } from 'react';

function CircleTwo() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const messages = ["Quantos olhos há do outro lado da tela?", "A vigília nunca terminou.", "A próxima vez, ele piscará diferente.", "Não é você quem está movendo o cursor.", "Você só vê porque alguém permite.", "Tudo o que ele vê, ele guarda.", "Você o encarou por mais tempo do que devia.", "Este é seu chamado", "O último que clicou, nunca mais saiu.", "Você é a única coisa estranha aqui... por enquanto.", "O espelho também vê.", "A pupila dilata quando percebe medo.", "Isso não é apenas um olho.", "Olhos não veem. Eles mostram.", "Não olhe atrás de você"];
    //const backgroundSound = new Audio('/audio/573790_klankbeeld_horror-bowl.mp3');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const eyeRadius = 100;
    const irisRadius = 30;

    let mouseX = centerX;
    let mouseY = centerY;

    const drawEye = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#212121';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.arc(centerX, centerY, eyeRadius, 0, Math.PI * 2);
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
    };

    const drawEyelids = () => {
      ctx.beginPath();
      ctx.arc(centerX, centerY, eyeRadius + 1, Math.PI, Math.PI * 2);
      ctx.fillStyle = '#4a2a2a';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX, centerY, eyeRadius + 1, 0, Math.PI);
      ctx.fillStyle = '#4a2a2a';
      ctx.fill();
    };

    const blinkInterval = setInterval(() => {
      drawEyelids();

      setTimeout(drawEye, 200);
    }, 3000);

    drawEye();

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      drawEye();
    };

    const handleEyeClick = () => {
      //backgroundSound.play();
      alert(messages[Math.floor(Math.random() * messages.length)]);
    }

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleEyeClick);

    //backgroundSound.loop = true;

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleEyeClick);
      clearInterval(blinkInterval);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block' }} />;
}

export default CircleTwo;
