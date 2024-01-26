import { useEffect, useState } from "react";
import { NumberDisplay } from "./components/NumberDisplay"

export function App() {
  const [timeOver, setTimeOver] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("01/25/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (24 * 60 * 60 * 1000));
      setDays(d);

      const h = Math.floor((difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      setHours(h);

      const m = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
      setMinutes(m);

      const s = Math.floor((difference % (60 * 1000)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setTimeOver(true);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-slate-900 flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-4 items-center justify-center">
        {!timeOver ? (
          <h2 className="text-slate-200 text-2xl">Esta oferta termina em:</h2>
        ) : (
          <h2 className="text-slate-200 text-2xl">
            Oferta encerrada. Obrigado e até a próxima!
          </h2>
        )}
        <div className="flex gap-8">
          <div className="flex flex-col items-center justify-center">
            <NumberDisplay timeValue={days} />
            <span className="text-slate-300 text-sm">dias</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <NumberDisplay timeValue={hours} />
            <span className="text-slate-300 text-sm">horas</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <NumberDisplay timeValue={minutes} />
            <span className="text-slate-300 text-sm">minutos</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <NumberDisplay timeValue={seconds} />
            <span className="text-slate-300 text-sm">segundos</span>
          </div>
        </div>
      </div>
    </main>
  )
}