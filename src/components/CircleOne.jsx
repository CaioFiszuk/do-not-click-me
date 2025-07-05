import Swal from "sweetalert2";

function CircleOne() {
    const secretUrl = atob("aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQW50aW9jaHVzX0lWX0VwaXBoYW5lcw==");

    setTimeout(()=>{
      Swal.fire({
      title: 'Go away!!!',
      text: 'You should not be here',
      icon: 'warning',
      confirmButtonText: 'Fechar'
    });
    }, 10000);
  return (

    <div>
       <section>
        <p className="invertedText">Во третий год царствования царя <button onClick={() => window.location.href = secretUrl} className="invertedText__button">Антиоха Епифана</button>  во Израиле, муж некий, именем Александр, из колена Вениаминова, глагола отцу своему, глаголя: Вишь, почто должен есмь ходити по обычаям твоим, а не по обычаям матери моея? — ибо бе Александр иудей, сын жены еллинския</p>
       </section>
    </div>
  )
}

export default CircleOne;
